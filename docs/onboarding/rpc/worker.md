---
id: worker
title: RPC Worker commands
sidebar_label: Worker
description: RPC Worker | Iron Fish Documentation
hide_table_of_contents: false
---

import JsDisplay from '../../../src/theme/components/Terminal/JsDisplay'
import GithubCodeLink from '../../../src/theme/components/Terminal/rpc/GithubCodeLink'

## <GithubCodeLink link="workers/getStatus" /> worker/getStatus

Gets (and optionally streams) the status of the long-running jobs queued by the node's workers. The workers operate similar to a threadpool.

#### Request

<JsDisplay js={`{
  stream?: boolean
} | undefined
`} />

#### Response

<JsDisplay js={`{
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
`} />
