---
id: wallet
title: RPC Wallet commands
sidebar_label: Wallet
description: RPC Wallet | Iron Fish Documentation
hide_table_of_contents: false
---

import JsDisplay from '../../../src/theme/components/Terminal/JsDisplay'
import GithubCodeLink from '../../../src/theme/components/Terminal/rpc/GithubCodeLink'

## <GithubCodeLink link="wallet/addTransaction"/> wallet/addTransaction

Takes in a posted transaction, adds it to the wallet and mempool, and optionally broadcasts it to the network. 

Returns the names of the wallet accounts involved in the transaction.

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

## <GithubCodeLink link="wallet/burnAsset"/> wallet/burnAsset

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

##  <GithubCodeLink link="wallet/create"/> wallet/create

Creates a new account in the wallet with the given name and optionally setting it as the default account.

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

##  <GithubCodeLink link="wallet/createTransaction"/> wallet/createTransaction

Creates a new transaction with the given parameters, but does not post it (as such, it is also not added to the wallet, mempool, or broadcast to the network). This allows for the transaction to be posted using spending keys stored on a different node.

The serialized new transaction is returned.

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

## <GithubCodeLink link="wallet/exportAccount"/> wallet/exportAccount

Exports the keys to the default account, or the named account if specified. 

If `viewOnly = true`, the returned spending key will be null, but the spending key may also be null if exporting a view-only account.

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

## <GithubCodeLink link="wallet/getAccounts"/> wallet/getAccounts

Gets the names of the accounts in the wallet.

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

## <GithubCodeLink link="wallet/getAssets"/> wallet/getAssets

Streams all the assets in the wallet of the given account. If not specified, the assets of default account will be returned.

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

## <GithubCodeLink link="wallet/getBalance"/> wallet/getBalance

Gets the wallet balance for the given account and asset. If the account is not specified,
the default account will be used. If the asset is not specified, `$IRON` will be used.

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

## <GithubCodeLink link="wallet/getBalances"/> wallet/getBalances

Gets the wallet's `$IRON` balance, as well as balances of custom assets of the given account. If the account is not specified, the default account will be used.

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

## <GithubCodeLink link="wallet/getDefaultAccount"/> wallet/getDefaultAccount

Gets the default account of the wallet.

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

## <GithubCodeLink link="wallet/getNotes"/> wallet/getAccountNotesStream

Streams the notes in the given account. If the account is not specified, the default account will be used.

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

## <GithubCodeLink link="wallet/getPublicKey"/> wallet/getPublicKey

Gets the public key of the given account. If the account is not specified, the default account will be used.

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

## <GithubCodeLink link="wallet/getStatus"/> wallet/getAccountStatus

Gets the status of an account. If not specified, the status of all accounts are returned.

#### Request

<JsDisplay js={`{
  account?: string
}
`} />

#### Response

<JsDisplay js={`{
  accounts: {
    name: string
    id: string
    headHash: string
    headInChain: boolean
    sequence: string | number
  }[]
}
`} />

## <GithubCodeLink link="wallet/getTransaction"/> wallet/getAccountTransaction

Gets a transaction for an account. If the account is not specified, the default account is used.

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

## <GithubCodeLink link="wallet/getTransactions"/> wallet/getAccountTransactions

Gets transactions for the given account. If not specified, the default account is used.

#### Request

<JsDisplay js={`{
  account?: string
  hash?: string
  sequence?: number
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
  assetBalanceDeltas: { 
    assetId: string 
    assetName: string
    delta: string 
  }[]
}
`} />

## <GithubCodeLink link="wallet/importAccount"/> wallet/importAccount

Imports an account into the wallet.

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

## <GithubCodeLink link="wallet/mintAsset"/> wallet/mintAsset

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

## <GithubCodeLink link="wallet/postTransaction"/> wallet/postTransaction

Posts a transaction and submits it to the wallet, mempool, and network if possible.

Returns the serialized transaction.
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

## <GithubCodeLink link="wallet/removeAccount"/> wallet/removeAccount

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

## <GithubCodeLink link="wallet/rescanAccount"/> wallet/rescanAccount

Rescans an account in the wallet and updates the balance and available notes.

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

## <GithubCodeLink link="wallet/sendTransaction"/> wallet/sendTransaction

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

## <GithubCodeLink link="wallet/useAccount"/> wallet/useAccount

Sets an account as the default account of the wallet.

#### Request

<JsDisplay js={`{
  account: string
}
`} />

#### Response

<JsDisplay js={`undefined
`} />
