---
id: chain 
title: RPC Chain commands
sidebar_label: Chain
description: RPC Chain | Iron Fish Documentation
hide_table_of_contents: false
---

import JsDisplay from '../../../src/theme/components/Terminal/JsDisplay'

## chain/estimateFeeRate

Estimates fee given an optional priority

#### Request

<JsDisplay js={`{
  priority: 'slow' | 'average' | 'fast'
} | undefined
`} />

#### Response

<JsDisplay js={`{
  rate: string
}
`} />

## chain/estimateFeeRates

Estimates fee rates for all priorities

#### Request

<JsDisplay js={`undefined`} />

#### Response

<JsDisplay js={`{
  slow: string
  average: string
  fast: string
}
`} />

## chain/exportChainStream

Exports the chain as a stream with an optional sequence range

#### Request

<JsDisplay js={`{
  start?: number | null
  stop?: number | null
} | undefined
`} />

#### Response

<JsDisplay js={`{
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
`} />

## chain/followChainStream

Follows the chain from a given sequence and streams blocks from chain connects and disconnects

#### Request

<JsDisplay js={`{
  head?: string | null
} | undefined
`} />

#### Response

<JsDisplay js={`{
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
`} />

## chain/getAsset

Gets an asset from the blockchain from an identifier

#### Request

<JsDisplay js={`{
  id: string
}
`} />

#### Response

<JsDisplay js={`{
  createdTransactionHash: string
  id: string
  metadata: string
  name: string
  owner: string
  supply: string
}
`} />

## chain/getBlock

Gets a block from the chain from a hash or sequence

#### Request

<JsDisplay js={`{
  search?: string
  hash?: string
  sequence?: number
  confirmations?: number
}
`} />

#### Response

<JsDisplay js={`{
  block: {
    graffiti: string
    difficulty: string
    hash: string
    previousBlockHash: string
    sequence: number
    timestamp: number
    noteSize: number
    noteCommitment: string
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
`} />

import Terminal from '../../../src/theme/components/Terminal/Terminal'
import GetBlock from '../../../src/theme/components/Terminal/rpc/GetBlock'

```
curl -d '{"sequence": 1}' -X POST http://localhost:8021/chain/getBlock
```
<Terminal command={GetBlock} />

## chain/getChainInfo

Gets information about the node's chain

#### Request

<JsDisplay js={`undefined
`} />

#### Response

<JsDisplay js={`{
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
`} />

## chain/getConsensusParameters

Gets consensus parameters from the chain

#### Request

<JsDisplay js={`undefined
`} />

#### Response

<JsDisplay js={`{
  allowedBlockFuturesSeconds: number
  genesisSupplyInIron: number
  targetBlockTimeInSeconds: number
  targetBucketTimeInSeconds: number
  maxBlockSizeBytes: number
}
`} />

## chain/getDifficulty

Gets block difficulty from a given sequence or the head

#### Request

<JsDisplay js={`{
  sequence?: number | null
} | undefined
`} />

#### Response

<JsDisplay js={`{
  sequence: number
  hash: string
  difficulty: string
}
`} />

## chain/getNetworkHashPower

Gets hash power from the chain from a sequence or block range

#### Request

<JsDisplay js={`{
  blocks?: number | null
  sequence?: number | null
}
`} />

#### Response

<JsDisplay js={`{
  hashesPerSecond: number
  blocks: number
  sequence: number
}
`} />

## chain/getNetworkInfo

Get information about the node's network

#### Request

<JsDisplay js={`undefined
`} />

#### Response

<JsDisplay js={`{
  networkId: number
}
`} />

## chain/getTransaction

Gets a transaction from a block hash and transaction hash

#### Request

<JsDisplay js={`{ 
  blockHash: string
  transactionHash: string 
}
`} />

#### Response

<JsDisplay js={`{
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
`} />

## chain/getTransactionStream

Streams transactions from a head sequence given an incoming view key

#### Request

<JsDisplay js={`{ 
  incomingViewKey: string
  head?: string | null 
}
`} />

#### Response

<JsDisplay js={`{
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
`} />

## chain/showChain

Renders the chain from an optional sequence range

#### Request

<JsDisplay js={`{
  start?: number | null
  stop?: number | null
} | undefined
`} />

#### Response

<JsDisplay js={`{
  content: string[]
}
`} />


## chain/getNoteWitness 

Returns a witness (merkle path) to a specified note in the note merkle tree. This witness is necessary for creating a transaction that spends the note. This endpoint would primarily be used to construct transactions without using the Iron Fish wallet. The returned `treeSize` and `rootHash` values will always reference the note merkle tree state at the current HEAD of the chain. If the chain experiences a re-org and the referenced HEAD moves to a fork, this witness will no longer be usable in a transaction.

#### Request

<JsDisplay js={`{
  index: number
}`} />

#### Response

<JsDisplay js={`{
  treeSize: number
  rootHash: string
  authPath: {
    side: 'Left' | 'Right'
    hashOfSibling: string
  }[]
}
`} />
