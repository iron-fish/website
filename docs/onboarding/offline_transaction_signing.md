---
id: offline-transaction-signing
title: Offline transaction signing
sidebar_label: Offline transaction signing
description: Offline Transaction Signing | Iron Fish Onboarding
hide_table_of_contents: false
---

Iron Fish allows you to create an account on a computer disconnected from the Internet, but still send and receive transactions with that account. Sending transactions by using an account stored on a disconnected computer is known as "offline signing."

When signing transactions offline, you'll need to run two Iron Fish nodes:
* **Online**: an online node that is connected to the Internet and the Iron Fish network
* **Offline**: an offline node that holds your spending keys

You'll also need a secure method of moving files between the online node and offline node, like an encrypted USB drive.

The following steps explain the process for creating an account for offline signing and for sending transactions with that account.

## Create a spending account

On the offline node, run the following command to create an account, replacing `accountName` with the name of your choice:

```sh
ironfish wallet:create accountName
```

Or, if you've already created a spending account, copy it to the offline node and run:

```sh
ironfish wallet:import
```

## Export a view-only key

On the offline node, run the following command to export a view-only key. The view-only key allows read-only viewing of transactions related to the account, but does not allow sending transactions.

```sh
ironfish wallet:export --viewonly accountName
```

This will display output like the following:

```sh
ironfishaccount00000...
```

Copy that line to the online node.

## Import a view-only key

On the online node, using the output from the `wallet:export` command, run the following command:

```sh
ironfish wallet:import ironfishaccount00000...
```

The online node will be able to view all transactions involving the account, but will not be able to spend notes.

## Receive transactions

On either the offline node or the online node, you can retrieve your account's public key by running:

```sh
ironfish wallet:address accountName
```

Sharing this public key with other users allows them to send you transactions. When you've received transactions, you can view them (along with your balances) by running the following commands on your online node:

```sh
ironfish wallet:transactions accountName
```

```sh
ironfish wallet:balances accountName
```

## Create a raw transaction

Once you have assets in your account, you can send assets to another account by using the online node to create a raw transaction.

A raw transaction contains the parameters of a transaction, like which notes will be spent, which notes will be created, and who will own the notes. A view-only account can generate a raw transaction, but the transaction cannot be submitted to the Iron Fish network until it is posted by a corresponding spending account.

Run the following command on the online node:

```sh
ironfish wallet:send --rawTransaction --account=accountName
```

This will display output like the following:
```sh
Raw Transaction
010000...
Run "ironfish wallet:post" to post the raw transaction.
```

The data between "Raw Transaction" and "Run..." is your raw transaction. Copy this value to the offline node.

## Post a raw transaction

Once the raw transaction is on the offline node, run the following command on the offline node:

```sh
ironfish wallet:post --account=accountName 010000...
```

This will display output like the following:

```sh
Posted transaction with hash 6b1f482f1d7f960b0c83b10a9349194912ad780063a2f23fcebad32c8d7d2d1f

0102000...

```

The data after the line starting with "Posted transaction" is your posted transaction. Copy this to the online node.

## Send a posted transaction

Finally, once the posted transaction is on the online node, run the following command on the online node:

```sh
ironfish wallet:transaction:add 132...
```

This will add the transaction to your wallet and broadcast it out to the Iron Fish network. You can run the following command to display transactions associated with your account:

```sh
ironfish wallet:transactions accountName
```

The transaction you've added will display in the 'pending' status until it's included in a block.
