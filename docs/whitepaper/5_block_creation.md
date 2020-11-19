---
id: 5_block_creation
title: Block Creation
description: Block Creation | Iron Fish Whitepaper
---

A block has a list of transactions and a block header. When creating the block header, the two global Merkle trees for notes and nullifiers must be updated to include all the transactions in a block, and their new roots recorded as part of the block header. A miner must also provide an appropriate hash to satisfy the target difficulty with the given nonce.

## Miner Reward

A Miner Reward is simply a transaction that is added by the miner when a block is created.

There are two scenarios for a miner to allocate funds:
- **Scenario 1**: The Miner processes some transactions and mines a block. The Miner reward is known and all the transaction fees are known.
- **Scenario 2**: The Miner does not process any transactions and mines an empty block but still gets a block reward.  The Miner reward is known.

In both those scenarios, the Miner will include a **_transaction_** in the block with no Spend Descriptions and exactly **_one _**Output Description.

The reward for mining a block with 0 or more transactions is: `block reward + sum(transaction_fees)`. The Miner will append a transaction that has no Spend Description and exactly one Output Description that has the **_block reward in the transaction fee_**.

As always, `inputs - outputs = transaction_fee`, except for this specially marked transaction, the transaction fee is negative. Below is an example where the miner’s reward is 12 coins.

<img src='/img/docs/5_block_creation_transaction.svg' height="450" />

Similarly to how the transaction was verified above, we check that `inputs - outputs = transaction_fee`:

**Verifying transaction fee matches value commitments of the notes**

$$G (-12) + H (r) = G (tx_fee) + binding\_verification\_key$$

In this case, the transaction fee is negative 12 (the agreed upon miner’s reward for mining this block).

The Miner is able to make a transaction that has the `block reward + transaction fees` allocated to themselves in this special transaction in a way that is easily verifiable by other Miners or verifiers and that does not compromise the Miner’s privacy.

