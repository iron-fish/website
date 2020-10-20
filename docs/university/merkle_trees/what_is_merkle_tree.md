---
id: what_is_merkle_tree
title: What is a Merkle Tree?
sidebar_label: What is it?
---

## What is a Merkle Tree?

Also called a hash tree, a Merkle tree is a tree data structure where each node includes a hash of its children.

The actual structure of the tree is irrelevant if the node hashes are constructed correctly. It can be a general tree or a binary tree. It can utilize parent pointers, child pointers or lists of children. It might be complete or full or perfect or red-black or even a trie.

The important point is that a Merkle Tree is not a specific tree structure. The defining feature is that each node includes a hash that somehow encapsulates the structure of all of its children.

## What can we use Merkle Trees for?
If Bitcoin did not have Merkle Trees, every single node on the network would need to download a complete copy of every single transaction that has ever occurred on the Bitcoin network (in June 2020 this copy would be about 285+GB). When confirming a transaction, a node would need to get copies of the ledger from its peers and then compare each entry to make sure its own records and the network records matched exactly. You can see that this would not be sustanable, each verification request would require too large packets of information to be sent over the network.<br />

What if we could separate the data and create a proof of the data without the data itself? We could hash the data (more to come on Hashes soon) and the digest of the hash would be the proof without the data itself.

Let's see how we could use this, with our example of a large file of 285+GB.
Once the file is downloaded, you will then need to verify that it was not corrupted (either by a bad user or because of network issue). A common solution to this problem is to hash the file and compare the digest with the one provided by the owner of the file. If the digests match then the file was downloaded successfully.

<img src="/img/docs/merkle_tree/base_blockchain.svg" width="100%" />

If the digests don't match then the user would have to download the entire file again since they wouldn't be able to know which part of the file is corrupted.

A common solution to this problem is to divide this big file in chunks, and provide a hash digest for each of these blocks. The user can now download each chunk one by one and verify their integrity. If one digest doesn't match, then they know they only need to download again that chunk.

This would be how the split would look like if we were to split the file in chunks of 35GB:

<img src="/img/docs/merkle_tree/base_tree.svg" width="100%" />

Now we need to provide the 8 chunks, but also the 8 hash digests for each chunk:

```
Chunk 1 digest = hash(Part 1) = 59e0a3cc...
Chunk 2 digest = hash(Part 2) = 5e9b00ff...
Chunk 3 digest = hash(Part 3) = ede549d...
Chunk 4 digest = hash(Part 4) = 1bdd44d...
Chunk 5 digest = hash(Part 5) = eb80ee...
Chunk 6 digest = hash(Part 6) = 00e8345...
Chunk 7 digest = hash(Part 7) = 53f77e7...
Chunk 8 digest = hash(Part 8) = dddf4d..
```

But 35GB is still a pretty large file, and could take many hours to download and hash. What if we were to split the file to have chunks of 2MB? We would need 142,500 chunks and the 142,500 chunk digests. Just the digests would represent a lot of data.

Using a Merkle tree we are able to take this import number of digests, run it through the mathematical process of the Merkle Tree and end up with one single root of one digest. A Merkle tree is basically a cryptographic accumulator.

## How does it work?

Merkle Trees always group all of the data inputs into pairs. Each pair consist of hashing the two children hash digests.
```
Pair 1 = Hash(Hash(Part 1) + Hash(Part 2)) = ba9acfa6...
Pair 2 = Hash(Hash(Part 3) + Hash(Part 4)) = d433f298...
Pair 3 = Hash(Hash(Part 5) + Hash(Part 6)) = 287e852...
Pair 4 = Hash(Hash(Part 7) + Hash(Part 8)) = 8f49c3c...
```

If there is ever a odd number of elements, then the last element is "copied" and paired with itself.
```
Pair 1 = Hash(Hash(Part 1) + Hash(Part 1)) = b09acfa3...
```

Using our previous example, this would be the next level of the merkle tree.

<img src="/img/docs/merkle_tree/tree_two_layers.svg" width="100%" />

The process continues until you only have one pair left. Then each element of that pair will be hashed into what we call the Merkle root.

<img src="/img/docs/merkle_tree/full_tree.svg" width="100%" />

If we are using a strong hashing algorithm that extremely rarely produce collision, we can then consider that by concatenating the two digests and hashing it, each pair is a unique representation of both digests of their direct childrens.

By extrapolation, **the root of this hash tree is a unique identifier of this exact tree**.

Let's look at the impact to the tree when one of the children is changed. Reusing our previous example, if the data changed on the part 5, the digest of the hash of part 5 would change, then the digest of the pair of the part 5 & 6 would change, up to the Merkle Root. The Merkle root digest is now a different identifier unique to this new tree.
<img src="/img/docs/merkle_tree/updated_tree.svg" width="100%" />

## What are the benefits of Merkle Trees?
A Merkle tree allows you to:

- Verify that two entities have the exact same tree without having to send the entire tree across a network. This is used in distributed version control systems such as git. If I send you the root hash of my Merkle tree, and it matches the root hash of your Merkle tree, then you know that we have the same trees and thus the same data.
- They also significantly reduce the amount of memory needed to do the above
- Prove that a value was known in advance. This is called a commitment scheme, and is the primary use in zero knowledge proofs. For example, I can calculate several values, encode them in a Merkle tree, and send you the root hash. You later ask me to prove that a given value was in the tree. If I present a combination of hashes to combine with your value to get my root hash, you know your value is in my tree.
- Demonstrate that the current version of a tree was created from an older tree with a known root hash.


## How are they being used in the Bitcoin blockchain

Like we were saying previously, Merkle trees are not necessary to create a blockchain but they can be extremely useful. Let's take the Bitcoin blockchain as an example again.
In the Bitcoin chain, a new block is generated every 10 minutes. All the transactions that took place in that time are bundled together in the block.
10 minutes could potentially include tens of thousands of transactions and the size of one block is therefore very large.

Instead of sending the entire block with all the transactions, only the the Merkle root of these transactions is being sent. This is what we call a block header. The transactions can be sent upon request, but the peers don't need to have it to be operational.

<img src="/img/docs/merkle_tree/blockchain.svg" width="100%" />

