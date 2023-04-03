---
id: config
title: RPC Config commands
sidebar_label: Config
description: RPC Config | Iron Fish Documentation
hide_table_of_contents: false
---

import JsDisplay from '../../../src/theme/components/Terminal/JsDisplay'
import GithubCodeLink from '../../../src/theme/components/Terminal/rpc/GithubCodeLink'

## <GithubCodeLink link="config/getConfig"/>config/getConfig

Gets a subset of configuration values for a node. 

If the user flag is provided, a value will only be returned if the user set the configuration option.

#### Request

<JsDisplay js={`{ 
  user?: boolean
  name?: string 
} | undefined
`} />

#### Response

<JsDisplay js={`Partial<
  {
    blockGraffiti: string
    blocksPerMessage: number
    bootstrapNodes: string[]
    confirmations: number
    customNetwork: string
    databaseMigrate: boolean
    editor: string
    enableListenP2P: boolean
    enableLogFile: boolean
    enableMetrics: boolean
    enableRpc: boolean
    enableRpcIpc: boolean
    enableRpcTcp: boolean
    enableRpcTls: boolean
    enableSyncing: boolean
    enableTelemetry: boolean
    explorerBlocksUrl: string
    explorerTransactionsUrl: string
    feeEstimatorMaxBlockHistory: number
    feeEstimatorPercentileAverage: number
    feeEstimatorPercentileFast: number
    feeEstimatorPercentileSlow: number
    generateNewIdentity: boolean
    getFundsApi: string
    ipcPath: string
    jsonLogs: boolean
    logLevel: string
    logPeerMessages: boolean
    logPrefix: string
    maxPeers: number
    maxSyncedAgeBlocks: number
    memPoolMaxSizeBytes: number
    memPoolRecentlyEvictedCacheSize: number
    minPeers: number
    minerBatchSize: number
    miningForce: boolean
    networkDefinitionPath: string
    networkId: number
    nodeName: string
    nodeWorkers: number
    nodeWorkersMax: number
    p2pSimulateLatency: number
    peerPort: number
    poolAccountName: string
    poolBanning: boolean
    poolDifficulty: string
    poolDiscordWebhook: ''
    poolHost: string
    poolLarkWebhook: ''
    poolMaxConnectionsPerIp: number
    poolName: string
    poolPayoutPeriodDuration: number
    poolPort: number
    poolRecentShareCutoff: number
    poolStatusNotificationInterval: number
    rpcTcpHost: string
    rpcTcpPort: number
    targetPeers: number
    telemetryApi: string
    tlsCertPath: string
    tlsKeyPath: string
    transactionExpirationDelta: number
  }
>
`} />

## <GithubCodeLink link="config/setConfig"/> config/setConfig

Sets a configuration value for the node

#### Request

<JsDisplay js={`{ 
  name: string
  value: unknown 
}
`} />

#### Response

<JsDisplay js={`undefined
`} />

## <GithubCodeLink link="config/unsetConfig"/> config/unsetConfig

Unsets a configuration value for the node and falls back to the default.

#### Request

<JsDisplay js={`{ 
  name: string
}
`} />

#### Response

<JsDisplay js={`undefined
`} />

## <GithubCodeLink link="config/uploadConfig"/> config/uploadConfig

Uploads a set of configuration values for the node.
This resets any previously set config options to their default values.

#### Request

<JsDisplay js={`{
  config: Record<string, unknown>
}
`} />

#### Response

<JsDisplay js={`undefined
`} />

