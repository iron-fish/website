---
id: 4_mining
title: Mining
description: Mining | Iron Fish Whitepaper
---

<img src ="/img/whitepaper/mining.png" width="100%" role="decorative" style={{paddingTop:'40px', marginBottom:'40px'}} />

So far, we’ve gone over the structure of the Iron Fish blockchain; this section will focus on how the Iron Fish blockchain is expanded with new blocks. Note that we use the terms nodes and peers interchangeably; a node in Iron Fish is always a peer. A few other quick definitions:

- <em>Mining</em> is the core mechanism that defines by which rules new blocks are created, and by which rules a peer can verify and accept an incoming block.
- <em>Miners</em> are those nodes that propose a new block to be added to the blockchain to other nodes.
- A new block is said to be <em>mined</em> when a miner finds a hash of the block header that is below some threshold that we call the target.

The Iron Fish blockchain algorithm dynamically adjusts the mining difficulty to achieve 15 second average block times, by either increasing or decreasing mining difficulty if previous blocks are observed to be coming in too fast or too slow.

To be a miner, a node must have both of the global data structures synced (the Merkle Tree of Notes and the Merkle Tree of Nullifiers), and know at least the two most recent blocks.

## Block Creation

As we’ve mentioned, a block consists of a block header and a block body. The block body is simply a list of 0 or more transactions; a block containing no transactions is called an empty block. The block creation process is the same regardless of whether or not a block has transactions:

1. Determine the block body
2. Set the difficulty and target
3. Include the miner reward based on the coin emission schedule
4. Construct the block header

### Determine the Block Body
The transactions in the block body have been broadcasted by other peers who want their transactions to be added into the blockchain. To incentivize a miner to include such a pending transaction into the block body, transactions include a publicly visible transaction fee that goes to the miner.

A block with an invalid transaction will be rejected by other nodes — so before including it in the block body, a miner should first verify that transaction (more on transaction verification in the Transaction Creation section).

### Set the Difficulty and Target for a Block
#### Difficulty
The purpose of the difficulty is simple. It is adjusted, if needed, at every block to make it harder or easier for miners to produce blocks such that new blocks are added to the blockchain every 10 to 20 seconds (with an average of 15 seconds). If the network (e.g. all the nodes in the network) has not produced a block in over 20 seconds, the difficulty for the upcoming block is decreased (in comparison to the previous block’s difficulty) every second until a block is produced (or minimum difficulty is met). Conversely, if a miner wishes to produce a block in under 10 seconds, the difficulty for a block with that timestamp would be greater than that of the previous block.

