---
id: 3_transactions
title: Transactions
---

In IronFish, each transaction has 0 or more `Spend Descriptions` and 0 or more `Output Descriptions`. Every transaction uses zk-SNARK (groth16) Sapling proof both on the Spend and Output description. The circuit construction for these proofs is taken from Sapling [primitive](https://github.com/zcash/librustzcash/tree/master/zcash_primitives) gadgets which in turn were constructed using the [bellman](https://github.com/zkcrypto/bellman) circuit building tool.

As with any zk-SNARK based system, there are hardcoded parameters that are a result of a trusted setup. In order to generate the Spend Description proof and the Output Description proof one needs access to the appropriate proving key, and the verifier needs access to the appropriate verifying key. These will be generated using a multi party computation to allow as many participants as possible to contribute randomness and ensure the system is sound. Those parameters will be specified here at a later time.

While explaining zk-SNARKs is outside the scope of this paper, for readers who want to learn more, I recommend this excellent [tutorial](https://arxiv.org/abs/1906.07221) by Maksym Petkus.

The transaction, in plaintext, has the numerical difference between inputs(spends) and outputs which is the transaction fee.

$$inputs - outputs = transaction fee$$

<img src='./assets/2_data_structure_models_transaction.svg' height="450" />

## Spend Description

The full format of the **Spend Description**:

| Element        | Description                                                                  |
| :---           |    :----:                                                                    |
| $$cv$$         | value commitment                                                             |
| $$rt$$         | `root anchor` – which Merkle root is used for the proof                      |
| $$nf$$         | nullifier for the note                                                       |
| $$rk$$         | randomized public key for the authorization key `(ak)` <br /> (private key of the randomized ak): $$rsk = ask * α$$ <br />  `rk` is the public key for the randomized authorized key private key |
| $$sig$$        | sign hash of the spend description using `rsk`                               |
| $$proof$$		 | zk-SNARK proof that allows one to hide the private values needed to validate |

**Private variables** for proof generation:

| Element         | Description                                                                 |
| :---            | :----:                                                                      |
| $$merkle path$$ | the Merkle path to the commitment note being spent                          |
| $$position$$    | the position of the commitment note (e.g. index)                            |
| $$gd$$          | the diversifier of the public address owning this note                      |
| $$pkd$$         | the transmission key of the owner                                           |
| $$v$$           | value of the note                                                           |
| $$rcv$$         | randomness used in the Pedersen Hash for value commitment                   |
| $$cm$$          | note commitment of the note being spent                                     |
| $$rcm$$         | the randomness used in the Pedersen Hash for note commitment                |
| $$α$$           | alpha used to hide the authorization key that signs the spend               |
| $$ak$$          | the owner’s authorization key (that was randomized)                         |
| $$nsk$$         | the proof authorization key used for the nullifier                          |

**Public variables** for verification:

| Element         | Description                                                                 |
| :---            | :----:                                                                      |
| $$rt$$          | root anchor that was used for the Merkle path in the proof                  |
| $$cv$$          | Pedersen Hash (commitment) of the value                                     |
| $$nf$$          | nullifier to spend the note                                                 |
| $$rk$$          | the randomized authorization public key                                     |

<b>What exactly gets checked in the proof?</b>

1. **Note Commitment integrity**
    1. Check that the note commitment `(cm)` is derived from $$g_d$$, $$pk_{d'}$$, $$value$$, and $$rcm$$ (randomness for the Pedersen Hash)

2. **Merkle Path Validity**
    1. Check that the Merkle path is valid from the given merkle root to the leaf

3. **Value Commitment**
    1. Check that the value commitment `(cv)` was indeed constructed as $$cv == v * G_v + rcv * G_{rcv}$$

4. **Nullifier**
    1. Check that the nullifier is derived from `ivk` (the owner’s incoming view key), the `cm` (note commitment) and `position` (the index in the Merkle tree on the lowest level)

5. **Random Authorization Key**
    1. Check that the random authorization key `(rsk)` that is used to sign the `Spend Description` is correctly derived from the spend authorization key and the provided `α`. This is so that no spend transactions can ever be linked by signatures using the same key
        1. $$rsk == ask * α$$

It is important to note that it is necessary to know which notes are spendable and the Merkle Path to them. Logistically, this means that a user or a wallet has to:
1. Continuously scan for new notes created and try brute force.
2. Be able to create (or otherwise acquire) a valid Merkle Path from the root to the leaf note being spent. This Merkle root must be one that was previously seen by a miner or validator.

## Output Description ##

The full format of the **Output Description**:

| Element       | Description                                                                     |
| :---          |    :----:                                                                       |
| $$cv$$        | value commitment                                                                |
| $$cm$$        | note commitment                                                                 |
| $$epk$$       | ephemeral public key                                                            |
| $$C^enc$$     | encrypted plaintext of the note                                                 |
| $$C^out$$     | ephemeral public key                                                            |
| $$proof$$     | zk-SNARK proof that allows one to hide the private values needed to validate    |

**Public variables** for verification:

| Element        | Description                                                                    |
| :---           | :----:                                                                         |
|$$cv$$          | value commitment                                                               |
|$$cm$$          | note commitment                                                                |
|$$epk$$         | ephemeral public key                                                           |

**Private variables** for proof generation:

| Element      | Description                                                                      |
| :---         | :----:                                                                           |
|$$g_d$$       | recipient’s diversifier                                                          |
|$$pk_d$$      | public diversifier address for the recipient                                     |
|$$v$$         | value                                                                            |
|$$rcv$$       | randomness for the value                                                         |
|$$rcm$$       | randomness for the note commitment                                               |
|$$esk$$       | ephemeral private key                                                            |

From every **Output Description**, we create a **Merkle Tree Note**  that consists of:

| Element        | Description                                                                    |
| :---           | :----:                                                                         |
|$$cv$$          | value commitment                                                               |
|$$cm$$          | note commitment                                                                |
|$$epk$$         | ephemeral public key                                                           |
| $$C^enc$$      | encrypted plaintext of the note                                                |
| $$C^out$$      | allows the holder of the viewing key to decrypt a decryption key for $$C^enc$$ |
<br />
What happens during the Output Description proof generation?

1. Value commitment `(cv)`  is created correctly using ephemeral randomness `(rcv)`
2. Note commitment `(cm)` is created correctly using the supplied randomness for the note commitment `(rcm)`
3. The ephemeral public key `(epk)` is created correctly given then ephemeral secret key `(esk)` for note encryption/decryption
4. And that the diversifier for the recipient’s public key is a valid one


## Transaction Balancing

Both the Spend and Output Description contain a `value commitment` which is in a form of a Pedersen commitment $$cv = v * G + r * H$$ where $$G$$ and $$H$$ are known generator points on the Jubjub curve, $$v$$ is the plaintext value of the note, and $$r$$ is the randomness.

The transaction fee is known (plaintext) without ever revealing the plaintext values for any of the value commitments. The transaction also commits to the randomness of every note. Therefore, to check that a transaction committed to a valid transaction fee, we can check that $$inputs - outputs = transaction fee$$

Verifying transaction fee matches value commitments of the notes:

$$G ( v - v1) + H (r - r1) = G (tx_fee) + H (sk)$$

## Transaction Verification
Transaction verification is a process of a miner or a validator performing a series of checks:
- Validate that all the merkle root hashes for each `Spend Description` are ones that have (at some point in the past) been valid merkle roots for the global merkle note tree
- Validate all the `Spend Description` proofs inside that transaction against its public parameters
- Validate all the `Output Description` proofs inside that transaction against its public parameters
