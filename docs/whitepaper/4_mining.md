---
id: 4_mining
title: Mining
description: Mining | Iron Fish Whitepaper
---

<img src ="/img/whitepaper/mining.png" width="100%" role="presentation" style={{marginBottom:'25px'}} />

So far, we’ve gone over the structure of the Iron Fish blockchain; this section will focus on _how_ the Iron Fish blockchain is expanded with new blocks. Note that we use the terms nodes and peers interchangeably; a node in Iron Fish is always a peer. A few other quick definitions:

* _Mining_ is the core mechanism that defines by which rules new blocks are created, and by which rules a peer can verify and accept an incoming block.
* _Miners_ are those nodes that propose a new block to be added to the blockchain to other nodes.
* A new block is said to be _mined_ when a miner finds a hash of the block header that is below some threshold that we call the target.

The Iron Fish blockchain algorithm dynamically adjusts the mining difficulty to achieve 60-second average block times, by either increasing or decreasing mining difficulty if previous blocks are observed to be coming in too fast or too slow.

To be a miner, a node must have a node synced to the most recent block on the chain. 

## Block Creation

As we’ve mentioned, a block consists of a block header and a list of transactions. A block containing no user-transactions is called an empty block. The block creation process is the same regardless of whether a block has user-transactions:

1. Select the block transactions
2. Set the difficulty and target
3. Include the miner reward based on the coin emission schedule
4. Construct the block header

### Select the Block Transactions

The transactions in the block have been broadcasted by other peers who want their transactions to be added into the blockchain. To incentivize a miner to include such a pending transaction into the block, transactions include a publicly visible transaction fee that goes to the miner.

A block with an invalid transaction will be rejected by other nodes — so before including it in the list of transactions, a miner should first verify that transaction (more on transaction verification in the Transaction Creation section).

### Set the Difficulty and Target for a Block

#### Difficulty

The target time for an Iron Fish block is currently set to 60 seconds.

The purpose of the difficulty is simple. It is adjusted, if needed, at every block to make it harder or easier for miners to produce blocks such that new blocks are added to the blockchain every 55 to 65 seconds (with an average of 60 seconds). If the network (e.g. all the nodes in the network) has not produced a block in over 65 seconds, the difficulty for the upcoming block is decreased (in comparison to the previous block’s difficulty). Conversely, if a miner wishes to produce a block in under 55 seconds, the difficulty for a block with that timestamp would be greater than that of the previous block.

