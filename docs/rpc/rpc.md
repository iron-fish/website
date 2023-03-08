---
id: rpc
title: RPC commands
sidebar_label: RPC commands
description: RPC | Iron Fish Onboarding
hide_table_of_contents: false
---

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
