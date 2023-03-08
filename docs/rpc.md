---
id: rpc
title: RPC commands
sidebar_label: RPC commands
description: RPC | Iron Fish Documentation
hide_table_of_contents: false
---

## Chain

### `chain/estimateFeeRate`

Estimates fee given an optional priority

#### Request

```js
{
  priority: 'slow' | 'medium' | 'large'
} | undefined
```

#### Response

```js
{
  rate: string
}
```

### `chain/estimateFeeRates`

Estimates fee rates for all priorities

#### Request

`undefined`

#### Response

```js
{
  slow: string
  average: string
  fast: string
}
```

### `chain/exportChainStream`

Exports the chain as a stream with an optional sequence range

#### Request

```js
{
  start?: number | null
  stop?: number | null
} | undefined
```

#### Response

```js
{
  start: number
  stop: number
  block?: {
    hash: string
    seq: number
    prev: string
    main: boolean
    graffiti: string
    timestamp: number
    work: string
    difficulty: string
    head: boolean
    latest: boolean
  }
}
```

### `chain/followChainStream`

Follows the chain from a given sequence and streams blocks from chain connects and disconnects

#### Request

```js
{
  head?: string | null
} | undefined
```

#### Response

```js
{
  type: 'connected' | 'disconnected' | 'fork'
  head: {
    sequence: number
  }
  block: {
    hash: string
    sequence: number
    previous: string
    graffiti: string
    difficulty: string
    size: number
    timestamp: number
    work: string
    main: boolean
    transactions: Array<{
      hash: string
      size: number
      fee: number
      notes: Array<{ commitment: string }>
      spends: Array<{ nullifier: string }>
      mints: Array<{
        id: string
        metadata: string
        name: string
        owner: string
        value: string
      }>
      burns: Array<{
        id: string
        value: string
      }>
    }>
  }
}
```

### `chain/getAsset`

Gets an asset from the blockchain from an identifier

#### Request

```js
{
  id: string
}
```

#### Response

```js
{
  createdTransactionHash: string
  id: string
  metadata: string
  name: string
  owner: string
  supply: string
}
```

### `chain/getBlock`

Gets a block from the chain from a hash or sequence

#### Request

```js
{
  search?: string
  hash?: string
  sequence?: number
  confirmations?: number
}
```

#### Response

```js
{
  block: {
    graffiti: string
    difficulty: string
    hash: string
    previousBlockHash: string
    sequence: number
    timestamp: number
    transactions: Array<{
      fee: string
      hash: string
      signature: string
      notes: number
      spends: number
    }>
  }
  metadata: {
    main: boolean
    confirmed: boolean
  }
}
```

### `chain/getChainInfo`

Gets information about the node's chain

#### Request

```js
undefined
```

#### Response

```js
{
  currentBlockIdentifier: {
    index: string
    hash: string
  }
  genesisBlockIdentifier: {
    index: string
    hash: string
  }
  oldestBlockIdentifier: {
    index: string
    hash: string
  }
  currentBlockTimestamp: number
}
```

### `chain/getConsensusParameters`

Gets consensus parameters from the chain

#### Request

```js
undefined
```

#### Response

```js
{
  allowedBlockFuturesSeconds: number
  genesisSupplyInIron: number
  targetBlockTimeInSeconds: number
  targetBucketTimeInSeconds: number
  maxBlockSizeBytes: number
}
```

### `chain/getDifficulty`

Gets block difficulty from a given sequence or the head

#### Request

```js
{
  sequence?: number | null
} | undefined
```

#### Response

```js
{
  sequence: number
  hash: string
  difficulty: string
}
```

### `chain/getNetworkHashPower`

Gets hash power from the chain from a sequence or block range

#### Request

```js
{
  blocks?: number | null
  sequence?: number | null
}
```

#### Response

```js
{
  hashesPerSecond: number
  blocks: number
  sequence: number
}
```

### `chain/getTransaction`

Gets a transaction from a block hash and transaction hash

#### Request

