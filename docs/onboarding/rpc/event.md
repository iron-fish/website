---
id: event
title: RPC Event commands
sidebar_label: Event
description: RPC Event | Iron Fish Documentation
hide_table_of_contents: false
---

import JsDisplay from '../../../src/theme/components/Terminal/JsDisplay'

## event/onGossip

Streams block headers on gossip events

#### Request

<JsDisplay js={`undefined
`} />

#### Response

<JsDisplay js={`{
  blockHeader: {
    hash: string
    sequence: number
    previousBlockHash: string
    timestamp: number
    difficulty: string
    graffiti: string
  }
}
`} />
