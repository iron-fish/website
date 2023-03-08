---
id: events
title: RPC Events commands
sidebar_label: RPC Events commands
description: RPC Events | Iron Fish Documentation
hide_table_of_contents: false
---

## Events

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
