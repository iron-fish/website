---
id: 6_transaction
title: Transaction Creation
description: Transaction Creation | Iron Fish Whitepaper
---

<img src ="/img/whitepaper/transaction.png" width="100%" role="presentation" style={{marginBottom:'25px'}} />

Just like accounts, transactions are heavily influenced by the [Sapling protocol](https://github.com/zcash/zips/blob/master/protocol/sapling.pdf) with some differences. All Iron Fish transactions are shielded transactions, meaning they do not reveal any information to any onlooker who does not have explicit access.

This level of privacy is achieved through the use of _zero-knowledge proofs_, which allow transaction details to be encrypted with an accompanying zero-knowledge proof attesting to the validity of transaction details.

There is a lot to cover in this section, so here’s a quick guide to the pieces we’ll be reviewing:

1. the components of a transaction
2. the Spend description component (the one that dictates how an account can spend a note)
3. the Output description component (the one one that creates _new_ notes)
4. how a transaction _balances_ to ensure that appropriate amounts were spent and paid out
5. how a validator (such as a miner) can verify any transaction
6. a special type of transaction called the Miner Fee transaction, which is used to reward a miner for successfully mining a block
7. how notes are encrypted and decrypted such that only the appropriate parties are privy to viewing transaction details

## Transaction Components

A transaction is a list of Spend and Output descriptions:

- A Spend description _spends_ notes that are used up in a transaction.
- An Output description _creates new notes_ that result as part of that transaction, including the change back to the sender if the note they’ve spent is greater than what is intended to the recipient.

Notes that are spent in the Spend description cannot be spent again in the future due to the unique _nullifier_ that must be revealed
when spending it as subsequent attempts will be rejected by validators (e.g. miners) if that nullifier has been revealed in the past.

For example, if Alice has a note of value five coins, and wants to send Bob four coins, then the transaction would look like this:

- It would have one Spend description for the note she’s spending (in this example a note with a value of five coins) along with the unique nullifier for that note.
- And it would have two Output descriptions: one for Bob of four coins, and one note as change for herself of one coin since the note used in the Spend description cannot be spent again.

<img src='/img/whitepaper/transaction/transaction1.svg' width="100%" style={{paddingTop:'10px'}} />

To ensure privacy, a Spend description spends a note _without revealing which note was spent_ through the help of a zero knowledge proof (specifically [zk-SNARK Groth16](https://eprint.iacr.org/2016/260.pdf) Sapling proof). The Output description similarly creates an encrypted note with a zero-knowledge proof that the newly created note was created correctly. The circuit construction for these proofs is taken from Sapling [primitive](https://github.com/zcash/librustzcash/tree/master/zcash_primitives) gadgets which in turn were constructed using the [bellman](https://github.com/zkcrypto/bellman) circuit building tool.

While explaining zk-SNARKs is outside the scope of this paper, for readers who want to learn more, zk-SNARK construction can be broken up into these 5 steps:

1. Computation
2. Arithmetic Circuit
3. R1CS (rank 1 constraint system)
4. QAP (quadratic arithmetic program)
5. SNARK

For learning more about steps 1-4 we recommend this [tutorial](https://blog.decentriq.ch/zk-snarks-primer-part-one/) by Stefan Demil from Decentriq, and for step 5 we recommend this excellent [tutorial](https://arxiv.org/abs/1906.07221) by Maksym Petkus.

The structure of an Iron Fish transaction is constructed with these parts:

- **Transaction Fee**: The fee (in plaintext) that’ll go to any miner that successfully includes this transaction in a block.
- **Spends**: The list of [Spend Descriptions](6_transaction.md#spend-description).
- **Outputs**: The list of [Output Descriptions](6_transaction.md#output-description).
- **Binding Signature**: A binding signature that both signs the transaction and is used to [verify](6_transaction.md#transaction-verification) that it [balances](6_transaction.md#transaction-balancing) — meaning that it did not destroy or create money out of thin air, and that indeed all the funds in the spend descriptions minus the funds in the output descriptions equal to transaction fee. The message that is signed here is the transaction hash, which is a blake2b hash of the serialized transaction fee, spend descriptions and output descriptions.

Remember that the miner’s reward for mining a block is also a type of a transaction. We’ll go over the miners reward transaction and cover all these transaction concepts in greater detail further along in this section.

## Spend Description

The Spend description is a part of the transaction that spends notes associated with an account. The goal of the Spend description is to spend notes _without revealing which notes were actually spent_ with the help of zero-knowledge proofs (specifically [Groth16 zk-SNARK](https://eprint.iacr.org/2016/260.pdf) type proofs).

The high level overview of the Spend description is that it spends a note by using a zero knowledge proof to prove the following:

1. it is attempting to spend a note that the spender can decrypt
2. this note exists in the Merkle Tree of Notes
3. the _value commitment_ (**cm**) for that note was constructed using the true value of that note
4. the revealed nullifier is the unique nullifier for that note and was constructed correctly
5. the signature maps to the spender’s authorization key

It does all this by having some public data that is needed to verify the proof and balance the transaction (more on this in the Transaction Balancing section), as well as the proof.

The structure of the Spend description looks like this:

| Element   |                                       Description                                       |
| :-------- | :-------------------------------------------------------------------------------------: |
| $$cv$$    |                      **value commitment** of the note being spent                       |
| $$rt$$    | **root anchor** – for the Merkle tree of notes root that was used to generate the proof |
| $$nf$$    |                                 nullifier for the note                                  |
| $$rk$$    |                 randomized public key for the authorization key `(ak)`                  |
| $$sig$$   |                           signature for the transaction hash                            |
| $$proof$$ |      zk-SNARK proof that allows one to hide the private values needed to validate       |

The **cv** is the value commitment (as a Pedersen commitment) for the note. It’s computed during the construction of the Spend description as:

$$cv = v * G_v + rcv * G_{rcv}$$

Where **v** is the value of the note, $$G_v$$ is the generator point used for the value, **rcv** is the randomness to further obscure the value commitment hash, and $$G_{rcv}$$ is the generator point used for the randomness.

The **rt** is the root anchor to specify which Merkle root was used to construct the zero knowledge proof. The proof will validate that there is a note that exists in the tree with that specified Merkle root. It is the miner’s job however to make sure that that Merkle root is one that is associated with a valid tree.

The **nf** is the nullifier, and it is unique to the note. The nullifier’s construction is verified in the proof, but once again it is the miner’s job to check that this nullifier has not been revealed in the past. The nullifier is computed by utilizing the blake2s hash function, the note commitment (cm), the position of the note being spent in the Merkle tree, and the nullifier deriving key (nk):

$$nf = blake2s(nk \enspace | \enspace cm + note \_ position * G_{nullifierposition})$$

Where | denotes creating one byte array to hold both elements together.

The **rk** is the randomized public key that is used to sign the spend description. It’s randomized so that nothing is revealed from a single authorization key being used multiple times to sign various spend descriptions. The proof contains information about the actual authorization key and proves it’s valid transformation into a randomized key.

$$rsk == ask * α$$

Where `rsk` is the private key of the randomized public key, `ask` is the private key of the authorization key, and `α` is the randomness

$$rk == (ask + α) * G_{spendingKey}$$

(which is the same as $$rk = α *  G_{spendingKey} + ak$$ since $$ak = ask * G_{spendingKey}$$)

The **sig** is the signature that signs the transaction hash of the transaction the Spend description is in using the randomized key (**rk**).

And finally, we have the proof, which is a Groth16 zk-SNARK proof verifying in zero-knowledge the validity of the entire Spend description.

### How is the proof generated?

The **private** parameters that are used to generate the proof (and are not revealed afterwards) are:

| Element        |                          Description                          |
| :------------- | :-----------------------------------------------------------: |
| $$merklePath$$ |      the Merkle path to the commitment note being spent       |
| $$position$$   |       the position of the commitment note (e.g. index)        |
| $$g_d$$        |    the diversifier of the public address owning this note     |
| $$pk_d$$       |               the transmission key of the owner               |
| $$v$$          |                       value of the note                       |
| $$rcv$$        |   randomness used in the Pedersen Hash for value commitment   |
| $$cm$$         |            note commitment of the note being spent            |
| $$rcm$$        | the randomness used in the Pedersen Hash for note commitment  |
| $$α$$          | alpha used to hide the authorization key that signs the spend |
| $$ak$$         |      the owner’s authorization key (that was randomized)      |
| $$nsk$$        |      the proof authorization key used for the nullifier       |

The **merkle path** is the Merkle path from the given root (the **rt**, root anchor) to the note being spent (specifically its note commitment), using Pedersen hashes. The proof verifies that the path is valid and correct, and that the given **position** is the correct position for the note’s commitment in the Merkle tree at the lowest level, (you can think of the position like an entry in an index).

The $$g_d$$ is the diversifier (converted into an affine point on the Jubjub curve) of the sender, and $$pk_d$$ being the transmission key of the sender. The proof checks that $$g_d$$ is not of small order and that $$pk_d$$ was properly computed.

Remember that $$pk_d = g_d * ivk$$ (the incoming view key). Even though the incoming view key isn’t passed in here directly, we have everything we need to recompute it since _ivk_ is derived from hashing (using the blake2s hash function) the authorization key (_ak_) and nullifier deriving key (_nk_) along with some params. We don’t have the nullifier deriving key (_nk_) directly here either, but we can derive it using the passed in proof authorization key (_nsk_) since $$nk = G_{proofGenerationKey} * nsk$$.

Also remember that the value commitment is computed as $$cv = v * G_v + rcv * G_{rcv}$$ and so we pass in the value (**v**) and the randomness for the value (**rcv**) into the proof to validate the construction of the value commitment.
The note commitment (**cm**) is a Pedersen commitment (resulting in a full point) of the note’s contents (value(v), $$g_d$$, $$pk_d$$) and the randomness used for the note commitment (**rcm**)
$$cm = pedersenHash(v, g_d, pk_d) + rcm * G_{noteCommitmentRandomness}$$

The alpha $$α$$ along with the authorization key $$ak$$ is used to construct the randomized public key that is used to sign the spend description. Here in the proof we verify that the randomized key was created correctly by verifying that:

$$rk = α *  G_{spendingKey} + ak$$

Finally, we check that the nullifier is computed correctly. The proof first checks that $$nk = nsk * G_{proofGenerationKey}$$ and then checks that the nullifier was indeed computed as:

$$nf = blake2s(nk \enspace | \enspace cm + note \_ position * G_{nullifierPosition})$$

In summary, the proof checks:

1. **Note Commitment Integrity**

- Check that the note commitment (**cm**) is derived from $$g_d$$, $$pk_d$$, $$value$$, and $$rcm$$

2. **Merkle Path Validity**

- Check that the Merkle path is valid from the given merkle root to the leaf (that this note exists in a given tree)

3. **Value Commitment**

- Check that the value commitment (**cv**) was indeed constructed as $$cv == v * G_v + rcv * G_{rcv}$$

4. **Nullifier**

- Check that the nullifier is derived from nk (the owner’s nullifier deriving key), the **cm** (note commitment) and **position**

5. **Random Authorization Key**

- Check that the random authorization key (**rk**) that is used to sign the transaction is correctly derived from the spend authorization key (**ak**) and alpha (**α**) for randomness.

### How is the proof verified?

In order to verify the proof, we simply need to pass in public parameters that validate all of the above mentioned statements.

The **public** variables necessary for the Spend description proof verification are most of the other fields of the Spend description:

| Element |                        Description                         |
| :------ | :--------------------------------------------------------: |
| $$rt$$  | root anchor that was used for the Merkle path in the proof |
| $$cv$$  |          Pedersen Hash (commitment) of the value           |
| $$nf$$  |                nullifier to spend the note                 |
| $$rk$$  |          the randomized authorization public key           |

Given these parameters, the proof will return a True/False statement whether or not all of the above statements are true given these public inputs.

## Output Description

The Output description is the part of the transaction that produces new notes. The note it produces is encrypted such that only the holder of the incoming view key for the recipient and holder of the outgoing view key for the sender can decrypt the note. It also contains a zero-knowledge proof (also Groth16 zk-SNARK proof) that verifies that the newly created note was created correctly, with the correct value.

The structure of the Output description contains these fields:

| Element     |                                                                                               Description                                                                                                |
| :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| $$cv$$      |                                                                                             value commitment                                                                                             |
| $$cm$$      |                                                                                             note commitment                                                                                              |
| $$epk$$     |                                         ephemeral public key (more on this in [Note Encryption and Decryption](6_transaction.md#note-encryption-and-decryption))                                         |
| $$C^{enc}$$ |                                                                                     encrypted plaintext of the note                                                                                      |
| $$C^{out}$$ | encrypted blob that allows the holder of the viewing key to decrypt a decryption key for $$C^{enc}$$ (more on this in [Note Encryption and Decryption](6_transaction.md#note-encryption-and-decryption)) |
| $$proof$$   |                                                                                         the zero-knowledge proof                                                                                         |

Below is a deeper dive into these fields.

The cv is the value commitment (as a Pedersen commitment) of the note being created, computed as:

$$cv = v * G_v + rcv * G_{rcv}$$

Where **rcv** is the randomness for the value commitment and is a private parameter to the zero-knowledge proof to validate this computation.

The **cm** is the note commitment (as a Pedersen commitment) for the new note being created that is added to the Merkle tree of notes by the miner who mines the transaction containing this Output description. It is computed as:

$$cm = pedersenHash(v, g_d, pk_d) + rcm * G_{noteCommitmentRandomness}$$

Where **rcm** is the note commitment randomness used in this Pedersen commitment computation, and verified in the zero-knowledge proof.

The **epk** is the ephemeral public key that is used to facilitate the recipient of the note decrypting it.

The $$C^{enc}$$ is the actual encrypted note that results as part of this Output description. It is encrypted such that the recipient’s incoming view key can decrypt it.

The $$C^{out}$$ is an encrypted blob of data to facilitate the holder of the sender’s outgoing key to decrypt the encrypted note.

And finally we have the proof (Groth16 zk-SNARK proof) for the Outgoing description that validates all these public parameters against the private ones that were used to create them. For more on the keys and notes discussed above, see the [Note Encryption and Decryption section](6_transaction.md#note-encryption-and-decryption).

### How is the proof generated and verified?

The Outgoing description proof is a lot less complicated than the Spend description proof. A lot of the terms you’ll see here will be familiar to the ones you’ve seen in the Spend description proof generation.

The private parameters that are used to create the proof are:

| Element  |                                                                                 Description                                                                                 |
| :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| $$g_d$$  |                                                                           recipient’s diversifier                                                                           |
| $$pk_d$$ |                                                                public diversifier address for the recipient                                                                 |
| $$v$$    |                                                                                    value                                                                                    |
| $$rcv$$  |                                                                          randomness for the value                                                                           |
| $$rcm$$  |                                                                     randomness for the note commitment                                                                      |
| $$esk$$  | ephemeral private key — a random number chosen by the sender (more on this in the [Note Encryption and Decryption section](6_transaction.md#note-encryption-and-decryption) |

And the **public** parameters that are used to verify the proof are

| Element |     Description      |
| :------ | :------------------: |
| $$cv$$  |   value commitment   |
| $$cm$$  |   note commitment    |
| $$epk$$ | ephemeral public key |

The proof validates that:

1. $$g_d$$ for the recipient is not of small order and that the ephemeral public key was computed as:
   $$epk = g_d * esk$$
2. That the value commitment (**cm**) is properly computed as a Pedersen commitment of:
   $$cm = pedersenHash(v, g_d, pk_d) + rcm * G_{noteCommitmentRandomness}$$

### Adding a Merkle Tree Note from the Outgoing description

The outputs in the Output description are stored as a [Merkle Tree Note](3_storage.md#merkle-tree-of-notes) in addition to being part of the transaction.
A **Merkle Tree Note** consists of these fields taken from the Output description:

| Element     |                                   Description                                    |
| :---------- | :------------------------------------------------------------------------------: |
| $$cv$$      |                                 value commitment                                 |
| $$cm$$      |                                 note commitment                                  |
| $$epk$$     |                               ephemeral public key                               |
| $$C^{enc}$$ |                         encrypted plaintext of the note                          |
| $$C^out$$   | allows the holder of the viewing key to decrypt a decryption key for $$C^{enc}$$ |

## Transaction Balancing

So far, we went over how zero-knowledge proofs are used to prove ownership of an existing note in order to spend it or create valid new notes, but we’re still missing verifying one of the most important rules in cryptocurrencies: no coins can be created or destroyed in a transaction. Validators still need to verify that the transaction _balances_, meaning that the sum of all the funds being spent minus the funds being created equals the transaction fee (or zero if there is no transaction fee).

$$input \enspace values - output \enspace values = transaction \enspace fee$$

Balancing a transaction happens through the value commitments in the Spend and Output descriptions and the binding signature in the transaction. Remember that the structure of the Iron Fish transaction consists of these parts:

- **Transaction Fee**: the fee that’ll go to any miner that successfully includes this transaction in a block
- **Spends**: the list of [Spend Descriptions](6_transaction.md#spend-description)
- **Outputs**: the list of [Output Descriptions](6_transaction.md#output-description)
- **Binding Signature**: a binding signature that both signs the transaction and is used to [verify](6_transaction.md#transaction-verification) that it [balances](6_transaction.md#transaction-balancing)

And both the list of Spend descriptions and list of Output descriptions contain their appropriate value commitments. Remember that a value commitment is constructed as a Pedersen commitment in this format:

$$cv = v * G_v + rcv * G_{rcv}$$

The transaction is cryptographically signed by a **binding validating key (bvk)** resulting in the binding signature in the transaction. The binding validating key is constructed by adding all the _randomness_ (e.g. the **rcv** values) from the input value commitments, and subtracting all the randomness from the output value commitments. It becomes more clear why this signature is necessary to balance a transaction if we first try to balance it without it.

As an example, say we have a transaction with two inputs, and two outputs:

| Inputs |                                     |
| ------ | :---------------------------------: |
|        | $$cv1 = v1 * G_v + rcv1 * G_{rcv}$$ |
|        | $$cv2 = v2 * G_v + rcv2 * G_{rcv}$$ |

| Outputs |                                     |
| ------- | :---------------------------------: |
|         | $$cv3 = v3 * G_v + rcv3 * G_{rcv}$$ |
|         | $$cv4 = v4 * G_v + rcv4 * G_{rcv}$$ |

The rule that we have to follow, is that $$input \enspace values - output \enspace values = transaction \enspace fee$$. Since the generator points (such as $$G_v$$ and $$G_{rcv}$$) are the same for all value commitments, we can safely add all the value commitments from the inputs and subtract them from the outputs and simplify. Remember that since these operations are on an elliptic curve, we are not going to perform division operations as that would be [logarithmically hard](https://en.wikipedia.org/wiki/Logarithm). Instead, we’ll multiply the transaction fee by the same generator point as the values (G_v) to check equality.

$$Input \enspace commitments - Output \enspace commitments = \\ G_v * (v1 + v2 - v3 - v4) + G_{rcv} * ( rcv1 + rcv2 - rcv3 - rcv4)$$

We know that the sum of all the input values minus the sum of all the output values should be the transaction fee, meaning that:

$$G_v * (v1 + v2 - v3 - v4) = G_v * (transaction\_fee)$$

There is still that second part of the equation that deals with randomness that wasn’t addressed:

$$G_{rcv} * (rcv1 + rcv2 - rcv3 - rcv4)$$

This part of the equation is the binding validating key, which acts as a public key with which we can verify the transaction signature. The private key counterpart to $$bvk$$ that was used to sign the transaction is $$bsk$$ (the binding signing key) which is the sum of all the randomness from the input descriptions minus the sum of all the randomness in the output descriptions.

For this example:

| Element                                                     |                           Description                            |
| :---------------------------------------------------------- | :--------------------------------------------------------------: |
| $$bsk \enspace (binding \enspace signing \enspace key)$$    |                 $$= rcv1 + rcv2 - rcv3 - rcv4$$                  |
| $$bvk \enspace (binding \enspace validating \enspace key)$$ | $$= G_{rcv} * (rcv1 + rcv2 - rcv3 - rcv4) \\ = G_{rcv} * (bsk)$$ |

The transaction doesn’t reveal the binding validating key ($$bvk$$) directly (the transaction only contains the cryptographic signature of the transaction signed by the binding signing key), however, it can be derived from the publicly available information.

During transaction validation, the validator computes the sum of all input value commitments, minus the sum of all output value commitments, minus the transaction fee multiplied by the value commitment generator point. For our example, this step would look like this:

$$(G_v * v1 + G_{rcv} * rcv1 + G_v * v2 + G_{rcv} * rcv2) – (G_v * v3 + G_{rcv} * rcv3 + G_v * v3 + G_{rcv} * rcv3)$$

equivalent to:

$$G_v * (v1 + v2 - v3 - v4) + G_{rcv} * (rcv1 + rcv2 - rcv3 - rcv4) -  G_v * (transaction\_fee)$$

Since a valid transaction would have $$G_v (v1 + v2 - v3 - v4) = G_v (transaction\_fee)$$, the validator computes the binding validating key as:

$$G_v * (v1 + v2 - v3 - v4) + G_{rcv} * (rcv1 + rcv2 - rcv3 - rcv4) -  G_v * (transaction\_fee) = bvk$$

If indeed all the values of the input descriptions minus all the values of the output descriptions equal transaction fee, then $$bvk$$ must equal the leftover randomness:

$$bvk = G_{rcv} ( rcv1 + rcv2 - rcv3 - rcv4)$$

To validate that the transaction balances, the validator checks that computed $$bvk$$ is indeed the public key corresponding to the transaction signature that signed the transaction hash. This means that the sender of the transaction must have used the same $$bvk$$ with a corresponding private key $$bsk$$ to sign the transaction.

$$Final \enspace step: \enspace verify \enspace signature \enspace (bvk, \enspace transaction \enspace hash)$$

That is all that is necessary to check that the transaction balances since the $$bsk$$ used to sign the transaction hash _must_ have been the sum of all randomness from the input descriptions minus the sum of all randomness of the output descriptions (in this example bsk must have been $$rcv1 + rcv2 - rcv3 - rcv4$$) as that is the only valid solution (called an _opening_) to this overall equation which is still in the format of a Pedersen commitment. It is not possible for there to be any other solution or opening since Pedersen commitments have a property that there can only be one opening per commitment.

## Transaction Verification

The prior section went over how to balance a transaction — to make sure that no coins were created or destroyed as part of that transaction. Balancing is just one step in the verification process.

In whole, a validator must perform a series of checks to validate a transaction:

1. Verify all the zero-knowledge proofs against the public parameters from the [Spend description](6_transaction.md#spend-description)
2. Verify all the zero-knowledge proofs against the public parameters from the [Output description](6_transaction#output-description)
3. Check that the [transaction balances](6_transaction.md#transaction-balancing)
4. Check that every signature in the Spend description signed the transaction hash
5. Check that the root anchors ($$rt$$) in all the Spend transactions are valid past Merkle tree roots on the validator’s Merkle tree
6. Check that none of the nullifiers in the spend descriptions were revealed in the past

## Miner Reward Transaction

As mentioned above, an important rule of cryptocurrencies is that no coins can ever be created or destroyed. _Except_ in special cases where the protocol _does_ allow for new coins to be created out of thin air. This is what happens in the special form of a transaction called the Miner Reward transaction. A Miner Reward transaction is a special transaction that awards the miner a set amount for mining the block as well as the sum of all the transaction fees for that block. The exact set amount for mining a block is variable, as described in the previous section on [mining and coin emission schedule](4_mining.md#include-the-miner-reward-based-on-coin-emission-schedule). This section will go over _how_ such a transaction is made.

The Miner Reward transaction looks a lot like a regular [transaction](6_transaction.md#transaction-components), except that it is stored in the block header (and not the block body), contains no Spend description, and has a negative transaction fee. This negative transaction fee contains the set amount allotted for the miner for mining the block as well as the sum of all transaction fees in the block body. Any number of Output descriptions can exist on this transaction with output values adding up to the allotted amount. Remember that a transaction fee on a transaction is in plaintext, and any validator can verify that $$input \enspace values - output \enspace values = transaction \enspace fee$$.

Let’s say that a Miner awards itself five coins for mining a block, then that Miner Reward transaction would look like this:

| Transaction | (Miner award allotted_amount = 5 $IRON) |                       |
| ----------- | :-------------------------------------: | --------------------: |
|             |                 Spends                  |                  None |
|             |               Output(s):                | Output Description(s) |
|             |             Transaction fee             | -1 \* allotted_amount |
|             |            Binding Signature            |                       |

Note that this transaction will balance with the negative transaction fee. The miner is able to preserve their privacy by making a transaction with all the privacy guarantees of a regular transaction.

For validation, all other validators can easily check that the Miner reward transaction has the appropriate alloted_amount by checking that the values of the spend description minus the values of the output descriptions equals to the negative allotted amount. Validators can also verify that the allotted amount is exactly the block reward plus transaction fees associated with transactions in that block.

## Note Encryption and Decryption

Lastly, this section will go over how exactly the recipient of a transaction is able to decrypt a newly created note that is sent to them in the Output description. The note in the Output description is encrypted such that the recipient’s incoming view key and the sender’s outgoing view key is able to decrypt it. This technique shares a lot of commonalities with the Diffie-Hellman key exchange algorithm.

Remember that the note plaintext (**np**) is made up of:

- **($$pk_{d}$$, d)**: the transmission key and the diversifier of the recipient’s address
- **v**: the plaintext value that the note holds
- **rcm**: note randomness used to generate the Pedersen commitment for the note
- **memo**: a 32-byte memo field

The Output description stores this note in its encrypted form as $$C^{enc}$$.

| Element     |                                           Description                                            |
| :---------- | :----------------------------------------------------------------------------------------------: |
| $$cv$$      |                                         value commitment                                         |
| $$cm$$      |                                         note commitment                                          |
| $$epk$$     |                                       ephemeral public key                                       |
| $$C^{enc}$$ |                                 encrypted plaintext of the note                                  |
| $$C^{out}$$ | encrypted blob that allows the holder of the viewing key to decrypt a decryption key for C^{enc} |
| $$proof$$   |                                     the zero-knowledge proof                                     |

#### Note Encryption by the Sender

The sender has to know the recipient’s public key, which is a combination of the transmission key and the diversifier ($$d$$, $$pk_d$$). With this information, the sender’s wallet can create a **sharedSecret** with which to encrypt the note such that the recipient’s incoming view key can decrypt it. Let’s go over how the sender’s wallet creates this shared secret.

1. The sender’s wallet generates a random number and uses it to create an ephemeral secret key (**esk**) by converting this number to a scalar on the Jubjub curve.
2. It then creates an _ephemeral public key_ (**epk**) by using scalar multiplication between the diversifier of the recipient represented as a field point and esk. This ephemeral public key is a publicly known component of the Output description and is seen by everyone.

   1. $$epk = esk * g_d$$
   2. Note: $$g_d$$ is the diversifier, $$d$$, represented as a field a point on the Jubjub curve so we can do scalar multiplication (elliptic curve multiplication) using it.

3. It then derives a **sharedSecret** using Diffie Hellman Key Exchange between esk and pkd (diversified public address of the recipient):

   1. $$sharedSecret =  esk * pk_d$$

4. The note is then encrypted using the **sharedSecret** and a form of symmetric encryption (specifically ChaCha20Poly1305 symmetric encryption algorithm).

#### Note Decryption by the Recipient

The recipient’s wallet can then decrypt the encrypted note in the Outgoing description using the recipient’s incoming view key.
Remember that the recipient’s transmission key ($$pk_d$$) is derived from the diversifier (converted to a point on the Jubjub curve as $$g_d$$) and the incoming view key: $$pk_d = g_d * ivk$$

The recipient’s wallet can then calculate the shared secret using the epk (ephemeral public key) provided on the Outgoing description:
$$sharedSecret = epk * ivk$$

This is the same sharedSecret that the sender’s wallet used.
Note that:

$$epk = esk * g_d\\pk_d = g_d * ivk$$

The recipient’s wallet calculates:

$$sharedSecret = epk * ivk = esk * g_d * ivk$$

The sender’s wallet calculates:

$$sharedSecret = esk * pkd = esk * g_d * ivk$$

Now the recipient’s wallet can use the same symmetric encryption algorithm (ChaCha20Poly1305) to use the **sharedSecret** and decrypt the $$C^{enc}$$ field on the Output description.

#### Note Decryption by the Sender Using the Sender’s Outgoing View Key

If at some later time after the transaction has been sent, the sender’s wallet needs to recreate the transaction history and decrypt the notes it sent in the past, it can do that with the help of the outgoing view key.

Remember that initially the sender’s wallet was able to encrypt the note plaintext (using the symmetric encryption algorithm ChaCha20Poly1305) into $$C^{enc}$$ by calculating a shared secret as $$sharedSecret =  esk * pk_d$$.

Since the sender’s wallet doesn’t have access to either $$esk$$ or $$pk_d$$ after the transaction has been sent, that information is stored in the second encrypted field on the Outgoing description: the $$C^{out}$$ field. This field is created by the sender of the transaction at the time it is made and stored on the Output description.

The $$C^{out}$$ field is an encryption of ($$esk$$, $$pk_d$$) concatenated together, also using the symmetric ChaCha20Poly1305 encryption algorithm. The symmetric key used for $$C^{out}$$ is calculated as

$$symmetricEncryptionKey = blake2bHash(ovk, cv, cm, epk)$$

where **ovk** is the wallet’s outgoing view key, and the rest of the fields are taken from the Output description.

Output Description:

| Element     |                                             Description                                              |
| :---------- | :--------------------------------------------------------------------------------------------------: |
| $$cv$$      |                                           value commitment                                           |
| $$cm$$      |                                           note commitment                                            |
| $$epk$$     |                                         ephemeral public key                                         |
| $$C^{enc}$$ |                                   encrypted plaintext of the note                                    |
| $$C^{out}$$ | encrypted blob that allows the holder of the viewing key to decrypt a decryption key for $$C^{enc}$$ |
| $$proof$$   |                                       the zero-knowledge proof                                       |

At any given time, the holder of the outgoing view key (e.g. a wallet) can recreate the $$symmetricEncryptionKey$$ to decrypt the $$C^{out}$$ field to retrieve ($$esk$$, $$pk_d$$). Then, using ($$esk$$, $$pk_d$$) the wallet can recreate the $$sharedSecret =  esk * pk_d$$ and decrypt the $$C^{enc}$$ field to finally retrieve the plaintext.
