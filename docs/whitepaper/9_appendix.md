---
id: 9_appendix
title: Appendix
description: Appendix | Iron Fish Whitepaper
---

## BLS12-381 and the Jubjub curve
[BLS12-381](https://github.com/zkcrypto/pairing/tree/e72660056e00c93d6b054dfb08ff34a1c67cb799/src/bls12_381) is a pairing-friendly elliptic curve with an inner twisted Edwards curve (of the form $$−x^2 + y^2 = 1 + dx^2y^2$$) called Jubjub. Parameters for the BLS12-381 curve are taken from [Bowe2017](https://github.com/ebfull/pairing/tree/e72660056e00c93d6b054dfb08ff34a1c67cb799/src/bls12_381). Jubjub was designed in such a way that its base field has the same size as the group of BLS12-381, allowing for efficient curve operations inside a BLS12-381 zk-SNARK. The parameters for the Jubjub curve are taken from the [Sapling](https://github.com/zcash/zips/blob/master/protocol/sapling.pdf) specifications.

## Why Proof of Work?
We’ve done thorough and extensive [research](https://www.notion.so/beanstalk/Why-PoW-is-a-Great-Choice-For-New-Layer-1-Blockchains-04438f79bea2444faead1b8fbd9220d0) on the merits and drawbacks of Proof of Work, Proof of Stake, and Delegated Proof of Stake systems. Ultimately the conclusion we’ve come to is that Proof of Work systems are overall more secure with much better understood attack vectors and have a better path towards being more equal and fairly decentralized. Proof of Stake systems can sometimes lead to better UI/UX with deterministic finality and sometimes faster block times, but the pros do not outweigh the cons when looking at Proof of Stake based algorithms holistically.

## Continued Reading on Benefits of Privacy
While this paper aims to simply outline the protocol and not veer into discussing merits of privacy preserving tools directly, the reader might find the following papers on the matter interesting:
- [We all Have Something to Hide](https://moxie.org/2013/06/12/we-should-all-have-something-to-hide.html) by Moxie
- [The Case for Electronic Cash](https://www.coincenter.org/the-case-for-electronic-cash/) by Coincenter (with edits from Elena Nadolinski from Iron Fish)
- [AML Regulations of Privacy Enabling Cryptocurrencies](https://www.perkinscoie.com/images/content/2/3/237411/Perkins-Coie-LLP-White-Paper-AML-Regulation-of-Privacy-enablin.pdf) by Perkins Coie