```js
{ 
  blockHash: string
  transactionHash: string 
}
```

#### Response

```js
{
  fee: string
  expiration: number
  notesCount: number
  spendsCount: number
  signature: string
  notesEncrypted: string[]
  mints: {
    assetId: string
    value: string
  }[]
  burns: {
    assetId: string
    value: string
  }[]
}
```

### `chain/getTransactionStream`

Streams transactions from a head sequence given an incoming view key

#### Request

```js
{ 
  incomingViewKey: string
  head?: string | null 
}
```

#### Response

```js
{
  type: 'connected' | 'disconnected' | 'fork'
  head: {
    sequence: number
  }
  block: {
    hash: string
    previousBlockHash: string
    sequence: number
    timestamp: number
  }
  transactions: {
    hash: string
    isMinersFee: boolean
    notes: {
      assetId: string
      assetName: string
      value: string
      memo: string
    }[]
    mints: {
      assetId: string
      assetName: string
      value: string
    }[]
    burns: {
      assetId: string
      assetName: string
      value: string
    }[]
  }[]
}
```

### `chain/showChain`

Renders the chain from an optional sequence range

#### Request

```js
{
  start?: number | null
  stop?: number | null
} | undefined
```

#### Response

```js
{
  content: string[]
}
```

## Config

### `config/getConfig`

Gets a subset of configuration values for a node

#### Request

```js
{ 
  user?: boolean
  name?: string 
} | undefined
```

#### Response

```js
Partial<
  {
    blockGraffiti: string
    blocksPerMessage: number
    bootstrapNodes: string[]
    confirmations: number
    customNetwork: string
    databaseMigrate: boolean
    editor: string
    enableListenP2P: boolean
    enableLogFile: boolean
    enableMetrics: boolean
    enableRpc: boolean
    enableRpcIpc: boolean
    enableRpcTcp: boolean
    enableRpcTls: boolean
    enableSyncing: boolean
    enableTelemetry: boolean
    explorerBlocksUrl: string
    explorerTransactionsUrl: string
    feeEstimatorMaxBlockHistory: number
    feeEstimatorPercentileAverage: number
    feeEstimatorPercentileFast: number
    feeEstimatorPercentileSlow: number
    generateNewIdentity: boolean
    getFundsApi: string
    ipcPath: string
    jsonLogs: boolean
    logLevel: string
    logPeerMessages: boolean
    logPrefix: string
    maxPeers: number
    maxSyncedAgeBlocks: number
    memPoolMaxSizeBytes: number
    memPoolRecentlyEvictedCacheSize: number
    minPeers: number
    minerBatchSize: number
    miningForce: boolean
    networkDefinitionPath: string
    networkId: number
    nodeName: string
    nodeWorkers: number
    nodeWorkersMax: number
    p2pSimulateLatency: number
    peerPort: number
    poolAccountName: string
    poolBanning: boolean
    poolDifficulty: string
    poolDiscordWebhook: ''
    poolHost: string
    poolLarkWebhook: ''
    poolMaxConnectionsPerIp: number
    poolName: string
    poolPayoutPeriodDuration: number
    poolPort: number
    poolRecentShareCutoff: number
    poolStatusNotificationInterval: number
    rpcTcpHost: string
    rpcTcpPort: number
    targetPeers: number
    telemetryApi: string
    tlsCertPath: string
    tlsKeyPath: string
    transactionExpirationDelta: number
  }
>
```

### `config/setConfig`

Sets a configuration value for the node

#### Request

```js
{ 
  name: string
  value: unknown 
}
```

#### Response

```js
undefined
```

### `config/unsetConfig`

Unsets a configuration value for the node

#### Request

```js
{ 
  name: string
}
```

#### Response

```js
undefined
```

### `config/uploadConfig`

Uploads a set of configuration values for the node

#### Request

```js
{
  config: Record<string, unknown>
}
```

#### Response

```js
undefined
```

## Events

### `event/onGossip`

Streams block headers on gossip events

#### Request

