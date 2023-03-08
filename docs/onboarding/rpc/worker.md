---
id: worker
title: RPC Worker commands
sidebar_label: Worker
description: RPC Worker | Iron Fish Documentation
hide_table_of_contents: false
---

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
