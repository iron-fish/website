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
| account              | Default user account to use with the CLI |
| bootstrapNodes       | List of bootstrap nodes addresses |
| databaseName         | Default name for the dabase |
| editor               | Path for the default code editor for the config file |
| enableListenP2P      | Enable the web socket listen server |
| enableRpc            | Enable the RPC server |
| enableRpcIpc         | Enable the RPC to be served on IPC |
| enableRpcTcp         | Enable the RPC to be served on TCP |
| enableTelemetry      | Enable anonymous telemetry collection |
| enableMetrics        | Enable internal metrics collection (required for Status command) |
| getFundsApi          | HTTP URL for the Faucet API |
| ipcPath              | Path for the IPC directory |
| logLevel             | Log level of the node (`*:warn,tag:info`) |
| logPrefix            | String to be prefixed to all logs. Accepts the following replacements: [%time%] [%level%] [%tag%] |
| nodeName             | Name of the node to be broadcaster to peers (optional) |
| peerPort             | Port of the node |
| rpcTcpHost           | IP of the bootstrap node |
| rpcTcpPort           | Port of the bootstrap node |
| maxPeers             | The maximum number of peers the node can be connected to at a time |
| targetPeers          | The ideal number of peers we'd like to be connected to. The node will attempt to establish new connections when below this number. |
| telemetryApi         | HTTP URL for the Telemetry API |