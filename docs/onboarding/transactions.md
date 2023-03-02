---
id: send-receive-iron-fish-transactions
title: Transactions
sidebar_label: Transactions
description: Transactions | Iron Fish Onboarding
hide_table_of_contents: false
---

import Terminal from '../../src/theme/components/Terminal/Terminal'
import Send from '../../src/theme/components/Terminal/Wallet/Send'
import Transaction from '../../src/theme/components/Terminal/Wallet/Transaction'
import Transactions from '../../src/theme/components/Terminal/Wallet/Transactions'

**Your node doesn't have to be running at the same time as the sender to send or receive a transaction.**

## Send a transaction

#### Interactive mode

Send a transaction by running the following command using your default account:
```sh
ironfish wallet:send
```

<Terminal command={Send} />
<br />
If you want to send a transaction from a different account, you can use the `-f` flag.

E.g.
```sh
ironfish wallet:send -f MyOtherAccount
```

#### Noninteractive mode

Run `ironfish wallet:send --help` to see the different options available.

E.g. To send 2 coins from the account `Savings`
```sh
ironfish wallet:send -a 2 -o 0.00000001 -t 997c...7fc52ed -f Savings
```

## Receive a transaction
To receive a transaction, you just need to communicate the public key of your account to the sender. If you don't know your public key, run the following command:
```sh
ironfish wallet:address
```

E.g. To get the public key of a different account on your node
```sh
ironfish wallet:address Savings
```

## View transactions
To view transactions involving the current account
```sh
ironfish wallet:transactions
```
<Terminal command={Transactions} />

## View a transaction
View more details on a transaction involving a given account
```sh
ironfish wallet:transaction 24a7c779f53b9780c336d2388581be30360d2b6870e39fc39caa3cd2604b8d85
```
<Terminal command={Transaction} />

## Balance

You can check your balance at any time by running the following command:
```sh
ironfish wallet:balance
```

Or, to check your balance for all assets (including user-created ones):
```sh
ironfish wallet:balances
```

## Offline signing

Iron Fish allows you to create an account on a computer disconnected from the Internet, but still retain the ability to send and receive transactions with that account. Sending transactions by using a key stored on a disconnected computer is known as "offline signing."

When signing transactions, you'll need to run two Iron Fish nodes:
* Online: an online node that is connected to the Internet and the Iron Fish network
* Offline: an offline node that holds your spending keys

You'll also need a secure method of moving files between the online node and offline node, like an encrypted USB drive.

### Creating a spending account

On the offline node, run the following command to create an account, replacing `accountName` with the name of your choice:

```sh
ironfish wallet:create accountName
```

Or, if you've already created a spending account, copy it to the offline node and run:

```sh
ironfish wallet:import
```

### Exporting a view-only key

On the offline node, run the following command to export a view-only key. The view-only key allows read-only viewing of transactions related to the account, but does not allow sending transactions.

```sh
ironfish wallet:export --viewonly accountName
```

This will display output like the following:

```sh
ironfishaccount00000...
```

Copy that line to the online node.

### Importing a view-only key

On the online node, using the output from the `wallet:export` command, run the following command:

```sh
ironfish wallet:import ironfishaccount00000...
```

The online node will be able to view all transactions involving the account, but will not be able to spend notes.

### Receiving transactions

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

### Creating a raw transaction

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

### Posting a raw transaction

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

### Sending a posted transaction

Finally, once the posted transaction is on the online node, run the following command on the online node:

```sh
ironfish wallet:transaction:add 132...
```

This will add the transaction to your wallet and broadcast it out to the Iron Fish network. You can run the following command to display transactions associated with your account:

```sh
ironfish wallet:transactions accountName
```

The transaction you've added will display in the 'pending' status until it's included in a block.

## Next steps

You can now track your transaction on the network, or [start mining $IRON](mine.md).
