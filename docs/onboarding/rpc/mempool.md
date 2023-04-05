---
id: mempool
title: RPC Mempool commands
sidebar_label: Mempool
description: RPC Mempool | Iron Fish Documentation
hide_table_of_contents: false
---

import JsDisplay from '../../../src/theme/components/Terminal/JsDisplay'
import GithubCodeLink from '../../../src/theme/components/Terminal/rpc/GithubCodeLink'

## <GithubCodeLink link="mempool/getStatus" /> mempool/getStatus

Gets (and optionally streams) the status of the mempool

#### Request

<JsDisplay js={`{
  stream?: boolean
} | undefined
`} />

#### Response

<JsDisplay js={`{
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
`} />

## <GithubCodeLink link="mempool/getTransactions" /> mempool/getTransactions

Streams transactions from the mempool. Transactions are streamed in case there are a large number of transactions in the mempool.

The `MinMax` type specifies the the minimum and maximum range of the input parameter to filter the returned transactions. 
For example, `feeRate={min: 30; max:60}` specifies that only transactions with `30 <= txn.feeRate <= 60` are returned.
#### Request

<JsDisplay js={`{
  limit?: number
  feeRate?: MinMax
  fee?: MinMax
  expiration?: MinMax
  expiresIn?: MinMax
  position?: MinMax
}
`} />

#### Response

<JsDisplay js={`{
  serializedTransaction: string
  position: number
  expiresIn: number
}
`} />
