---
id: iron-fish-node-health
title: Health of your node
sidebar_label: Health of your node
description: Node health | Iron Fish Onboarding
hide_table_of_contents: false
---

import Terminal from '../../src/theme/components/Terminal/Terminal'
import Status from '../../src/theme/components/Terminal/Status'
import Chain from '../../src/theme/components/Terminal/Chain'
import PeersList from '../../src/theme/components/Terminal/PeersList'

## Status

Run the status command to display the status of your node.

```sh
ironfish status -f
```

#### Node
The node can have the following status:

| Status       | Description                                                                                                  |
| :-----------:| :-----------------------------------------------------------------------------------------------------------:|
| STARTED      | Node is running                                                                                              |
| STOPPED      | Node is not running. Start it with `ironfish start`                                                          |
| ERROR        | An error occured while running the node. Run `ironfish logs -v` to see the latest error messages             |


#### Blocks Syncer
The Blocks syncer can have the following status:

| Status          | Description                                                                                               |
| :--------------:| :--------------------------------------------------------------------------------------------------------:|
| IDLE            | The syncer is paused -  your chain is synced with the network                                             |
| REQUESTING      | The syncer is requesting blocks from the network                                                          |
| SYNCING         | The syncer is currently adding blocks to your local chain                                                 |
| STOPPED         | The syncer is stopped - either because you are not connected to the network, or your node is not running  |

#### Blockchain
Blockchain head indicates the head of your chain on your local node. It changes every 60 seconds.

#### P2P Network
P2P Network can have the following status:

| Status          | Description                                                                                               |
| :--------------:| :------------------------------------------------------------------------------------------------------  :|
| CONNECTED       | Your node is connected to the network. Stats about your network traffic is displayed on the right side    |
| WAITING         | Your node is attempting to connect to the Iron Fish network                                               |

<Terminal command={Status} />

## Chain information

Run the following command to display your chain status. Heaviest head is the latest block synced to the genesis block in your chain. Latest head is the latest block received from a peer in the Iron Fish network.
```sh
ironfish chain:show
```

<Terminal command={Chain} />

## Peers information

To see how is your node connected to the network you can run the following command
```sh
ironfish peers -f
```

A peer can have the following status:

| Status          | Description                                                            |
| :--------------:| :---------------------------------------------------------------------:|
| CONNECTING      | Your node is attempting to connect to a new peer                       |
| CONNECTED       | Your node is connected to the peer                                     |
| CONNECTED(!)    | Your node is connected to the peer. But an error occurred previously   |
| DISCONNECTED(!) | Your node is disconnected from the peer                                |

<Terminal command={PeersList} />
<br />

You can get more information about connections status and errors by running the following command:
```sh
ironfish peers -fe
```
