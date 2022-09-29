---
id: 7_consensus_verification
title: Verification and Consensus
description: Verification and Consensus | Iron Fish Whitepaper
---

<img src ="/img/whitepaper/verification.png" width="100%" role="presentation" style={{marginBottom:'25px'}} />

The prior sections explained how a network gets created and how nodes construct new blocks, but not *why* the nodes construct blocks that certain way. Consensus is the Iron Fish verification layer that sets rules by which nodes accept incoming blocks. These rules *implicitly* force nodes to construct a block following these rules since otherwise that block won’t be accepted by other nodes in the network.

An Iron Fish block is accepted if its header and body are valid. At a high level, verifying the header confirms that the block has enough work behind it by checking that its hash is numerically lower than the target, and that the node has performed the correct *state transition* by correctly applying all the transactions in that block to the two global data structures and supplying the two resulting Merkle roots. Similarly, verifying the block body confirms that all the transactions in that block are valid.

## Validating the Block Header
To validate the block header, each Iron Fish node receiving it checks that all of its fields are set correctly.

As a reminder, the Iron Fish block header consists of the following data fields:
- **sequence**
- **previousBlockHash**
- **noteCommitment**
- **nullifierCommitment**
- **target**
- **timestamp**
- **minersFee**
- **randomness**

A valid block header must follow all these verification rules:

The **sequence** must be one more than the sequence of that in the previous block (e.g. block number), and the previous block must be the one that has the **previousBlockHash**. The **previousBlockHash** must correspond to a valid existing block.

After the transactions in the block body are applied to the two global data structures (the Merkle Tree of Notes and the Merkle Tree of Nullifiers), the resulting Merkle tree roots for those two trees must correspond to the **noteCommitment** and **nullifierCommitment** in the block header.

The **target** is checked by using this block’s timestamp, the previous block’s timestamp, and the previous block’s target by using the [target formula](4_mining.md#target).

The **timestamp** of the current block must be later than the timestamp of the previous block with a 15 second tolerance (meaning that for an incoming latest block its timestamp can be off by 15 seconds in comparison to the current time of when the block is checked).

The **minersFee** must follow the format of a [Miner Reward transaction](6_transaction.md#miner-reward-transaction) allocating to the miner exactly the block reward plus all the transaction fees for the transactions in that block.

Lastly, the **randomness** is valid if the hash of all the block header contents (including the randomness) results in a hash that is numerically less than the target specified for that block.

## Validating the Block Body
Validating the block body consists of verifying all the transactions in the block. This can be done in parallel as each transaction should be valid and independent of one another. See [Transaction Verification](6_transaction.md#transaction-verification) on how a transaction is verified.
