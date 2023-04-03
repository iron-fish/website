---
id: rpc
title: RPC commands
sidebar_label: RPC
description: RPC | Iron Fish Documentation
hide_table_of_contents: false
---

import JsDisplay from '../../../src/theme/components/Terminal/JsDisplay'
import GithubCodeLink from '../../../src/theme/components/Terminal/rpc/GithubCodeLink'

## <GithubCodeLink link="rpc/getStatus"/> rpc/getStatus

Gets (and optionally streams) the status of the RPC server

#### Request

<JsDisplay js={`{
  stream?: boolean
} | undefined
`} />

#### Response

<JsDisplay js={`{
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
`} />
