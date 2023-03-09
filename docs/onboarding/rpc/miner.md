---
id: miner
title: RPC Miner commands
sidebar_label: Miner
description: RPC Miner | Iron Fish Documentation
hide_table_of_contents: false
---

import JsDisplay from '../../../src/theme/components/Terminal/JsDisplay'

## miner/blockTemplateStream

Streams block templates from the chain for mining blocks

#### Request

<JsDisplay js={`undefined
`} />

#### Response

<JsDisplay js={`{
  header: {
    sequence: number
    previousBlockHash: string
    noteCommitment: string
    transactionCommitment: string
    target: string
    randomness: string
    timestamp: number
    graffiti: string
  }
  transactions: string[]
  previousBlockInfo?: {
    target: string
    timestamp: number
  }
}
`} />

## miner/submitBlock

Submit block templates to the mining manager

#### Request

<JsDisplay js={`{
  header: {
    sequence: number
    previousBlockHash: string
    noteCommitment: string
    transactionCommitment: string
    target: string
    randomness: string
    timestamp: number
    graffiti: string
  }
  transactions: string[]
  previousBlockInfo?: {
    target: string
    timestamp: number
  }
}
`} />

#### Response

<JsDisplay js={`{
  added: boolean
  reason:
    | 'UNKNOWN_REQUEST'
    | 'CHAIN_CHANGED'
    | 'INVALID_BLOCK'
    | 'ADD_FAILED'
    | 'FORK'
    | 'SUCCESS'
}
`} />