```js
undefined
```

#### Response

```js
{
  blockHeader: {
    hash: string
    sequence: number
    previousBlockHash: string
    timestamp: number
    difficulty: string
    graffiti: string
  }
}
```

## Faucet

### `faucet/getFunds`

Submits a request to get funds from the faucet for an account

#### Request

```js
{
  account?: string
  email?: string 
}
```

#### Response

```js
{
  id: string
}
```

## Mempool

### `mempool/getStatus`

Gets (and optionally streams) the status of the mempool

#### Request

```js
{
  stream?: boolean
} | undefined
```

#### Response

```js
{
  size: number
  sizeBytes: number
  maxSizeBytes: number
  evictions: number
  headSequence: number
  recentlyEvictedCache: {
    size: number
    maxSize: number
  }
}
```

### `mempool/getTransactions`

Streams transactions from the mempool

#### Request

```js
{
  limit?: number
  feeRate?: MinMax
  fee?: MinMax
  expiration?: MinMax
  expiresIn?: MinMax
  position?: MinMax
}
```

#### Response

```js
{
  serializedTransaction: string
  position: number
  expiresIn: number
}
```

## Mining

### `miner/blockTemplateStream`

Streams block templates from the chain for mining blocks

#### Request

```js
undefined
```

#### Response

```js
{
  header: {
    sequence: number
    previousBlockHash: string
    noteCommitment: string
    transactionCommitment: string
    target: string
    randomness: string
    timestamp: number
    graffiti: string
  }
  transactions: string[]
  previousBlockInfo?: {
    target: string
    timestamp: number
  }
}
```

### `miner/submitBlock`

Submit block templates to the mining manager

#### Request

```js
{
  header: {
    sequence: number
    previousBlockHash: string
    noteCommitment: string
    transactionCommitment: string
    target: string
    randomness: string
    timestamp: number
    graffiti: string
  }
  transactions: string[]
  previousBlockInfo?: {
    target: string
    timestamp: number
  }
}
```

#### Response

```js
{
  added: boolean
  reason:
    | 'UNKNOWN_REQUEST'
    | 'CHAIN_CHANGED'
    | 'INVALID_BLOCK'
    | 'ADD_FAILED'
    | 'FORK'
    | 'SUCCESS'
}
```

## Node

### `node/getLogStream`

Gets a log stream from the node

#### Request

```js
undefined
```

#### Response

```js
{
  level: string
  type: string
  tag: string
  args: string
  date: string
}
```

### `node/getStatus`

Gets (and optionally streams) the node's status

#### Request

```js
{
  stream?: boolean
} | undefined
```

#### Response

```js
{
  node: {
    status: 'started' | 'stopped' | 'error'
    version: string
    git: string
    nodeName: string
  }
  cpu: {
    cores: number
    percentRollingAvg: number
    percentCurrent: number
  }
  memory: {
    heapMax: number
    heapTotal: number
    heapUsed: number
    rss: number
    memFree: number
    memTotal: number
  }
  miningDirector: {
    status: 'started'
    miners: number
    blocks: number
    blockGraffiti: string
    newBlockTemplateSpeed: number
    newBlockTransactionsSpeed: number
  }
  memPool: {
    size: number
    sizeBytes: number
    maxSizeBytes: number
    evictions: number
    recentlyEvictedCache: {
      size: number
      maxSize: number
    }
  }
  blockchain: {
    synced: boolean
    head: {
      hash: string
      sequence: number
    }
    headTimestamp: number
    newBlockSpeed: number
  }
  blockSyncer: {
    status: 'stopped' | 'idle' | 'stopping' | 'syncing'
    syncing?: {
      blockSpeed: number
      speed: number
      downloadSpeed: number
      progress: number
    }
  }
  peerNetwork: {
    peers: number
    isReady: boolean
    inboundTraffic: number
    outboundTraffic: number
  }
  telemetry: {
    status: 'started' | 'stopped'
    pending: number
    submitted: number
  }
  workers: {
    started: boolean
    workers: number
    queued: number
    capacity: number
    executing: number
    change: number
    speed: number
  }
  accounts: {
    scanning?: {
      sequence: number
      endSequence: number
      startedAt: number
    }
    head: {
      hash: string
      sequence: number
    }
  }
}
```

