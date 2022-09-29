---
id: 1_introduction
title: Introduction
sidebar_label: Introduction
description: Introduction | Iron Fish Whitepaper
---

<img src ="/img/whitepaper/introduction.png" width="100%" role="presentation" />

## Abstract
Iron Fish is a decentralized, proof-of-work (PoW) based, censorship-resistant, and publicly accessible blockchain project. It is designed to support strong privacy guarantees on every transaction. Similarly to how the invention of the SSL/TLS layer in the '90s paved the way to e-commerce and benefited countless industries, we believe that privacy is a fundamental requirement to protect the user and expand the use of cryptocurrency.

We have designed Iron Fish to be a new cryptocurrency from the ground up to enable easy-to-use, fully-private payments by closely following the [Sapling protocol](https://github.com/zcash/zips/blob/master/protocol/sapling.pdf). Every account is equipped with a view key to grant its holder read-only permission for the details of that account.

With this protocol, we are challenging previous patterns of full node usability. The Iron Fish networking layer supports WebRTC with WebSockets, making it trivial for all users to make a true P2P connection with no other setup requirements. Our first Iron Fish implementation is built such that it can be extended to run a full node directly in the browser in future iterations. And our focus is to lower the barrier to entry so that any person with a computer feels comfortable enough to run a full node.

## Introduction

Privacy is controversial, but it shouldn’t be. In fact, privacy leads to innovation — social evolution through changing laws, and the freedom to simply be you. Take doors on houses or passwords for bank accounts, both of which are precautions most people take even though they might say they have nothing to hide.

At Iron Fish, we are building something we’re truly proud of: a cryptocurrency that does not compromise on privacy or accessibility. Digital cash that embodies using privacy for good. We are all moving towards becoming fully digital global citizens where our every activity and purchase is carefully logged, analyzed and sold. In this world, privacy is more important than ever and has growing demand worldwide.

Popular cryptocurrencies like Bitcoin, Ethereum, and others are the least private way of transacting — their protocols fundamentally work on complete transparency to verify transactions. Though other privacy coins exist, they all either lack the privacy guarantees they’ve promised or are so hard to use they barely have any real usage (and oftentimes both).

There is huge untapped potential here — but only if users feel truly protected by their cryptocurrency, and are able to access it. Just like the introduction of SSL/TLS in the '90s opened up the floodgates to e-commerce (the predecessors of HTTPS), we believe that an accessible privacy coin will lead to a new class of industries of borderless products and companies.

In this paper, we cover how Iron Fish works, and why we’ve built it this way. While we endeavor to explain things as much as possible and go over all relevant terminology, some parts will require a basic understanding of elliptic curve cryptography.

## Organization of this paper

All blockchains, regardless of their feature sets, have six main ingredients: the networking layer, storage layer, mining (or mechanism of block creation), account creation, transaction creation, and consensus (the rules for accepting new blocks). We go over each of these ingredients, as follows:

- [Networking](2_networking.md)
  This section goes over the basic networking stack, startup sequence, message types, and gossip protocol implementation.
- [Storage](3_storage.md)
  The Storage section familiarizes the reader with the main data structures and models for Iron Fish, as well as our first implementation of how the storage layer is accessible in both the CLI and browser full node implementation.
- [Mining](4_mining.md)
  The Mining section describes how new blocks are constructed containing the necessary randomness for proof of work (PoW), as well as the miners reward calculation.
- [Account Creation](5_account.md)
  The Accounts Creation section describes how Iron Fish accounts are created following the Sapling protocol and breaks down the uses of all the necessary key components for an account.
- [Transaction Creation](6_transaction.md)
  Iron Fish transactions also closely follow the Sapling protocol, and this section goes over exactly where and how zero-knowledge proofs are applied, how transaction fees are included, and how to balance and validate any existing transaction.
- [Verification and Consensus](7_consensus_verification.md)
  Finally, the last section ties everything together by outlining the rules for how new blocks containing user transactions are accepted.

