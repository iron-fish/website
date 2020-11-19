---
id: 1_introduction
title: Introduction
sidebar_label: Introduction
description: Introduction | Iron Fish Whitepaper
---

## Abstract

Iron Fish is a decentralized, proof of work (PoW) based, censorship-resistant, and publicly accessible blockchain project. It is designed to support strong privacy guarantees on every transaction. Similarly to how the invention of the SSL/TLS layer in the 90s paved the way to e-commerce and benefited countless industries, we believe that privacy is a fundamental requirement to protect the user and expand the use of cryptocurrency.

We have designed Iron Fish to be a new cryptocurrency from the ground up to enable easy-to-use, fully-private payments by closely following the [Sapling](https://github.com/zcash/zips/blob/master/protocol/sapling.pdf) protocol. Every account is equipped with a view-key to grant its holder read-only permission for the details of that account. The protocol is built with light-client support in mind to enable clients on mobile devices and even natively on the web. The protocol is also structured in a way to enable a novel fast syncing technique with no loss to security guarantees to get users and miners alike running in as little time as possible

## Introduction

The goal of the Iron Fish project is to preserve the concept of cash as we move towards being global citizens in a fully digital world. Privacy is not only essential for true global e-commerce, but it is also essential to protect the people and to allow society to evolve and move forward. We aim for this project to address the use cases of global payments and banking for everyone and to build the underlying protocol in a way that’ll allow the tools, wallets, and apps to be quick, efficient, and easy to use.

This paper outlines the Iron Fish protocol to enable a fully private cryptocurrency with a fast syncing technique and a clear path to support low-resource clients such as phones and websites. We have built on the learnings of past and existing blockchain projects and have come up with a protocol that takes no shortcuts in guaranteeing privacy and decentralization. We understand the importance of regulation, and as such, every wallet comes with a view key giving the holder a full uncensored view of the account without the ability to spend. This will allow exchanges to keep all records of their client’s spendings on the blockchain if need be.

## Organization of this paper

This paper is organized as follows:

- [Data Structures and Models](2_data_structure_models.md)
To first familiarize yourself with all the various components of this blockchain to later understand how they interact
- [Transactions](3_transactions.md)
And how they’re created and validated
- [Note Encryption and Decryption](4_note_encryption_decryption.md)
On how transactions result in encrypted notes that only the sender’s outgoing view key and recipient’s incoming view key can decrypt
- [Block Creation](5_block_creation.md)
- [Block Verification](6_block_verification.md)
- [Consensus and Verification](7_consensus_verification.md) on how transactions and blocks are accepted and when they’re propagated to the network
- [Optimistic Sync](8_optimistic_sync.md)
- [Networking](9_networking.md)
- [Light Client Capabilities](10_light_client_capabilities.md)
- [Performance Goals](11_performance_goals.md)
- [Appendix](12_appendix.mdx)
