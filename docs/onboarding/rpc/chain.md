---
id: chain 
title: RPC Chain commands
sidebar_label: Chain
description: RPC Chain | Iron Fish Documentation
hide_table_of_contents: false
---

## chain/estimateFeeRate

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

## chain/estimateFeeRates

Estimates fee rates for all priorities

#### Request

```undefined```

#### Response

```js
{
  slow: string
  average: string
  fast: string
}
```

## chain/exportChainStream

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

## chain/followChainStream

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

## chain/getAsset

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

## chain/getBlock

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

## chain/getChainInfo

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

## chain/getConsensusParameters

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

## chain/getDifficulty

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

## chain/getNetworkHashPower

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

## chain/getTransaction

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

## chain/getTransactionStream

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

## chain/showChain

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