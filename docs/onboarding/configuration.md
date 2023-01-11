---
id: iron-fish-configuration
title: Node configuration
sidebar_label: Configuration
description: Configuration | Iron Fish Onboarding
hide_table_of_contents: false
---

## Data structure
By default, the database and configuration files for the Iron Fish node are created in the `~/.ironfish` directory.

The file structure is composed of the following:
```
[Iron Fish Node]
├── config.json
├── internal.json
└── databases
...└── chain
...└── wallet
```

Configuration files can be edited by the commands described [here](cli.md#config).
Accounts can be edited by the commands described [here](cli.md#wallet--accounts)

You can change the working directory by passing the flag `--datadir` when running a command. Doing so will require you to sync the node again with the network.

## List of configuration options

| Element              | Description |
| :--------            | :-------------------------------------------------------------------------------------: |
| accountName          | Default account to use with the CLI |
| blockGraffiti        | When mining, value to set on the `graffiti` field of new blocks. Truncated to 32 bytes |
| bootstrapNodes       | List of addresses to connect to when launching the node |
| broadcastWorkers     | Broadcast worker nodes |
| databaseName         | Default name for the database |
| editor               | Path for the default code editor for the config file |
| enableListenP2P      | Enable the WebSocket listen server |
| enableLogFile        | Enable logging to a file |
| enableMetrics        | Enable internal metrics collection (required for status command) |
| enableMiningDirector | Enable distribution of mining jobs to miners |
| enableRpc            | Enable the RPC server |
| enableRpcIpc         | Enable the RPC to be served on IPC |
| enableRpcTcp         | Enable the RPC to be served on TCP |
| enableSyncing        | Enable syncing of the Iron Fish blockchain |
| enableTelemetry      | Enable anonymous telemetry collection |
| generateNewIdentity  | Generate a new identity at start-up |
| getFundsApi          | HTTP URL for the Faucet API |
| ipcPath              | Path for the RPC IPC directory |
| isWorker             | Set an Iron Fish node as a worker |
| logLevel             | Log level of the node. Log levels can be applied to tagged logs, e.g. `*:warn,tag:info` |
| logPrefix            | String to be prefixed to all logs. If any of the following strings are included, will replace them with the corresponding value: `%time%`, `%level%`, `%tag%` |
| maxPeers             | The maximum number of peers to which the node can be connected at a time |
| minPeers             | The minimum number of peers to which the node should be connected at any time |
| minerBatchSize       | The number of hashes processed by miner per worker request |
| miningForce          | Force mining |
| nodeName             | Name of the node to be broadcasted to peers (optional) |
| nodeWorkers          | The number of threads to use for workers. A value of -1 will use the maximum possible amount of threads.
| p2pSimulateLatency   | Randomly delay outbound messages up to this value |
| peerPort             | Port on which to host the WebSocket listen server |
| poolName             | Name to use for mining pool (optional) |
| rpcTcpHost           | Address to connect to when establishing an RPC connection |
| rpcTcpPort           | Port to connect to when establishing an RPC connection |
| targetPeers          | The ideal number of peers we'd like to be connected to. The node will attempt to establish new connections when below this number. |
| telemetryApi         | HTTP URL for the Telemetry API |
