---
id: mining
title: RPC Mining commands
sidebar_label: RPC Mining commands
description: RPC Mining | Iron Fish Onboarding
hide_table_of_contents: false
---

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
