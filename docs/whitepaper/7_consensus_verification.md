---
id: 7_consensus_verification
title: Verification and Consensus
description: Verification and Consensus | Iron Fish Whitepaper
---

<img src ="/img/whitepaper/verification.png" width="100%" role="presentation" style={{marginBottom:'25px'}} />

Consensus is the Iron Fish verification layer that sets rules by which nodes accept incoming blocks. These rules _implicitly_ force nodes to construct a block following these rules since otherwise that block won’t be accepted by other nodes in the network.

An Iron Fish block is accepted if its header and list of transactions are valid. At a high level, verifying the header confirms that the block has enough work behind it by checking that its hash is numerically lower than the target, and that the node has performed the correct _state transition_ by correctly applying all the transactions in that block to the Notes Merkle tree. Similarly, verifying the list of transactions confirms that all the transactions in that block are valid.

## Validating the Block Header

To validate the block header, each Iron Fish node receiving it checks that all of its fields are set correctly.

As a reminder, the Iron Fish block header consists of the following data fields:

* **sequence**
* **previousBlockHash**
* **noteCommitment**
* **transactionCommitment**
* **target**
* **Timestamp**
* **graffiti**
* **Randomness**

A valid block header must follow all these verification rules:

The **sequence** must be one more than the sequence of that in the previous block (e.g. block number), and the previous block must be the one that has the **previousBlockHash**. The **previousBlockHash** must correspond to a valid existing block.

After the transactions in the block body are applied to the Merkle Tree of Notes, the resulting Merkle tree root must correspond to the **noteCommitment** in the block header.

The **target** is checked by using this block’s timestamp, the previous block’s timestamp, and the previous block’s target by using the [target formula](https://www.ironfish.network/docs/whitepaper/4_mining#target).

The **timestamp** of the current block must be later than the timestamp of the previous block with a 15 second tolerance (meaning that for an incoming latest block its timestamp can be off by 15 seconds in comparison to the current time of when the block is checked).

## Validating the list of transactions

All transactions in the block must be verified. This can be done in parallel as each transaction should be valid and independent of one another. See [Transaction Verification](https://www.ironfish.network/docs/whitepaper/6_transaction#transaction-verification) on how a transaction is verified.

## Consensus 

Iron Fish supports custom network definitions, via unique network IDs. Nodes can connect to custom networks from a specified network definition JSON file (--customNetwork) or to an official Iron Fish network with a specified network ID (--networkId). 

A node’s Identify message includes the network ID and genesis block hash to confirm that connecting peers have the same network ID and genesis block as the current node. This enables us to ban peers that advertise an incorrect genesis block hash.

Users can make consensus upgrades by adding in the block activation height at which they want the upgrade to occur.

Iron Fish blocks have a max block size of 2 MB. 
