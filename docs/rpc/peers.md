---
id: peers
title: RPC Peers commands
sidebar_label: RPC Peers commands
description: RPC Peers | Iron Fish Onboarding
hide_table_of_contents: false
---

## Peers

### `peer/getBannedPeers`

Gets banned peers from the node's peer network

#### Request

```js
{
  stream?: boolean
}
```

#### Response

```js
{
  peers: Array<{
    identity: string
    reason: string
  }>
}
```

### `peer/getPeer`

Gets peer data from an identity

#### Request

```js
{
  identity: string
  stream?: boolean
}
```

#### Response

```js
{
  peer: {
    state: string
    identity: string | null
    version: number | null
    head: string | null
    sequence: number | null
    work: string | null
    agent: string | null
    name: string | null
    address: string | null
    port: number | null
    error: string | null
    connections: number
    connectionWebSocket:
      | { type: 'DISCONNECTED' }
      | { type: 'CONNECTING' }
      | { type: 'REQUEST_SIGNALING' }
      | { type: 'SIGNALING' }
      | { type: 'WAITING_FOR_IDENTITY' }
      | { type: 'CONNECTED'; identity: string }
    connectionWebSocketError: string
    connectionWebRTC:
      | { type: 'DISCONNECTED' }
      | { type: 'CONNECTING' }
      | { type: 'REQUEST_SIGNALING' }
      | { type: 'SIGNALING' }
      | { type: 'WAITING_FOR_IDENTITY' }
      | { type: 'CONNECTED'; identity: string }
    connectionWebRTCError: string
    networkId: number | null
    genesisBlockHash: string | null
    features: {
      syncing: null
    } | null
  } | null
}
```

### `peer/getPeerMessages`

Gets peer messages from an identity

#### Request

```js
{
  identity: string
  stream?: boolean
}
```

#### Response

```js
{
  brokeringPeerDisplayName?: string
  direction: 'send' | 'receive'
  message: {
    payload: string
    type: string
  }
  timestamp: number
  type: 'WebSocket' | 'WebRtc'
}
```

### `peer/getPeers`

Gets peer from the node's peer network

#### Request

```js
{
  stream?: boolean
} | undefined
```

#### Response

```js
{
  peers: Array<{
    state: string
    identity: string | null
    version: number | null
    head: string | null
    sequence: number | null
    work: string | null
    agent: string | null
    name: string | null
    address: string | null
    port: number | null
    error: string | null
    connections: number
    connectionWebSocket:
      | { type: 'DISCONNECTED' }
      | { type: 'CONNECTING' }
      | { type: 'REQUEST_SIGNALING' }
      | { type: 'SIGNALING' }
      | { type: 'WAITING_FOR_IDENTITY' }
      | { type: 'CONNECTED'; identity: string }
    connectionWebSocketError: string
    connectionWebRTC:
      | { type: 'DISCONNECTED' }
      | { type: 'CONNECTING' }
      | { type: 'REQUEST_SIGNALING' }
      | { type: 'SIGNALING' }
      | { type: 'WAITING_FOR_IDENTITY' }
      | { type: 'CONNECTED'; identity: string }
    connectionWebRTCError: string
    networkId: number | null
    genesisBlockHash: string | null
    features: {
      syncing: null
    } | null
  }>
}
```
