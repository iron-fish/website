---
id: wallet
title: RPC Wallet commands
sidebar_label: Wallet
description: RPC Wallet | Iron Fish Documentation
hide_table_of_contents: false
---

import JsDisplay from '../../../src/theme/components/Terminal/JsDisplay'

## wallet/addTransaction

Takes in a posted transaction, adds it to the wallet and mempool, and optionally broadcasts it to the network. Returns the names of the wallet accounts involved in the transaction.

#### Request

<JsDisplay js={`{
  transaction: string
  broadcast?: boolean
}
`} />

#### Response

<JsDisplay js={`{
  accounts: string[]
}
`} />

## wallet/burnAsset

Creates a transaction burning a custom asset from a given account, posts the transaction, and submits it to the wallet, mempool, and network.

#### Request

<JsDisplay js={`{
  account: string
  assetId: string
  fee: string
  value: string
  expiration?: number
  expirationDelta?: number
  confirmations?: number
}
`} />

#### Response

<JsDisplay js={`{
  assetId: string
  hash: string
  name: string
  value: string
}
`} />

## wallet/create

Creates a new account in the wallet with the given name, optionally setting it as the default account.

#### Request

<JsDisplay js={`{
  name: string
  default?: boolean
}
`} />

#### Response

<JsDisplay js={`{
  name: string
  publicAddress: string
  isDefaultAccount: boolean
}
`} />

## wallet/createTransaction

Creates and returns a new transaction with the given parameters, but doesn't post it (as such, it's also not added to the wallet, mempool, or broadcast to the network). This allows for the transaction to be posted using spending keys stored on a different node.

#### Request

<JsDisplay js={`{
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
`} />

#### Response

<JsDisplay js={`{
  transaction: string
}
`} />

## wallet/exportAccount

Exports the keys to the default account, or the named account if specified. If `viewOnly` is true, the spending key will be null, but the spending key may also be null if exporting a view-only account.

#### Request

<JsDisplay js={`{
  account?: string;
  viewOnly?: boolean
}
`} />

#### Response

<JsDisplay js={`{
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
`} />

## wallet/getAccounts

Returns accounts in the wallet.

#### Request

<JsDisplay js={`{
  default?: boolean
  displayName?: boolean
} | undefined
`} />

#### Response

<JsDisplay js={`{
  accounts: string[]
}
`} />

## wallet/getAssets

Returns assets in the wallet.

#### Request

<JsDisplay js={`{
  account?: string
  confirmations?: number
}
`} />

#### Response

<JsDisplay js={`{
  createdTransactionHash: string
  id: string
  metadata: string
  name: string
  owner: string
  status: string
  supply: string | null
}
`} />

## wallet/getBalance

Returns the wallet balance for a given asset, or $IRON if none is specified.

#### Request

<JsDisplay js={`{
  account?: string
  assetId?: string
  confirmations?: number
}
`} />

#### Response

<JsDisplay js={`{
  account: string
  assetId: string
  confirmed: string
  unconfirmed: string
  unconfirmedCount: number
  pending: string
  pendingCount: number
  available: string
  confirmations: number
  blockHash: string | null
  sequence: number | null
}
`} />

## wallet/getBalances

Returns the wallet's $IRON balance, as well as balances of custom assets.

#### Request

<JsDisplay js={`{
  account?: string
  confirmations?: number
}
`} />

#### Response

<JsDisplay js={`{
  account: string
  balances: {
    assetId: string
    assetName: string
    assetOwner: string
    confirmed: string
    unconfirmed: string
    unconfirmedCount: number
    pending: string
    pendingCount: number
    available: string
    blockHash: string | null
    sequence: number | null
  }[]
}
`} />

## wallet/getDefaultAccount

Returns the wallet's default account.

#### Request

<JsDisplay js={`{ } | undefined
`} />

#### Response

<JsDisplay js={`{
  account: {
    name: string
  } | null
}
`} />

## wallet/getAccountNotesStream

Returns a stream of notes in an account.

#### Request

<JsDisplay js={`{
  account?: string
}
`} />

#### Response

<JsDisplay js={`{
  value: string
  assetId: string
  assetName: string
  memo: string
  sender: string
  transactionHash: string
  spent: boolean | undefined
}
`} />

## wallet/getPublicKey

Returns an account's public key.

#### Request

<JsDisplay js={`{
  account?: string
}
`} />

