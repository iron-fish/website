---
id: miner-iron-fish
title: Mine Iron Fish
sidebar_label: Mine Iron Fish
description: Iron Fish mining | Iron Fish Onboarding
hide_table_of_contents: false
---

Miners are essential to the health of the Iron Fish network. Without them, blocks won't be generated and transactions won't be transmitted. Iron Fish is still at the testnet stage.

We are currently running an incentivised testnet where actively mining automatically earns you points for blocks that are mined and accepted to the main chain. To participate, visit our [testnet](https://testnet.ironfish.network/) website to learn more.

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
If you want to use a different account to store the miners fee, you can create a new account by running the following command:
```sh
ironfish accounts:create newAccount
```

And then set it up as default:
```sh
ironfish accounts:use newAccount
```

## Set block graffiti (optional)

Iron Fish blocks contain a 32-byte publicly-visible field called `graffiti` that can be set by the block's miner. To set this value to a UTF-8 encoded string on the blocks you mine, update the `blockGraffiti` config option:

```sh
ironfish config:set blockGraffiti "<your graffiti here>"
```

## Join a mining pool
$IRON is not available on a mining pool at the moment. [Join our Discord](https://discord.gg/EkQkEcm8DH) if you're interested in creating a pool for Iron Fish.

## Troubleshooting

#### My miner has been running for a long time - but I haven't mined a block yet
- Difficulty (and therefore time to mine a block) can change depending on how fast blocks are mined on the Iron Fish network.
- Make sure you are correctly connected to the Iron Fish network (you should see `Connected to the Iron Fish network` in your node logs).

#### Not connected to a node - waiting 5s before retrying
Make sure that your node is currently running. If you are using a different `datadir` argument to start your node, make sure to use it as well when starting the miner. For example:

```sh
ironfish miners:start --datadir=~./ironfish2/
```

#### The trees aren't the same size as the chain
- Make sure your node is synced with the network before starting the miner. Run `ironfish status` to check if your node is still syncing.
