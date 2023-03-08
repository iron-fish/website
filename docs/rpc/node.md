---
id: node
title: RPC Node commands
sidebar_label: RPC Node commands
description: RPC Node | Iron Fish Onboarding
hide_table_of_contents: false
---

## Node

### `node/getLogStream`

Gets a log stream from the node

#### Request

```js
undefined
```

#### Response

```js
{
  level: string
  type: string
  tag: string
  args: string
  date: string
}
```

### `node/getStatus`

Gets node status

#### Request

```js
{
  stream?: boolean
} | undefined
```

#### Response

```js
{
  node: {
    status: 'started' | 'stopped' | 'error'
    version: string
    git: string
    nodeName: string
  }
  cpu: {
    cores: number
    percentRollingAvg: number
    percentCurrent: number
  }
  memory: {
    heapMax: number
    heapTotal: number
    heapUsed: number
    rss: number
    memFree: number
    memTotal: number
  }
  miningDirector: {
    status: 'started'
    miners: number
    blocks: number
    blockGraffiti: string
    newBlockTemplateSpeed: number
    newBlockTransactionsSpeed: number
  }
  memPool: {
    size: number
    sizeBytes: number
    maxSizeBytes: number
    evictions: number
    recentlyEvictedCache: {
      size: number
      maxSize: number
    }
  }
  blockchain: {
    synced: boolean
    head: {
      hash: string
      sequence: number
    }
    headTimestamp: number
    newBlockSpeed: number
  }
  blockSyncer: {
    status: 'stopped' | 'idle' | 'stopping' | 'syncing'
    syncing?: {
      blockSpeed: number
      speed: number
      downloadSpeed: number
      progress: number
    }
  }
  peerNetwork: {
    peers: number
    isReady: boolean
    inboundTraffic: number
    outboundTraffic: number
  }
  telemetry: {
    status: 'started' | 'stopped'
    pending: number
    submitted: number
  }
  workers: {
    started: boolean
    workers: number
    queued: number
    capacity: number
    executing: number
    change: number
    speed: number
  }
  accounts: {
    scanning?: {
      sequence: number
      endSequence: number
      startedAt: number
    }
    head: {
      hash: string
      sequence: number
    }
  }
}
```

### `node/stopNode`

Shuts the node down

#### Request

```js
undefined
```

#### Response

```js
undefined
```