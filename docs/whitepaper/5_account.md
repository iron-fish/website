---
id: 5_account
title: Account Creation
description: Account Creation | Iron Fish Whitepaper
---

<img src ="/img/whitepaper/account_creation.png" width="100%" role="presentation" style={{marginBottom:'25px'}} />

Now that we have gone over the logistics of supporting a privacy-focused cryptocurrency, we’ll focus on the core details of how an Iron Fish wallet is created to support fully private transactions.

Accounts and transactions in Iron Fish are heavily influenced by the [Sapling protocol](https://github.com/zcash/zips/blob/master/protocol/sapling.pdf), with some differences. In this section, we’ll break down all the key components of an account — how they’re created, how they’re used, and what is relevant to be surfaced to the user.

We’ll start with the key components that are used to view an account’s balance, send transactions, or view past transactions. All of the key components for an Iron Fish account are derived from a single secret key. Though the underlying account construction may seem complex, the high-level overview is that, in addition to the secret key, each account has a set of keys for spending that account’s funds, viewing keys to be given to any third party for read-only access, and a public address to be used to receive funds from others.

<img src='/img/whitepaper/account/account1.svg' width="100%" style={{paddingTop:'40px', marginBottom:'40px'}} />

Note that the term `key` pair here refers to [public key cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography), meaning that the key pair consists of a private key and an accompanying public key.

We’ll explain why all these parts are needed as we go along.

## Secret key

The secret key is simply a 32-byte random number. This is the seed necessary to construct all other parts of your wallet.

<img src='/img/whitepaper/account/2_data_structure_models_secret_key.svg' width="250px" />

## Spending Key Pair (Spending Authorization Key and Authorization Key)

This key pair is used for spending notes associated with an account, and is derived directly from the secret key.

The **Spend Authorization Key (ask)** is the private key component of this key pair and is derived by hashing the secret key and a modifier using the [Blake2b](https://blake2.net/) hashing algorithm (with personalization params) and then converting it into a scalar for the Jubjub curve.

The **Authorization Key (ak)** is derived as the public key for the spend authorization key by multiplying the spend authorizing key with a fixed generator base point for it on the [Jubjub curve](9_appendix.md#bls12-381-and-the-jubjub-curve).

The equation for this pair looks like this:

$$ak = ask * G_{ak}$$

Where **ak** is the authorization key, **ask** is the spend authorization key, and $$G_{ak}$$ is the generator base point for it on the Jubjub curve.

This key is used in the [Spend description](6_transaction.md#spend-description) of a transaction that is responsible for spending notes. More specifically, it is used in the zero-knowledge proof that is part of the Spend description to prove ownership of the note being spent. It is also used to create the signature for the Spend description.

<img src='/img/whitepaper/account/account2.svg' width="50%" style={{paddingTop:'40px'}} />
<br />
<em>The secret key is used to derive the spend authorization key (ask) which in turn is used to derive the authorization key (ak)</em>

## Nullifier Key Pair (Proof Authorization Key and Nullifier Deriving Key)

These keys are responsible for creating the nullifiers that are necessary to spend a note, derived from the secret key.

The **Proof Authorization Key (nsk)** is the private key component of the nullifier key pair and is derived by hashing the secret key and a modifier using the Blake2b (with parameters) hashing function and then converting it into a scalar (a.k.a. an integer) for the Jubjub curve. The proof authorization key is used in the [Spend description](6_transaction.md#spend-description) of a transaction proving that the revealed nullifier was computed correctly. Remember that to spend a note a user must reveal its unique nullifier as part of the transaction. The zero-knowledge proof of the Spend description ensures that the revealed nullifier was properly created using the owner’s proof authorization key.

The **Nullifier Deriving Key (nk)** is derived as the public key for the proof authorization key created by multiplying the proof authorizing key with a fixed generator base point $$G_{nk}$$:

$$nk = nsk * G_{nk}$$

Where **nk** is the nullifier deriving key, **nsk** is the proof authorization key, and $$G_{nk}$$ is the generator base point for it on the Jubjub curve.

<img src='/img/whitepaper/account/account3.svg' width="50%" style={{paddingTop:'40px'}} />
<br />
<em>The secret key is used to derive the proof authorization key (nsk) which in turn is used to derive the nullifier deriving key (nk)</em>

## View Key Pair (Incoming and Outgoing View Key)

The **Outgoing View Key (ovk)** allows for decrypting outgoing transactions. It is derived by hashing the secret key and a modifier using the blake2b hash function with additional params and then taking the first 32 bytes of the result.

The **Incoming View Key (ivk)** allows for decrypting incoming transactions. It is derived by using the blake2s hash function to hash the bytes of the authorizing key with the bytes of the nullifier deriving key and converting it into a Jubjub scalar:

$$ivk = blake2s(ak, nk)$$ <em>converted into a</em> **jubjub scalar**

<img src='/img/whitepaper/account/account4.svg' width="70%" style={{paddingTop:'40px'}} />
<br />
<em>The secret key is used to derive the outgoing view key. The incoming view key is derived from the authorization key (ak) and the nullifier deriving key (nk).</em>

## Public Address

The public address consists of a Transmission Key and a Diversifier. Together, they enable a single wallet with a single private key to contain up to $$2^{11}$$ public addresses.

### Diversifier

The diversifier **(d)** is a random 11-byte number used to randomize the final public address. The diversifier is converted into an affine point on the Jubjub curve ($$g_d$$) to be used to create the Transmission Key.

### Transmission Key

The Transmission Key ($$pk_d$$) is derived by multiplying the diversifier (converted to an affine point on the Jubjub curve, $$g_d$$) by the incoming view key:

$$pk_d = g_d * ivk$$

Concatenated together, the Diversifier and Transmission key make up the **Public Address**:

$$public \enspace address = (d, pk_d)$$

The public address is a 43-byte number (11 bytes for diversifier + 32 bytes for transmission key).

<img src='/img/whitepaper/account/account5.svg' width="70%" style={{paddingTop:'40px'}} />
<br />
<br />

The diversifier is converted into a point on the Jubjub curve, represented as $$g_{d}$$, and is used to derive the transmission key. Concatenated together, the diversifier and the transmission key make up the public address.

And that’s it! Those are all the parts of the account. The complexity of this construction comes from separating out the spending power from the viewing keys. This way, the account is constructed such that the keys responsible for spending notes are not the same ones used to decrypt information in the transactions.

Once you have an understanding of how accounts are created, the next step is transaction creation.