### `node/stopNode`

Shuts the node down

#### Request

```js
undefined
```

#### Response

```js
undefined
```

## Peers

### `peer/getBannedPeers`

Gets (and optionally streams) banned peers from the node's peer network

#### Request

```js
{
  stream?: boolean
}
```

#### Response

```js
{
  peers: Array<{
    identity: string
    reason: string
  }>
}
```

### `peer/getPeer`

Gets (and optionally streams) peer data from an identity

#### Request

```js
{
  identity: string
  stream?: boolean
}
```

#### Response

```js
{
  peer: {
    state: string
    identity: string | null
    version: number | null
    head: string | null
    sequence: number | null
    work: string | null
    agent: string | null
    name: string | null
    address: string | null
    port: number | null
    error: string | null
    connections: number
    connectionWebSocket:
      | { type: 'DISCONNECTED' }
      | { type: 'CONNECTING' }
      | { type: 'REQUEST_SIGNALING' }
      | { type: 'SIGNALING' }
      | { type: 'WAITING_FOR_IDENTITY' }
      | { type: 'CONNECTED'; identity: string }
    connectionWebSocketError: string
    connectionWebRTC:
      | { type: 'DISCONNECTED' }
      | { type: 'CONNECTING' }
      | { type: 'REQUEST_SIGNALING' }
      | { type: 'SIGNALING' }
      | { type: 'WAITING_FOR_IDENTITY' }
      | { type: 'CONNECTED'; identity: string }
    connectionWebRTCError: string
    networkId: number | null
    genesisBlockHash: string | null
    features: {
      syncing: null
    } | null
  } | null
}
```

### `peer/getPeerMessages`

Gets (and optionally streams) peer messages from an identity

#### Request

```js
{
  identity: string
  stream?: boolean
}
```

#### Response

```js
{
  brokeringPeerDisplayName?: string
  direction: 'send' | 'receive'
  message: {
    payload: string
    type: string
  }
  timestamp: number
  type: 'WebSocket' | 'WebRtc'
}
```

### `peer/getPeers`

Gets (and optionally streams) peers from the node's peer network

#### Request

```js
{
  stream?: boolean
} | undefined
```

#### Response

```js
{
  peers: Array<{
    state: string
    identity: string | null
    version: number | null
    head: string | null
    sequence: number | null
    work: string | null
    agent: string | null
    name: string | null
    address: string | null
    port: number | null
    error: string | null
    connections: number
    connectionWebSocket:
      | { type: 'DISCONNECTED' }
      | { type: 'CONNECTING' }
      | { type: 'REQUEST_SIGNALING' }
      | { type: 'SIGNALING' }
      | { type: 'WAITING_FOR_IDENTITY' }
      | { type: 'CONNECTED'; identity: string }
    connectionWebSocketError: string
    connectionWebRTC:
      | { type: 'DISCONNECTED' }
      | { type: 'CONNECTING' }
      | { type: 'REQUEST_SIGNALING' }
      | { type: 'SIGNALING' }
      | { type: 'WAITING_FOR_IDENTITY' }
      | { type: 'CONNECTED'; identity: string }
    connectionWebRTCError: string
    networkId: number | null
    genesisBlockHash: string | null
    features: {
      syncing: null
    } | null
  }>
}
```

## RPC

### `rpc/getStatus`

Gets status of the RPC server

#### Request

```js
{
  stream?: boolean
} | undefined
```

#### Response

```js
{
  started: boolean
  adapters: {
    name: string
    inbound: number
    outbound: number
    readableBytes: number
    writableBytes: number
    readBytes: number
    writtenBytes: number
    clients: number
    pending: string[]
  }[]
}
```

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

### `wallet/getAssets`

