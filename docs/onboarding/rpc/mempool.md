---
id: mempool
title: RPC Mempool commands
sidebar_label: Mempool
description: RPC Mempool | Iron Fish Documentation
hide_table_of_contents: false
---

## mempool/getStatus

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

## mempool/getTransactions

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
