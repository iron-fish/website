---
id: miner-iron-fish
title: Mine Iron Fish
sidebar_label: Mine Iron Fish
description: Iron Fish mining | Iron Fish Onboarding
hide_table_of_contents: false
---

Miners are essential to the health of the Iron Fish network. Without them, blocks won't be generated and transactions won't be transmitted. Iron Fish is still at the testnet stage.

We are offering incentive for users to mine blocks on the testnet [(more details)](mailto:contact@ironfish.network).

## Requirements
Install Iron Fish by following the instructions [here](onboarding/installation.md).

## Quick start
Start your node by running the following command:
```sh
ironfish start
```

Open a new terminal window and run:
```sh
ironfish miners:start
```

## Changing the default account
If you want to use a different account to store the miners fee, you can create a new account by runnning the following command:
```sh
ironfish accounts:create newAccount
```

And then set it up as default:
```sh
ironfish accounts:use newAccount
```

## Join a mining pool
$IRON is not available on a mining pool at the moment. [Contact us](mailto:contact@ironfish.network) if you would like to create a pool for Iron Fish.

## Troubleshooting

#### My miner has been running for a long time - but I haven't mined a block yet
- Difficulty (and therefore time to mine a block) can change depending on how fast blocks are mined on the Iron Fish network.
- Make sure you are correctly connected to the Iron Fish network (you should see `Connected to the Iron Fish network` in your node logs).

#### Not connected to a node - waiting 5s before retrying
Make sure that your node is currently running. If you are using a different `datadir` argument to start your node, make sure to use it as well when starting the miner.

E.g.
```sh
ironfish miners:start --datadir=~./ironfish2/
```

#### The trees aren't the same size as the chain
- Make sure your node is synced with the network before starting the miner. Run `ironfish status` to check if your node is still syncing.