Returns assets in the wallet.

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

### `wallet/getBalance`

Returns the wallet balance for a given asset, or $IRON if none is specified.

#### Request

```js
{
  account?: string
  assetId?: string
  confirmations?: number
}
```

#### Response

```js
{
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
```

### `wallet/getBalances`

Returns the wallet's $IRON balance, as well as balances of custom assets.

#### Request

```js
{
  account?: string
  confirmations?: number
}
```

#### Response

```js
{
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
```

### `wallet/getDefaultAccount`

Returns the wallet's default account.

#### Request

```js
{ } | undefined
```

#### Response

```js
{
  account: {
    name: string
  } | null
}
```

### `wallet/getAccountNotesStream`

Returns a stream of notes in an account.

#### Request

```js
{
  account?: string
}
```

#### Response

```js
{
  value: string
  assetId: string
  assetName: string
  memo: string
  sender: string
  transactionHash: string
  spent: boolean | undefined
}
```

### `wallet/getPublicKey`

Returns an account's public key.

#### Request

```js
{
  account?: string
}
```

#### Response

```js
{
  account: string
  publicKey: string
}
```

### `wallet/getAccountsStatus`

Returns an account's public key.

#### Request

```js
{
  account?: string
}
```

#### Response

```js
{
  accounts: Array<{
    name: string
    id: string
    headHash: string
    headInChain: boolean
    sequence: string | number
  }>
}
```

### `wallet/getAccountTransaction`

Returns a transaction for an account.

#### Request

```js
{
  hash: string
  account?: string
  confirmations?: number
}
```

#### Response

```js
{
  account: string
  transaction: {
    hash: string
    status: string
    type: string
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
```

### `wallet/getAccountTransactions`

Returns transactions for an account.

#### Request

```js
{
  account?: string
  hash?: string
  limit?: number
  offset?: number
  confirmations?: number
}
```

#### Response

```js
{
  status: string
  type: string
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
```

### `wallet/importAccount`

Imports an account to the wallet.

#### Request

```js
{
  account: AccountImport
  rescan?: boolean
}
```

#### Response

```js
{
  name: string
  isDefaultAccount: boolean
}
```

### `wallet/mintAsset`

Creates a transaction minting a custom asset from a given account, posts the transaction, and submits it to the wallet, mempool, and network.

#### Request

```js
{
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

### `wallet/postTransaction`

Posts a transaction, submitting it to the wallet, mempool, and network if possible.

#### Request

```js
{
  account?: string
  transaction: string
  broadcast?: boolean
}
```

#### Response

```js
{
  transaction: string
}
```

### `wallet/removeAccount`

Removes an account from the wallet.

#### Request

```js
{
  account: string
  confirm?: boolean
  wait?: boolean
}
```

#### Response

```js
{
  needsConfirm?: boolean
}
```

### `wallet/rescanAccount`

Rescans an account in the wallet, updating the balance and available notes.

#### Request

```js
{
  follow?: boolean
  from?: number
  reset?: boolean
}
```

#### Response

```js
{
  sequence: number
  startedAt: number
  endSequence: number
}
```

### `wallet/sendTransaction`

Creates a transaction, posts the transaction, and submits it to the wallet, mempool, and network.

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
  fee: string
  expiration?: number | null
  expirationDelta?: number | null
  confirmations?: number | null
}
```

#### Response

```js
{
  account: string
  hash: string
  transaction: string
}
```

### `wallet/useAccount`

Sets an account as the wallet's default account.

#### Request

```js
{
  account: string
}
```

#### Response

```js
undefined
```

## Worker

### `worker/getStatus`

Displays info on long-running jobs queued with the node's workers (similar to a threadpool).

#### Request

```js
{
  stream?: boolean
} | undefined
```

#### Response

```js
{
  started: boolean
  workers: number
  queued: number
  capacity: number
  executing: number
  change: number
  speed: number
  jobs: Array<{
    name: string
    complete: number
    execute: number
    queue: number
    error: number
  }>
}
```
