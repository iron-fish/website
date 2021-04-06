---
id: iron-fish-configuration
title: Node configuration
sidebar_label: Configuration
description: Configuration | Iron Fish Onboarding
hide_table_of_contents: false
---

## Data structure
By default, the database and configuration files for the Iron Fish node are created in the `~./ironfish` directory.

The file structure is composed of the following:
```
[Iron Fish Node]
├── accounts
...└── default
├── config.json
├── internal.json
└── databases
...└── default
```

Configuration files can be edited by the commands described [here](cli.md#config).
Accounts can be edited by the commands described [here](cli.md#account--wallet)

You can change the working directory by passing the flag `--datadir` when running a command. Doing so will require you to sync the node again with the network.

## List of configuration options

| Element              | Description |
| :--------            | :-------------------------------------------------------------------------------------: |
| accountName          | Default account to use with the CLI |
| blockGraffiti        | When mining, value to set on the `graffiti` field of new blocks. Truncated to 32 bytes |
| bootstrapNodes       | List of addresses to connect to when launching the node |
| databaseName         | Default name for the database |
| editor               | Path for the default code editor for the config file |
| enableListenP2P      | Enable the WebSocket listen server |
| enableRpc            | Enable the RPC server |
| enableRpcIpc         | Enable the RPC to be served on IPC |
| enableRpcTcp         | Enable the RPC to be served on TCP |
| enableTelemetry      | Enable anonymous telemetry collection |
| enableMetrics        | Enable internal metrics collection (required for Status command) |
| getFundsApi          | HTTP URL for the Faucet API |
| ipcPath              | Path for the RPC IPC directory |
| logLevel             | Log level of the node. Log levels can be applied to tagged logs like so: `*:warn,tag:info` |
| logPrefix            | String to be prefixed to all logs. If any of the following strings are included, will replace them with the corresponding value: `%time%`, `%level%`, `%tag%` |
| nodeName             | Name of the node to be broadcasted to peers (optional) |
| peerPort             | Port on which to host the WebSocket listen server |
| rpcTcpHost           | Address to connect to when establishing an RPC connection |
| rpcTcpPort           | Port to connect to when establishing an RPC connection |
| maxPeers             | The maximum number of peers the node can be connected to at a time |
| targetPeers          | The ideal number of peers we'd like to be connected to. The node will attempt to establish new connections when below this number. |
| telemetryApi         | HTTP URL for the Telemetry API |