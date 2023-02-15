---
id: 2_networking
title: Networking
description: Networking | Iron Fish Whitepaper
---

<img src ="/img/whitepaper/networking.png" width="100%" role="presentation" style={{marginBottom:'25px'}} />

The networking layer is a significant part of any blockchain and helps support all the features that make that protocol unique. Specifically, the networking layer dictates how nodes interact with one another — what transport layers they can use to communicate, how they **gossip messages** to all the other peers, and how they request/respond to specific messages from other peers.

When building any decentralized [peer-to-peer](https://en.wikipedia.org/wiki/Peer-to-peer) (P2P) system, it must address [Network Address Translation](https://docs.libp2p.io/concepts/nat/) (NAT). Most of our machines, laptops, tablets, and phones are behind routers and firewalls, making it difficult for peers to establish direct connections. This is where the networking layer comes in.

We designed our implementation with a focus on accessibility. By using a combination of WebRTC and WebSockets for our transport layer, we avoid requiring the user to set up port-forwarding on their router to bypass their NAT. In other words, the Iron Fish node implementation works right out of the box for any user. 

When a node is first launched, it needs to know of at least one other node it can connect to (known as a **bootstrap node**) that’ll introduce it to more peers in the network. That initial connection to a bootstrap node happens over a WebSocket, and all subsequent peer connections use WebRTC, falling back to WebSockets if necessary. This section will describe that process in detail.


## Startup Sequence

As a new node starts up, the following happens:

1. The node generates a unique keypair for itself. The node uses the public key as its network identity.
2. The new node randomly selects one bootstrap node from a provided list, and opens a WebSocket connection to it. If a user has a specific node they want to connect to during this step, they can use the config file or the command line to specify their own preferred bootstrap node(s).
3. The new node and the bootstrap node send an initial “Identity” message to each other.
4. The new node sends a PeerListRequest message to the bootstrap node, and the bootstrap node responds with a PeerList message.
5. Using that list, the new node decides which peers to connect to.
6. The 3rd step is repeated with every new peer the node connects with, until the maximum number of connections (up to 50) is made.

As an end user, all this happens without you having to do anything, or even be aware of it. When you start a node, from your end, all you’ll see is your node connecting to a bootstrap node, and then quickly to many others.

Let’s look at how nodes communicate with one another by passing messages.

## Messaging

A message is an agreed-upon format for a piece of information to be shared between peers. There are several types of messages and ways for them to interact with the nodes, depending on the situation.

### Message Types

The networking layer relies on these different Message Types: 

| Message Type                 | Network Numerical Number | Description                                                                                                                                           |
|------------------------------|--------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| Disconnecting                | 0                        | Notifies that a node is not accepting a connection (e.g. that peer is at max peers)                                                                   |
| CannotSatisfyRequest         | 1                        | Used for request/response messages                                                                                                                    |
| GetBlockHashesRequest        | 2                        | Requests a block hash during syncing                                                                                                                  |
| GetBlockHashesResponse       | 3                        | Responds with a list of block hashes so the syncing node can perform a binary search to find where the syncing node should start syncing from         |
| GetBlocksRequest             | 4                        | Requests a block during sync                                                                                                                          |
| GetBlocksResponse            | 5                        | Responds with a list of full blocks to the requesting node to facilitate syncing                                                                      |
| Identify                     | 6                        | Upon node startup, nodes use this message to to introduce one another by exchanging their identities                                                  |
| PeerList                     | 7                        | Responds with a peer list to facilitate the requesting peer in peer discovery                                                                         |
| PeerListRequest              | 8                        | Requests peer lists from your peers for node discovery                                                                                                |
| Signal                       | 9                        | WebRTC session data                                                                                                                                   |
| SignalRequest                | 10                       | Requests to start a WebRTC connection with another peer                                                                                               |
| PooledTransactionsRequest    | 11                       | Using a list of transaction hashes, requests full transactions from another peer’s mempool (pool of pending transactions)                             |
| PooledTransactionsResponse   | 12                       | Responds to a PooledTransactionsRequest request with full transactions                                                                                |
| NewPooledTransactionHashes   | 13                       | Notifies peers of newly gossiped transaction hashes                                                                                                   |
| NewTransactions              | 14                       | Notifies peers of newly gossiped transactions                                                                                                         |
| NewBlockHashes               | 15                       | Notifies peers of newly gossiped block hashes                                                                                                         |
| NewCompactBlock              | 16                       | Notifies peers of newly gossiped block headers with transaction hashes                                                                                |
| GetBlockTransactionsRequest  | 17                       | Requests full transactions from a CompactBlock by index                                                                                               |
| GetBlockTransactionsResponse | 18                       | Responds to a request for full transactions within a CompactBlock by index                                                                            |
| GetCompactBlockRequest       | 19                       | Given a block hash (from a NewBlockHashes message), requests a CompactBlock                                                                           |
| GetCompactBlockResponse      | 20                       | Responds to a GetCompactBlockRequest                                                                                                                  |

The **gossip protocol** is primarily used to broadcast new blocks and transactions to all of the peers within the Iron Fish network. Let’s dive a little deeper into how the gossip protocol works.

## Gossip Protocol

The goal of the gossip protocol is to get new blocks and transactions to every peer as quickly as possible, while using the least amount of network data.

We’ll dive a bit deeper now into our transaction protocol and block protocol. 

## Transaction Protocol

When handling a new transaction (whether creating it or re-gossiping) a node sends a full transaction to a randomly chosen square root set of its peers (NewTransactions), and a hash of the transaction to all the rest (NewPooledTransactionHashes). 

When a node receives a hash of a transaction it hasn't seen before (via NewPooledTransactionHashes), it waits briefly (1000 ms) to see if any peers will send the full transaction. During that time, the peer maintains a list of any additional peers that send it the same hash. After the waiting period, the node chooses a random peer from this list to request the full transaction (using PooledTransactionsRequest). 

When a node receives a full transaction (via NewTransactions or PooledTransactionsResponse message type) the node does a full validation of the transaction, adds it to its own mempool, and then repeats the gossip process with its peers.

## Block Protocol

Broadcasting blocks work similarly to broadcasting transactions. The main difference is that instead of broadcasting a full block, a node broadcasts a structure called a **CompactBlock**. A CompactBlock includes the block header and hashes of all the transactions on the block (the same hashes that go out during transaction propagation, i.e. the unique identifiers for transactions). Using a compact block helps with speed and efficiency, due to the large size of transactions. 

When a node receives a new block hash from NewBlockHashes, it handles it similarly to receiving new transaction hashes. It will wait a short time (1000ms) to see if it receives a CompactBlock from any other peer. In that period it keeps track of any other peer who sent it that block hash. Once the waiting period is over, the node will request the CompactBlock (using GetCompactBlockRequest) from a random peer in the list. 

Once a node receives a compact block (either through GetCompactBlockResponse or NewCompactBlock), it uses the transaction hashes on the compact block to fetch matching transactions from its mempool, then uses those transactions to reconstruct the full block. 

In some cases, a node may not have the necessary transactions in its mempool to rebuild the block. If that happens, a node can request a subset of the transactions from a peer node that told it about the block. The node then tests that the block header is valid. If it’s valid, the node sends a compact block to the square root of its peers, then validates the block’s transactions. Once the transactions have been validated, the node adds the block to its local blockchain and sends block hashes to the remaining peers.

## Local History

In an effort to avoid an infinite broadcast of the same message, each node uses a bloom filter to store a set of transaction hashes and block hashes that its peers have seen. When a node receives a block or transaction, before re-gossiping, it filters out peers that have already been marked as having that block or transaction (i.e the block or transaction hash is in the bloom filter for that peer). 
