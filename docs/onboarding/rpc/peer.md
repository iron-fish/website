---
id: peer
title: RPC Peer commands
sidebar_label: Peer
description: RPC Peer | Iron Fish Documentation
hide_table_of_contents: false
---

import JsDisplay from '../../../src/theme/components/Terminal/JsDisplay'

## peer/getBannedPeers

Gets (and optionally streams) banned peers from the node's peer network

#### Request

<JsDisplay js={`{
  stream?: boolean
}
`} />

#### Response

<JsDisplay js={`{
  peers: Array<{
    identity: string
    reason: string
  }>
}
`} />

## peer/getPeer

Gets (and optionally streams) peer data from an identity

#### Request

<JsDisplay js={`{
  identity: string
  stream?: boolean
}
`} />

#### Response

<JsDisplay js={`{
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
`} />

## peer/getPeerMessages

Gets (and optionally streams) peer messages from an identity

#### Request

<JsDisplay js={`{
  identity: string
  stream?: boolean
}
`} />

#### Response

<JsDisplay js={`{
  brokeringPeerDisplayName?: string
  direction: 'send' | 'receive'
  message: {
    payload: string
    type: string
  }
  timestamp: number
  type: 'WebSocket' | 'WebRtc'
}
`} />

## peer/getPeers

Gets (and optionally streams) peers from the node's peer network

#### Request

<JsDisplay js={`{
  stream?: boolean
} | undefined
`} />

#### Response

<JsDisplay js={`{
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
`} />

