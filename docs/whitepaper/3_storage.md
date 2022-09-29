---
id: 3_storage
title: Storage
description: Storage | Iron Fish Whitepaper
---

<img src ="/img/whitepaper/storage.png" width="100%" role="presentation" style={{marginBottom:'25px'}} />

In this section, we’ll start by reviewing what we store (the data structures and models of Iron Fish), and then move into how we store it (using both LevelDB and IndexDB). We’ll start by looking at the most basic data structures that represent the Iron Fish global state: notes and nullifiers.

## Data Structures and Models

### Note

A _note_ is a representation of a spendable form of payment, like a bill. It is very similar to a UTXO in Bitcoin. A note is only ever referenced publicly when it is created as an output of a transaction, and only in its hashed form. The contents of the note themselves are private.

The plaintext contents of a note are:

- $$(pk, d)$$: the transmission key and the diversifier of the recipient’s address (e.g. the owner of the note’s public key which we’ll explain in the Account section)
- $$v$$ : the plaintext value that the note holds
- $$rcm$$ : note randomness used to generate a Pedersen hash for the note
- $$memo$$ : a 32-byte memo field

### Nullifier

A _nullifier_ is a unique identifier to a note, but is unlinkable to its note. A note can only be spent if its nullifier is revealed as part of the transaction. Once the nullifier is revealed it is saved in one of the two Iron Fish global data structures that all nodes keep track of — the Merkle Tree of Notes and the Merkle Tree of Nullifiers (more on these in a moment).

This ensures a note cannot be spent twice (as it would have to reveal the same nullifier twice, and such attempts would be rejected). The nullifier is unique to its note because it is derived from private information about the note — the `nk` (nullifier deriving key, more on this in the Account section), `cm` (note commitment), and `position` (index in the Merkle tree).

## Merkle Trees

As mentioned above, Iron Fish stores both notes and nullifiers in Merkle trees. A Merkle tree is an _accumulator_ data structure, meaning it is used to represent many elements with one small identifier (a hash).

### Merkle Tree of Notes

The Merkle Tree of Notes is fixed-size, with a depth of 32; and it is used to hold all the notes that are created. Unlike in other blockchains where a UTXO is removed after it is spent, this Merkle tree is an add-only data structure where notes are added sequentially to the tree. Although a Merkle tree of depth 32 is very large (meaning it can hold 4,294,967,296 notes!), it is finite, which isn’t a great solution for an ever-growing currency. When the Merkle tree gets to be completely full, it becomes a read-only tree, allowing old notes to be spent from it. A brand new Merkle tree is then constructed.

