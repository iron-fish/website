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
ironfish wallet --help
```

E.g. for a command:
```sh
ironfish wallet:send --help
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
Deletes your chain and wallet state. This will permanently delete your accounts, so back them up first if necessary.
```sh
ironfish reset
```

### Config


#### config
Prints out the content of your config file
```sh
ironfish config
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
config:set enableMetrics "true"
```

Note: the list of configuration options is available [here](configuration.md#list-of-configuration-options)


#### config:get
Displays the configuration value for your node

E.g.
```sh
config:get enableMetrics
```

### Miners
#### miners:start
Starts a miner and subscribes to new blocks for the node. The node has to be synced with the network for the miner to start mining.

```sh
ironfish miners:start  
```

Join a mining pool with your default account public address. 

```sh
ironfish miners:start -p <ip-address-of-pool>
```

Setting the number of CPU threads to utilize for mining <-t> and setting other than your default account address for block rewards <-a>.

```sh
ironfish miners:start -t <number-of-threads-to-use> -a <your-address-to-receive-rewards>
```


#### miners:pools:start
Starts a mining pool with the name set in the `poolName` configuration option.

```sh
ironfish miners:pools:start
```

Start a mining pool with disabled payouts.

```sh
ironfish miners:pools:start --no-payouts
```

### Networking
#### peers
Displays the list of peers connected to the node.

```sh
ironfish peers
```

Displays the list of peers with live update.

```sh
ironfish peers -f
```

#### peers:show
Displays info about a peer
```sh
ironfish peers:show [IDENTITY]
```

### Wallet / Accounts
#### wallet:create
Creating a new account with interactive mode
```sh
ironfish wallet:create
```

Creating a new account in command line
```sh
ironfish wallet:create MyNewAccount
```

#### wallet:address
Gets the current account's public key
```sh
ironfish wallet:address
```

Gets a specific account's public key
```sh
ironfish wallet:address MyNewAccount
```

#### wallet:balance
Gets the current account's balance
```sh
ironfish wallet:balance
```

#### wallet:balances
Gets the current account's balance for all assets
```sh
ironfish wallet:balances
```

Gets a specific account's public key
```sh
ironfish wallet:balance -a MyNewAccount
```

#### wallet:notes
Gets the current account's notes
```sh
ironfish wallet:notes
```

Gets a specific account's notes
```sh
ironfish wallet:notes -a MyNewAccount
```

#### wallet:transactions
Gets the current account's transactions
```sh
ironfish wallet:transactions
```

Gets a specific account's transactions
```sh
ironfish wallet:transactions -a MyNewAccount
```

Gets transactions from a block sequence
```sh
ironfish wallet:transactions -s 24032
```

#### wallet:send
Sending a new transaction with interactive mode
```sh
ironfish wallet:send
```

Creating a new transaction in command line
```sh
ironfish wallet:send -a 2 -t 997c5...c52ed
```

#### wallet:mint
Mint a new asset with interactive mode
```sh
ironfish wallet:mint
```

Mint a new asset in command line
```sh
ironfish wallet:mint -i 618c0...b29b4 -a 1000
```

#### wallet:burn
Burn an asset with interactive mode
```sh
ironfish wallet:burn
```

Burn an asset in command line
```sh
ironfish wallet:burn -i 618c0...b29b4 -a 1000
```

### Faucet
#### faucet
Connects to the Iron Fish faucet to get test funds
```sh
ironfish faucet
```

### Chain

#### chain:asset
Get the asset info by asset identifier

```sh
ironfish chain:asset <identifier-of-an-existing asset>
```

#### chain:export
Export a part of the chain database to JSON
```sh
ironfish chain:export [START] [STOP]
```
Optional arguments: [START] and [STOP] are either positive numbers that indicate the starting and stopping blocks or are negative to count backwards from the head of the chain.

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
ironfish chain:show [START] [STOP]
```
Optional arguments: [START] and [STOP] are either positive numbers that indicate the starting and stopping blocks or are negative to count backwards from the head of the chain.

#### chain:download
Downloads and imports a snapshot of the chain database
```sh
ironfish chain:download
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
