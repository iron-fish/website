---
id: send-receive-iron-fish-transactions
title: Transactions
sidebar_label: Transactions
description: Transactions | Iron Fish Onboarding
hide_table_of_contents: false
---

import Terminal from '../../src/theme/components/Terminal/Terminal'
import Pay from '../../src/theme/components/Terminal/Pay'

**Your node doesn't have to be running at the same time as the sender to send or receive a transaction.**

## Send a transaction

#### Interactive mode

Send a transaction by running the following command using your default account:
```sh
ironfish accounts:pay
```

<Terminal command={Pay} />
<br />
If you want to send a transaction from a different account, you can use the `-f` flag.

E.g.
```sh
ironfish accounts:pay -f MyOtherAccount
```

#### Non Interactive mode

Run `ironfish accounts:pay --help` to see the different options available.

E.g. To send 2 coins from the account `Savings`
```sh
ironfish accounts:pay -a 1 -o 0.00000001 -t 997c...7fc52ed -f Savings
```

## Receive a transaction
To receive a transaction, you just need to communicate the public key of your account to the sender. If you don't know your public key, run the following command:
```sh
ironfish accounts:publickey
```

E.g. To get the public key of a different account on your node
```sh
ironfish accounts:publickey -a Savings
```

## Balance

You can check your balance at any time by running the following command:
```sh
ironfish accounts:balance
```

## Next steps

You can now track your transaction on the network, or [start mining $IRON](mine.md).