We use a Pedersen hash both on the notes, and for the intermediate nodes in the Merkle tree — using the [Jubjub elliptic curve](9_appendix.md#bls12-381-and-the-jubjub-curve). Pedersen hashes are SNARK-friendly, meaning they can be efficiently constructed within a zero-knowledge SNARK proving circuit.

Remember that the main purpose for our Merkle Tree of Notes is to store notes that users can spend later while preserving that user’s privacy. In order to do this, the notes in our Merkle tree store an encrypted note, along with other helper fields. All the information necessary to spend the note is contained here, thus the note owner doesn't need to download the specific block or transaction that resulted in this note.

#### Merkle Note

A Merkle Note consists of:

|                          |                                                                                                                                                                                                                                                                                         |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **value_commitment**     | A Pedersen Commitment of the note’s value.                                                                                                                                                                                                                                              |
| **note_commitment**      | A Windowed Pedersen Commitment that is used to hash all the contents of the Merkle note.                                                                                                                                                                                                |
| **public_key**           | A public key that gets created when the note it’s associated with is created. This is used such that the recipient can decrypt the Note and spend it in the future, using a [Diffie-Hellman key exchange](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange) technique. |
| **encrypted_note**       | The encrypted note that the recipient can decrypt using the public_key mentioned above.                                                                                                                                                                                                 |
| **note_encryption_keys** | An encrypted field to hold all the necessary info for the sender to decrypt the Note later (so the sender can reconstruct a transaction history).                                                                                                                                       |

### Merkle Tree of Nullifiers

Just like the Merkle Tree of Notes is an accumulator for notes, the Merkle Tree of Nullifiers is an accumulator for nullifiers. It is simply used to keep track of all the nullifiers (which are 32-byte numbers) ever revealed when their accompanying notes are spent.

We’ve chosen this tree to be the same size as the Merkle Tree of Notes since it’ll grow in linear proportion. However, we chose a different hashing function than Pedersen because this tree is not referenced in any of the zero-knowledge proofs, and therefore can use a faster hashing function. We chose blake3.

We wouldn’t have any of these notes and nullifiers if they weren't part of transactions (we cover transactions in more detail [here](6_transaction.md#transaction-components)) that get accepted to be part of the overall blockchain. Next, we’ll go over exactly how all these components make up blocks, which in turn make up the Iron Fish blockchain.

## Block and Block Header

The main ingredient for a blockchain is a block, and each block has an accompanying block header. A block simply holds [transactions](6_transaction.md) that are waiting to be finalized by being added to the blockchain, and a block header gives the necessary information about the block for it to be validated and accepted by others in the network. In short, a block header validates a block, and a block holds transactions. The transactions have nullifiers from the sender spending some notes, and new notes that are created for the recipient.

With all that in mind, how does a block header help validate a block?

### Block Header

A block header consists of the following (some of these terms, such as [Output Description](6_transaction.md#output-description), we cover later in the paper):

| Block Header            |                                                                                                                                                                                                                                |
| ----------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| **sequence**            | The sequence number of this block. Blocks in a chain increase in ascending order of sequence. More than one block may have the same sequence number (indicating a fork in the chain), but only one fork is selected at a time. |
| **previousBlockHash**   |                                                                                          The hash of the previous block in the chain.                                                                                          |
| **noteCommitment**      | Commitment to the Merkle Tree of Notes after all new notes from transactions in this block have been added to it. Stored as the hash and the size of the tree at the time the hash was calculated. |
| **nullifierCommitment** |                           Commitment to the nullifier set after all the spends in this block have been added to it. Stored as the hash and the size of the set at the time the hash was calculated.                            |
| **target**              |                                                       The hash of this block must be lower than this target value in order for the block to be accepted onto the chain.                                                        |
| **randomness**          |                                                                                         The nonce used to calculate this block’s hash                                                                                          |
| **timestamp**           |         Unix timestamp according to the miner who mined the block. This value must be taken with a grain of salt, but miners will want to verify that it's an appropriate distance to the previous block's timestamp.          |
| **minersFee**           |                                                            A single (simplified) transaction representing the miners fee consisting of only one Output Description.                                                            |

Note that although the block header is missing its block hash, it can be computed using the Iron Fish Hashing Algorithm given all the elements of the block header.

The steps necessary for another node (e.g. device or user) to validate a block are:

1.  The previous Block that this Block is referencing exists (by using the **previousBlockHash** field).
2.  The **target** is the one that the verifying node agrees to (more on this later on how the target and difficulty are calculated).
3.  When all the contents of the block header are hashed, that hash is numerically <em>less</em> than the **target** — this is largely achieved by the miner from tweaking the **randomness** value.
4.  The **timestamp** for this Block makes sense (that its timestamp is greater than that of the previous Block by 12 seconds, +/- 10 seconds as buffer).
5.  All the transactions in the Block are valid (more on this in the Transactions section).
6.  The **minersFee**, the Miner rewards for presenting this Block, is valid, meaning that it is exactly the agreed upon block reward plus all the transaction fees in the Transactions (more on this in the Mining section).
7.  After all transactions are added to the Notes and Nullifiers Merkle trees, validate that the Notes tree's root hash matches the **noteCommitment** field and the Nullifier tree's root hash matches the **nullifierCommitment** field.

## How Iron Fish Stores Data

So far, we’ve been talking about what is necessary for an Iron Fish node to store, but not the how. In this section, we’ll go over exactly how Iron Fish stores these notes, nullifiers, blocks, transactions, and block headers such that the storage layer works both as a Command Line Interface (CLI) tool running as a program on your computer, and also entirely in the browser.

Since we knew that running a full implementation of Iron Fish in the browser was going to be more challenging than running it in the NodeJS terminal environment, we focused on that first. The most robust database choice for applications wanting a database in the browser is [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API). Unfortunately, there wasn't an accompanying IndexedDB implementation for NodeJS, so we chose [LevelDB](https://github.com/google/leveldb) for our NodeJS implementation.

To prevent having to juggle two separate storage implementations for the two different databases, our implementation of Iron Fish has a generic layer of abstraction for data stores and database access based on [LevelUp](https://github.com/Level/levelup). This abstraction layer takes care of the specific implementations of the underlying database, and exposes a generic layer that can be used both in the browser and NodeJS environment, offering a simple datastore-agnostic API.

<img src ="/img/whitepaper/storage/storage1.svg" width="50%" role="presentation" />

### The Storage Layer API

In simple terms, the storage layer is an API over its underlying data stores — it can create stores from schemas and operate on them with all the normal key-value store operations like GET, PUT, DEL, and HAS. For a full overview of the specific implementation of our storage layer, please reference the storage layer README in our GitHub repository.
