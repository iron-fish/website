---
id: chain 
title: RPC Chain commands
sidebar_label: Chain
description: RPC Chain | Iron Fish Documentation
hide_table_of_contents: false
---

import JsDisplay from '../../../src/theme/components/Terminal/JsDisplay'
import GithubCodeLink from '../../../src/theme/components/Terminal/rpc/GithubCodeLink'


## <GithubCodeLink link="chain/broadcastTransaction" /> chain/broadcastTransaction

Broadcasts a transaction (in hex) to the network.

#### Request

<JsDisplay js={`{
  transaction: string
}`} />

#### Response

<JsDisplay js={`{
  hash: string
}`} />


## <GithubCodeLink link="chain/estimateFeeRate" /> chain/estimateFeeRate 

Estimates the fee rate given an optional priority. If no fee rate is provided, the `average` priority will be used.

Fee rates are estimated from the distribution of transaction fees over the last 10 blocks. The fee rate for each transaction is computed by dividing the transaction fee in $ORE by the size of the transaction in kB.

The slow, average, and fast rates each come from a percentile in the distribution:
- slow:    10th
- average: 20th
- fast:    30th

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


## <GithubCodeLink link="chain/estimateFeeRates" /> chain/estimateFeeRates

Estimates the fee rates for all priorities. 

See [here](#chainestimatefeerate) to see how fee rates are estimated.

#### Request

<JsDisplay js={`undefined`} />

#### Response

<JsDisplay js={`{
  slow: string
  average: string
  fast: string
}
`} />

## <GithubCodeLink link="chain/exportChain" /> chain/exportChainStream

Exports the chain as a stream of blocks. 

If the start and stop sequences are provided, only the blocks between the start and 
stop will be returned.

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

## <GithubCodeLink link="chain/followChain" /> chain/followChainStream

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
      notes: Array<{ 
        commitment: string 
      }>
      spends: Array<{ 
        nullifier: string 
      }>
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

## <GithubCodeLink link="chain/getAsset" /> chain/getAsset
Gets an asset from the blockchain from a given identifier

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

## <GithubCodeLink link="chain/getBlock" /> chain/getBlock

Gets a block from the chain from a given hash or sequence. One of hash or sequence must be provided. The returned `noteSize` is the size of notes merkle tree *after* the block has been added

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


## <GithubCodeLink link="chain/getChainInfo" /> chain/getChainInfo

Gets information about the node's chain

#### Request

<JsDisplay js={`undefined`} />

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

## <GithubCodeLink link="chain/getConsensusParameters" /> chain/getConsensusParameters

Gets consensus parameters from the chain

#### Request

<JsDisplay js={`undefined`} />

#### Response

<JsDisplay js={`{
  allowedBlockFuturesSeconds: number
  genesisSupplyInIron: number
  targetBlockTimeInSeconds: number
  targetBucketTimeInSeconds: number
  maxBlockSizeBytes: number
}
`} />

## <GithubCodeLink link="chain/getDifficulty" /> chain/getDifficulty

Gets block difficulty from a sequence. 

If no sequence is provided, the head will be used

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

## <GithubCodeLink link="chain/getNetworkHashPower" /> chain/getNetworkHashPower

Gets hash power from the chain from a sequence or block range. 

If no blocks are provided, the last 120 blocks will be used. If no sequence is provided, the head will be used.

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

Gets information about the node's network

#### Request

<JsDisplay js={`undefined
`} />

#### Response

<JsDisplay js={`{
  networkId: number
}
`} />

## <GithubCodeLink link="chain/getTransaction" /> chain/getTransaction

Gets a transaction from a block hash and transaction hash. The returned `noteSize` is the size of notes merkle tree *after* the transaction has been applied

#### Request

<JsDisplay js={`{ 
  transactionHash: string 
  blockHash?: string
}
`} />

#### Response

<JsDisplay js={`{
  fee: string
  expiration: number
  noteSize: number
  notesCount: number
  spendsCount: number
  signature: string
  notesEncrypted: string[]
  mints: Array<{
    assetId: string
    value: string
  }>
  burns: Array<{
    assetId: string
    value: string
  }>
}
`} />

## <GithubCodeLink link="chain/getTransactionStream" />chain/getTransactionStream

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
  transactions: Array<{
    hash: string
    isMinersFee: boolean
    notes: Array<{
      assetId: string
      assetName: string
      value: string
      memo: string
    }>
    mints: Array<{
      assetId: string
      assetName: string
      value: string
    }>
    burns: Array< {
      assetId: string
      assetName: string
      value: string
    }>
  }>
}
`} />

## <GithubCodeLink link="chain/showChain" /> chain/showChain

Renders the entire chain.

If stop and stop values are provided, only the blocks between the start and stop sequences will be shown.

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


## <GithubCodeLink link="chain/getNoteWitness" /> chain/getNoteWitness 

Gets a witness (merkle path) to a specified note in the note merkle tree. This witness is necessary for creating a transaction that spends the note. 

This endpoint would primarily be used to construct transactions without using the Iron Fish wallet. The returned `treeSize` and `rootHash` values will always reference the note merkle tree state at the current HEAD of the chain. If the chain experiences a re-org and the referenced HEAD moves to a fork, this witness will no longer be usable in a transaction.

#### Request

<JsDisplay js={`{
  index: number
}`} />

#### Response

<JsDisplay js={`{
  treeSize: number
  rootHash: string
  authPath: Array<{
    side: 'Left' | 'Right'
    hashOfSibling: string
  }>
}
`} />
