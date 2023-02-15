---
id: 3_storage
title: Storage
description: Storage | Iron Fish Whitepaper
---

<img src ="/img/whitepaper/storage.png" width="100%" role="presentation" style={{marginBottom:'25px'}} />

In this section, we’ll start by reviewing what we store (the data structures and models of Iron Fish), and then move into how we store it (using both LevelDB and IndexDB). We’ll start by looking at the most basic data structures that represent the Iron Fish global state: notes and nullifiers.

## Data Structures and Models

### Note

A _note_ is a representation of a spendable form of payment, like a bill. It is very similar to a \
UTXO in Bitcoin. A note is only ever referenced publicly when it is created as an output of a transaction, and only in its hashed form. The contents of the note themselves are private.

The plaintext contents of a note are:

* _(pk):_ the transmission key of the recipient's address (e.g. the owner of the note’s public key, which we’ll explain in the Accounts section)
* _v:_ the plaintext value that the note holds 
* _rcm:_ note randomness used to generate a Pedersen hash for the note
* _memo:_ a 32-byte memo field for arbitrary data for a sender to fill out (you can think of it like the memo field on a check)
* _sender:_ the public address (transmission key) of the sender
* _asset identifier:_ 32-byte hash representing the asset type 

### Asset  (TBD)

```rust
pub struct Asset {
   /// Name of the asset
   pub(crate) name: [u8; NAME_LENGTH],

   /// Metadata fields for the asset (ex. chain, network, token identifier)
   pub(crate) metadata: [u8; METADATA_LENGTH],

   /// The owner who created the asset. Has permissions to mint
   pub(crate) owner: PublicAddress,

   /// The byte representation of the generator point derived from a pedersen hash of the asset info
   pub(crate) id: AssetIdentifier,
}
```


### Nullifier

A _nullifier_ is a 32-byte serial number that is unique to a note. Revealing the nullifier does not reveal anything about the note it’s associated with. A note can only be spent if its nullifier is revealed as part of the transaction. The nullifier is unique to its note because it is derived from private information about the note: the nk (nullifier deriving key, more on this in the Account section), cm (note commitment), and position (index in the Merkle tree).


## Merkle Tree

Iron Fish stores notes in a Merkle tree. A Merkle tree is an _accumulator_ data structure, meaning it is used to represent many elements with one small identifier (a hash).


### Merkle Tree of Notes

The Merkle Tree of Notes is fixed-size with a depth of 32 and it is used to hold all the notes that are created. Unlike in other blockchains where a UTXO is removed after it is spent, this Merkle tree is an add-only data structure where notes are added sequentially to the tree. When the Merkle tree is completely full, the old tree  becomes a read-only, allowing old notes to be spent from it, and a brand new Merkle tree is then constructed.

We use a Pedersen hash both on the notes, and for the intermediate nodes in the Merkle tree — using the [Jubjub elliptic curve](#). Pedersen hashes are SNARK-friendly, meaning they can be efficiently constructed within a zero-knowledge SNARK proving circuit.


## Block and Block Header

The main ingredient for a blockchain is a block, and each block has an accompanying block header. A block simply holds [transactions](6_transaction.md) that are waiting to be finalized by being added to the blockchain, and a block header gives the necessary information about the block for it to be validated and accepted by others in the network. In short, a block header validates a block, and a block holds transactions. 

With all that in mind, how does a block header help validate a block?


### Block Header

A block header consists of the following

| Field                 | Description                                                                                                                                                                                                                    |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| sequence              | The sequence number of this block. Blocks in a chain increase in ascending order of sequence. More than one block may have the same sequence number (indicating a fork in the chain), but only one fork is selected at a time. |
| previousBlockHash     | The hash of the previous block in the chain.                                                                                                                                                                                   |
| noteCommitment        | Commitment to the Merkle Tree of Notes after all new notes from transactions in this block have been added to it. Stored as the hash and the size of the tree at the time the hash was calculated.                             |
| transactionCommitment | Commitment to the set of transactions in this block. Generated by a Merkle Tree of transaction hashes that include transaction data and witness/signature data.                                                                |
| target                | The hash of this block must be lower than this target value in order for the block to be accepted onto the chain.                                                                                                              |
| randomness            | The [nonce](https://coinmarketcap.com/alexandria/glossary/nonce) used to calculate this block’s hash.                                                                                                                          |
| timestamp             | Unix timestamp according to the miner who mined the block. This value must be taken with a grain of salt, but miners will want to verify that it's an appropriate distance to the previous block's timestamp.                  |
| graffiti              | A 32 byte field that may be assigned at will by the miner who mined the block.                                                                                                                                                 |

Note that the block header does not specify its own block hash. This is because validators need to recompute it anyway using the Iron Fish Hashing Algorithm given all the elements of the block header during validation.

The steps necessary for another node (e.g. device or user) to validate a block are:

1. The previous Block that this Block is referencing exists (by using the previousBlockHash field).
2. The target is the one that the verifying node agrees to (more on this in our Mining section detailing how the [target and difficulty](4_mining.md) are calculated).
3. When all the contents of the block header are hashed, that hash is numerically _less_ than the target — this is largely achieved by the miner from tweaking the randomness value.
4. The timestamp for this Block is valid with a 10s grace period 
5. All the transactions in the Block are valid (more on this in the Transactions section).
6. After all transactions are added to the Notes Merkle tree, validate that the Notes tree's root hash matches the noteCommitment field.