The Iron Fish difficulty calculation is largely influenced by Ethereum’s difficulty calculation as described in [EIP-2](https://eips.ethereum.org/EIPS/eip-2), with a few differences.

To determine difficulty for an upcoming block, we first calculate the time “bucket” that the block belongs to. A time bucket is defined as how far away (in intervals of 10 seconds) the block’s timestamp is away from the desired range of 55 to 65 seconds after the previous block. An upcoming block that is 45-55 seconds after the previous block would have a time bucket value of -1, a block that is 35-45 seconds after the previous block would have a time bucket value of -2, and so on:

| Time (in seconds) after previous block | bucket |
| -------------------------------------- | ------ |
| 0-5                                    | -6     |
| 5-15                                   | -5     |
| 15-25                                  | -4     |
| 25-35                                  | -3     |
| 35-45                                  | -2     |
| 45-55                                  | -1     |
| 55-65                                  | 0      |
| 65-75                                  | 1      |
| 75-85                                  | 2      |
| 85-95                                  | 3      |
| ... and so on (max value capped at 99) |        |

We use the time bucket to then adjust difficulty for the upcoming block relative to the difficulty of the last block. The pseudocode for calculating difficulty is as follows:

```js
const differenceInSeconds = currentTime - previousBlockTime
const targetBlockTimeInSeconds = 60
const targetBucketTimeInSeconds = 10
const minDifficulty = 131072

let bucket =
  (differenceInSeconds - targetBlockTimeInSeconds + (targetBucketTimeInSeconds / 2)) /
    targetBucketTimeInSeconds

// Should not change difficulty by more than 99 buckets from last block's difficulty
bucket = Math.min(bucket, 99)

const difficulty =
  previousBlockDifficulty - (previousBlockDifficulty / BigInt(2048)) * BigInt(bucket)

const newDifficulty = Math.max(difficulty, minDifficulty)
```

Block timestamps can be manipulated by miners. A miner could change their computer clock to be further in the future or in the past. So what would stop a miner from setting their clock forward to decrease the difficulty of the blocks they mine? 

There is a consensus rule that requires block timestamps to be no more than 15 seconds in the future from any node’s computer clock. If a node receives a block with a timestamp more than 15 seconds in the future, it will reject it. This incentivizes miners to not put their clocks too far in the future and puts a cap on how much they can manipulate their block’s difficulty. The 15 seconds is added to account for any unintentional differences in nodes’ clocks.

#### Target

We’ve discussed adjusting difficulty to ensure 55-65 seconds between blocks — we do this by adjusting a target, which is a number that the block hash needs to fall under (e.g. be numerically less than the target).

The target is calculated from the difficulty given this formula: _target = 2**256 / difficulty_

As covered in the previous section, it has an inverse relationship with difficulty: as difficulty increases, the target decreases, and vice versa. This is because as the target decreases it becomes statistically harder to find that random number such that the hash of the block header is less than the target. Conversely, as the range of acceptable hashes decreases, difficulty increases.

### Include the Miner Reward Based on Coin Emission Schedule

The mining reward (how many coins a miner is allocated for successfully mining a block) is tied to the Iron Fish emission curve. The idea behind the Iron Fish emission curve is that after the first year post [mainnet](https://academy.binance.com/en/glossary/mainnet) launch, the total coin supply is increased by a fourth of the genesis block value (due to block rewards). Subsequent years will have fewer and fewer newly minted coins according to a decay function, but never fully reaching 0.

The formula to determine how many new coins will be minted for a particular year after launch is:

$$g (x) = \frac s 4 \cdotp e^{k \cdotp floor(x)}$$

Where _s_ is the initial supply of the genesis block of 42 million coins, _k_ is the decay factor of -.05, and _x_ is the year after mainnet launch (starting from 0).

The Iron Fish “year” in block count is 525,600 blocks to one calendar year (assuming 60-second block times). We use the above formula to calculate the block reward using the Iron Fish "year", rounded to the nearest .125 of a coin:

$$blockReward = mRound(\frac{\frac s 4 \cdotp e^{k \cdotp floor(x)}} {525,600}, 0.125)$$

Therefore, the block reward and total supply for the first few years after launch would be:

| Years after launch | Block reward (60s block times) | Total supply  |
| ------------------ | ------------------------------ | ------------- |
| 0                  | 0                              | 42,000,000.00 |
| 0-1                | 20                             | 52,512,000.00 |
| 1-2                | 19                             | 62,498,400.00 |
| 2-3                | 18.125                         | 72,024,900.00 |

The emissions curve using the block reward formula mentioned above, with a cap of 256,970,400 coins for total supply, would look like this:

<img src ="/img/whitepaper/mining/emissions_curve.svg" width="100%" role="presentation" style={{paddingRight:'25px'}} />

To claim the block reward for successfully mining a new block, the miner constructs a special miner fee transaction in the block header. The value of the miner fee transaction is publicly visible so that others can verify that it is exactly the block reward plus all the transaction fees from the transactions included in that block. The recipient’s address for that miner fee transaction remains hidden. Learn more about the miner reward in the Transaction Creation section.

### Construct the Block Header

After determining the block body, the miner can then construct the [block header](https://www.ironfish.network/docs/whitepaper/3_storage#block-header) for it.

A Block Header consists of the following data:

|                       |                                                                                                                                                                                                                                                                                                                     |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sequence              | The sequence is constructed using the latest block's sequence number and incrementing it by one. This field indicates the position of that block in the blockchain, starting from zero.                                                                                                                             |
| previousBlockHash     | The previousBlockHash is filled out using the hash of the latest block in the blockchain, per the [Iron Fish hashing algorithm](https://www.ironfish.network/docs/whitepaper/4_mining#iron-fish-hashing-algorithm). This indicates that this new block is building off of the latest known block in the blockchain. |
| noteCommitment        | All the new notes included in the block body are applied (in order) to the Merkle Tree of Notes. The resulting new Merkle root for that tree and its size (in terms of the global number of notes) are used to build the noteCommitment for the block header.                                                       |
| transactionCommitment | Commitment to the set of transactions in this block. Generated by a Merkle Tree of transaction hashes that include transaction data and witness/signature data.                                                                                                                                                     |
| target                | The target is determined by the [difficulty and target algorithm](https://www.ironfish.network/docs/whitepaper/4_mining#set-the-difficulty-and-target-for-a-block)                                                                                                                                                  |
| randomness            | The randomness is a 64-bit number such that when all the contents of the block header are hashed using the [Iron Fish hashing algorithm](https://www.ironfish.network/docs/whitepaper/4_mining#iron-fish-hashing-algorithm) the result is numerically less than the target.                                         |
| timestamp             | A 32 byte field that may be assigned at will by the miner who mined the block.                                                                                                                                                                                                                                      |
| graffiti              | The timestamp is when that block is mined. The timestamp of the current block must be greater than the previous block's timestamp, and can be up to 15 seconds into the future as described in the Difficulty section                                                                                               |

### Iron Fish Hashing Algorithm

The Iron Fish Hashing Algorithm is blake3.