The Iron FIsh difficulty calculation is largely influenced by Ethereum’s difficulty calculation as described in [EIP-2](https://eips.ethereum.org/EIPS/eip-2), with a few differences. The pseudocode for calculating difficulty is as follows:

<code>

    const diffInSeconds = (time.getTime() - previousBlockTimestamp.getTime()) / 1000
    const sign = max(1 - floor(diffInSeconds / 10), -99)
    const offset = previousBlockDifficulty / 2048

    const difficulty = max(
      previousBlockDifficulty + offset * sign,
      MIN_DIFFICULTY
    )

</code>

Currently, `MIN_DIFFICULTY`, is `131072`, but this is subject to change.

If the time difference between the upcoming block’s timestamp and the previous block’s timestamp is between 10 and 20 seconds, then the difficulty is not changed and difficulty for the new upcoming block is simply the last block’s difficulty. If, however, the time difference between those blocks is below 10 seconds, then the difficulty is increased by a factor of `difficultyStep * timeDifference`; otherwise it is decreased by the same amount.

#### Target
We’ve discussed adjusting difficulty to ensure 10-20 seconds between blocks — we do this by adjusting a target, which is a number that the block hash needs to fall under (e.g. be numerically less than the target).

The target is calculated from the [difficulty](https://docs.google.com/document/d/14KRwTuWNnLM6sKbItjB8agFaATDj02rktFBArpB92vI/edit#heading=h.v86augr5aqao) given this formula:
`target = 2**256 / difficulty `

As covered in the previous section, it has an inverse relationship with difficulty: as difficulty increases, the target decreases, and vice versa. This is because as the target decreases it becomes statistically harder to find that random number such that the hash of the block header is less than the target. Conversely, as the range of acceptable hashes decreases, difficulty increases.

### Include the Miner Reward Based on Coin Emission Schedule
The mining reward (how many coins a miner is allocated for successfully mining a block) is tied to the Iron Fish emission curve. The idea behind the Iron Fish emission curve is that after the first year post [mainnet](https://academy.binance.com/en/glossary/mainnet) launch, the total coin supply is increased by a fourth of the genesis block value (due to block rewards). Subsequent years will have fewer and fewer newly minted coins according to a decay function, but never fully reaching 0.

The formula to determine how many new coins will be minted for a particular year after launch is:

$$g (x) = \frac s 4 \cdotp e^{k \cdotp floor(x)}$$

Where <em>s</em> is the initial supply of the genesis block of 42 million coins, <em>k</em> is the decay factor of -.05, and <em>x</em> is the year after mainnet launch (starting from 0).

The Iron Fish “year” in block count is 2,100,000 blocks to one calendar year (assuming roughly 15 second block times). This means that by the end of the first Iron Fish “year,” 10.5 million new coins will be created through block rewards, 9.988 million new coins will be created in the subsequent year, 9.501 million new coins after that, and so on.

Given that the genesis block is 42 million coins, and the total supply increase for the first year is zx10.5 million coins, then the block reward per block for that year is simply the total year’s increase of coins divided by yearly block count: `10,500,000 / 2,100,000 == 5`. This means that the block reward for the first Iron Fish “year,” given these parameters, would be 5 coins (not including transaction fees).

To claim the block reward for successfully mining a new block, the miner constructs a special miner fee transaction in the block header. The value of the miner fee transaction is publicly visible so that others can verify that it is exactly the block reward plus all the transaction fees from the transactions included in that block. The recipient’s address for that miner fee transaction remains hidden. Learn more about the miner reward in the Transaction Creation section.

## Construct the Block Header
After determining the block body, the miner can then construct the [block header](3_storage.md#block-header) for it.

A Block Header consists of the following data:
- **sequence**: The **sequence** is constructed using the latest block’s sequence number and incrementing it by one. This field indicates the position of that block in the blockchain, starting from zero.
- **previousBlockHash**: The **previousBlockHash** is filled out using the hash of the latest block in the blockchain, per the [Iron Fish hashing algorithm](4_mining.md#iron-fish-hashing-algorithm). This indicates that this new block is building off of the latest known block in the blockchain.
- **noteCommitment**: All the new notes included in the block body are applied (in order) to the Merkle Tree of Notes. The resulting new Merkle root for that tree and its size (in terms of the global number of notes) are used to  build the noteCommitment for the block header.
- **nullifierCommitment**: The same process is followed, but with the nullifiers revealed, to build the **nullifierCommitment** for the block header.
- **target**: The **target** is determined by the [difficulty and target algorithm](4_mining.md#set-the-difficulty-and-target-for-a-block).
- **timestamp**: The **timestamp** is when that block is mined. The timestamp of the current block must be greater than the previous block’s timestamp, and can be up to 15 seconds into the future to mitigate for different clocks for whoever is verifying the block in real time.
- **minersFee**: The **minersFee** is a special transaction to award the block reward to any address of the miner’s choosing. The value of this block reward transaction is known and can be verified, but the recipient’s address is hidden. For more details, see how the block reward transaction is created (link to Miner Reward Transaction section in Transaction Creation).
- **randomness**: The **randomness** is a 64-bit number such that when all the contents of the block header are hashed using the [Iron Fish hashing algorithm](4_mining.md#iron-fish-hashing-algorithm) the result is numerically less than the target.

### Iron Fish Hashing Algorithm
The specifics of the Hashing Algorithm will be announced closer to launch date.
