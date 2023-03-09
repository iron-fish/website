---
id: mempool
title: RPC Mempool commands
sidebar_label: Mempool
description: RPC Mempool | Iron Fish Documentation
hide_table_of_contents: false
---

import JsDisplay from '../../../src/theme/components/Terminal/JsDisplay'

## mempool/getStatus

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

## mempool/getTransactions

Streams transactions from the mempool

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