#### Response

<JsDisplay js={`{
  account: string
  publicKey: string
}
`} />

## wallet/getAccountsStatus

Returns the status of an account or of all accounts if no account is provided.

#### Request

<JsDisplay js={`{
  account?: string
}
`} />

#### Response

<JsDisplay js={`{
  accounts: Array<{
    name: string
    id: string
    headHash: string
    headInChain: boolean
    sequence: string | number
  }>
}
`} />

## wallet/getAccountTransaction

Returns a transaction for an account.

#### Request

<JsDisplay js={`{
  hash: string
  account?: string
  confirmations?: number
}
`} />

#### Response

<JsDisplay js={`{
  account: string
  transaction: {
    hash: string
    status: 'confirmed' | 'expired' | 'pending' | 'unconfirmed' | 'unknown'
    type: 'send' | 'receive' | 'miner'
    fee: string
    blockHash?: string
    blockSequence?: number
    notesCount: number
    spendsCount: number
    mintsCount: number
    burnsCount: number
    timestamp: number
    notes: RpcAccountDecryptedNote[]
    assetBalanceDeltas: Array<{ assetId: string; assetName: string; delta: string }>
  } | null
}
`} />

## wallet/getAccountTransactions

Returns transactions for an account. The default account is used if no account is provided.

#### Request

<JsDisplay js={`{
  account?: string
  hash?: string
  limit?: number
  offset?: number
  confirmations?: number
}
`} />

#### Response

<JsDisplay js={`{
  status: 'confirmed' | 'expired' | 'pending' | 'unconfirmed' | 'unknown'
  type: 'send' | 'receive' | 'miner'
  hash: string
  fee: string
  notesCount: number
  spendsCount: number
  mintsCount: number
  burnsCount: number
  expiration: number
  timestamp: number
  assetBalanceDeltas: Array<{ assetId: string; assetName: string; delta: string }>
}
`} />

## wallet/importAccount

Imports an account to the wallet.

#### Request

<JsDisplay js={`{
  account: {
    version: number
    name: string
    spendingKey: string | undefined
    viewKey: string
    incomingViewKey: string
    outgoingViewKey: string
    publicAddress: string
    createdAt: Date | undefined
  }
  rescan?: boolean
}
`} />

#### Response

<JsDisplay js={`{
  name: string
  isDefaultAccount: boolean
}
`} />

## wallet/mintAsset

Creates a transaction minting a custom asset from a given account, posts the transaction, and submits it to the wallet, mempool, and network.

#### Request

<JsDisplay js={`{
  account: string
  fee: string
  value: string
  assetId?: string
  expiration?: number
  expirationDelta?: number
  confirmations?: number
  metadata?: string
  name?: string
}
`} />

#### Response

<JsDisplay js={`{
  assetId: string
  hash: string
  name: string
  value: string
}
`} />

## wallet/postTransaction

Posts a transaction, submitting it to the wallet, mempool, and network if possible.

#### Request

<JsDisplay js={`{
  account?: string
  transaction: string
  broadcast?: boolean
}
`} />

#### Response

<JsDisplay js={`{
  transaction: string
}
`} />

## wallet/removeAccount

Removes an account from the wallet.

#### Request

<JsDisplay js={`{
  account: string
  confirm?: boolean
  wait?: boolean
}
`} />

#### Response

<JsDisplay js={`{
  needsConfirm?: boolean
}
`} />

## wallet/rescanAccount

Rescans an account in the wallet, updating the balance and available notes.

#### Request

<JsDisplay js={`{
  follow?: boolean
  from?: number
}
`} />

#### Response

<JsDisplay js={`{
  sequence: number
  startedAt: number
  endSequence: number
}
`} />

## wallet/sendTransaction

Creates a transaction, posts the transaction, and submits it to the wallet, mempool, and network.

#### Request

<JsDisplay js={`{
  account: string
  outputs: {
    publicAddress: string
    amount: string
    memo: string
    assetId?: string
  }[]
  fee: string
  expiration?: number | null
  expirationDelta?: number | null
  confirmations?: number | null
}
`} />

#### Response

<JsDisplay js={`{
  account: string
  hash: string
  transaction: string
}
`} />

## wallet/useAccount

Sets an account as the wallet's default account.

#### Request

<JsDisplay js={`{
  account: string
}
`} />

#### Response

<JsDisplay js={`undefined
`} />
