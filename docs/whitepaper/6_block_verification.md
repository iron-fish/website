---
id: 6_block_verification
title: Block Verification
---

Block verification comes in two steps:
1. Verify all the transactions inside that block (see [Transaction Verification](3_transactions.md#transaction-verification) for details)
2. Verify the Block Header
    1. **miners_fee**
        1. Verify that the miners fee is appropriate (see [Miner Reward](5_block_creation.md#miner-reward) for details)
    2. **note_commitment & nullifier_commitment**
        1. Verify that the new Block Header has the correct Merkle roots for both the notes and nullifiers after all the transactions for that block have been applied to both trees
    3. **target & randomness**
        1. Verify that the difficulty of the block hash given the nonce is met
    4. **timestamp**
        1. Verify that the timestamp is within bounds
    5. **sequence & previous_block_hash**
        1. Verify that the block is referencing the correct previous block
