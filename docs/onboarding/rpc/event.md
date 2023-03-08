---
id: event
title: RPC Event commands
sidebar_label: Event
description: RPC Event | Iron Fish Documentation
hide_table_of_contents: false
---

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
