---
id: wallet
title: RPC Wallet commands
sidebar_label: RPC Wallet commands
description: RPC Wallet | Iron Fish Onboarding
hide_table_of_contents: false
---

## Wallet

### `wallet/addTransaction`

Takes in a posted transaction, adds it to the wallet and mempool, and optionally broadcasts it to the network. Returns the names of the wallet accounts involved in the transaction.

#### Request

```js
{
  transaction: string
  broadcast?: boolean
}
```

#### Response

```js
{
  accounts: string[]
}
```

### `wallet/burnAsset`

Creates a transaction burning a custom asset from a given account, posts the transaction, and submits it to the wallet, mempool, and network.

#### Request

```js
{
  account: string
  assetId: string
  fee: string
  value: string
  expiration?: number
  expirationDelta?: number
  confirmations?: number
}
```

#### Response

```js
{
  assetId: string
  hash: string
  name: string
  value: string
}
```

### `wallet/create`

Creates a new account in the wallet with the given name, optionally setting it as the default account.

#### Request

```js
{
  name: string
  default?: boolean
}
```

#### Response

```js
{
  name: string
  publicAddress: string
  isDefaultAccount: boolean
}
```

### `wallet/createTransaction`

Creates and returns a new transaction with the given parameters, but doesn't post it (as such, it's also not added to the wallet, mempool, or broadcast to the network). This allows for the transaction to be posted using spending keys stored on a different node.

#### Request

```js
{
  account: string
  outputs: {
    publicAddress: string
    amount: string
    memo: string
    assetId?: string
  }[]
  mints?: {
    assetId?: string
    name?: string
    metadata?: string
    value: string
  }[]
  burns?: {
    assetId: string
    value: string
  }[]
  fee?: string | null
  feeRate?: string | null
  expiration?: number
  expirationDelta?: number
  confirmations?: number
}
```

#### Response

```js
{
  transaction: string
}
```

### `wallet/exportAccount`

Exports the keys to the default account, or the named account if specified. If `viewOnly` is true, the spending key will be null, but the spending key may also be null if exporting a view-only account.

#### Request

```js
{
  account?: string;
  viewOnly?: boolean
}
```

#### Response

```js
{
  account: {
    name: string
    spendingKey: string | null
    viewKey: string
    incomingViewKey: string
    outgoingViewKey: string
    publicAddress: string
    version: number
  }
}
```

### `wallet/getAccounts`

Returns accounts in the wallet.

#### Request

```js
{
  default?: boolean
  displayName?: boolean
} | undefined
```

#### Response

```js
{
  accounts: string[]
}
```