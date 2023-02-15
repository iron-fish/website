---
id: 1_introduction
title: Introduction
sidebar_label: Introduction
description: Introduction | Iron Fish Whitepaper
---

<img src ="/img/whitepaper/introduction.png" width="100%" role="presentation" />

Blockchain protocols today offer security, accountability, programmability, and much more, but the vast majority of these protocols do not offer privacy. Transparency is used as a mechanism for trustless transaction verification, and the consequence is that crypto users are forced to reveal all information about their activity. 

Pseudonymity is easily broken either through blockchain analytics, NFT profile pictures, or simply by asking users to link their identity with their wallet to get funds, airdrops, or other perks. This not only makes users leak their sensitive financial information to everyone in the world, but also makes them easy targets for phishing attacks, scams, fraud, social engineering, and theft. Advancing privacy-preserving technology to protect every day users has undeniable benefits for crypto adoption.

Iron Fish is a decentralized, proof-of-work a(PoW) based, censorship-resistant, and publicly accessible blockchain project focused on providing crypto users with responsible privacy. Iron Fish aims to protect crypto users’ sensitive financial information while implementing tools to let its users consent to interacting with certain parties. 

This paper covers how the Iron Fish protocol works today, and related considerations. While we endeavor to explain things as much as possible and go over all relevant terminology, some parts will require a deeper understanding of cryptography and distributed systems.

## Organization of this paper

All blockchains, regardless of their feature sets, have six main ingredients: the networking layer, storage layer, mining (or mechanism of block creation), account creation, transaction creation, and consensus (the rules for accepting new blocks). We go over each of these ingredients, as follows:


* [Networking](2_networking.md) goes over the basic networking stack, startup sequence, message types, and gossip protocol implementation.
* [Storage](3_storage.md) familiarizes the reader with the main data structures and models for Iron Fish. 
* [Mining](4_mining.md) describes how new blocks are constructed containing the necessary randomness for proof of work (PoW), as well as the miners reward calculation.
* [Account Creation](5_account.md) describes how Iron Fish accounts are created and breaks down the uses of all the necessary key components for an account.
* [Transaction Creation](6_transaction.md) goes over exactly where and how zero-knowledge proofs are applied, how transaction fees are included, and how to balance and validate any existing transaction.
* [Verification and Consensus](7_consensus_verification.md) ties everything together by outlining the rules for how new blocks containing user transactions are accepted.
