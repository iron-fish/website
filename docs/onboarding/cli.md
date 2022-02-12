---
id: iron-fish-cli
title: CLI commands
sidebar_label: CLI commands
description: CLI commands | Iron Fish Onboarding
hide_table_of_contents: false
---

### Help
`ironfish help` displays all the commands and topics you can use with the Iron Fish CLI.
To get additional info about a specific command or a specific topic, type `ironfish [topic/command] help`.

E.g. for a topic:
```sh
ironfish accounts help
```

E.g. for a command:
```sh
ironfish ironfish accounts:pay help
```

### Node
#### start
Starts the full node
```sh
ironfish start
```

To start a full node with a different port and a different data directory
```sh
ironfish start --port=9034 --datadir=~/.ironfish2/
```

#### stop
Stops the full node
```sh
ironfish stop
```

#### status
Prints out:
- the status of your node (started / stopped)
- the syncing status of your node and syncing stats
- the networking status of your node (and networking stats)

```sh
ironfish status
```

To see live updates:
```sh
ironfish status -f
```

#### reset
Deletes your chain and wallet state, but preserves your accounts. It will import your accounts afterwards into a fresh node state.
```sh
ironfish reset
```

### Config
#### config:show
Prints out the content of your config file
```sh
ironfish config:show
```
#### config:edit
Opens the config file with your default code editor

```sh
ironfish config:edit
```

Note: you need to set the editor config or the default editor environment variable for this command to work.
E.g. for Vscode at the config level: `ironfish config:set editor "/Applications/Visual Studio Code.app/Contents/MacOS/Electron"`
E.g. for Vscode at the environment level: `export EDITOR="/Applications/Visual Studio Code.app/Contents/MacOS/Electron"`


#### config:set
Sets the config value for the key.

E.g.
```sh
config:set enableMiningDirector "true"
```

Note: the list of configuration options is available [here](configuration.md#list-of-configuration-options)


#### config:get
Displays the configuration value for your node

E.g.
```sh
config:get enableMiningDirector
```

### Miners
#### miners:start
Starts a miner and subscribe to new blocks for the node. The node has to be synced with the network for the miner to start mining.

```sh
ironfish miners:start
```

#### miners:mined
List mined block hashes
```sh
ironfish miners:mined [START] [STOP]
```

### Networking
#### peers:list
Displays the list of peers connected to the node.

```sh
ironfish peers:list
```

Displays the list of peers with live update.

```sh
ironfish peers:list -f
```

#### peers:show
Displays info about a peer
```sh
ironfish peers:show [IDENTITY]
```

### Accounts / Wallet
#### accounts:create
Creating a new account with interactive mode
```sh
ironfish accounts:create
```

Creating a new account in command line
```sh
ironfish accounts:create MyNewAccount
```

#### accounts:publickey
Gets the current account's public key
```sh
ironfish accounts:publickey
```

Gets a specific account's public key
```sh
ironfish accounts:publickey -a MyNewAccount
```

#### accounts:balance
Gets the current account's balance
```sh
ironfish accounts:balance
```

Gets a specific account's public key
```sh
ironfish accounts:balance -a MyNewAccount
```

#### accounts:pay
Creating a new transaction with interactive mode
```sh
ironfish accounts:pay
```

Creating a new transaction in command line
```sh
ironfish accounts:pay -a 2 -t 997c5...c52ed
```

### Faucet
#### faucet
Connects to the Iron Fish faucet to get test funds
```sh
ironfish faucet
```

### Chain
#### chain:export
Export a part of the chain database to JSON
```sh
ironfish chain:export [START] [STOP]
```

#### chain:forks
Try to detect forks that are being mined
```sh
ironfish chain:forks
```

#### chain:repair
Rebuild the main chain to fix corruption
```sh
ironfish chain:repair
```

#### chain:show
Shows the heaviest head and tail of the node's chain. Includes the last ten blocks in the chain.
```sh
ironfish chain:show
```

### Blocks
#### blocks:show
Show the block header of a requested hash
```sh
ironfish blocks:show [HASH]
```

### Workers
#### workers:status
Shows the status of the worker pool
```sh
ironfish workers:status
```
