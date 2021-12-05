---
id: miner-iron-fish
title: Mine Iron Fish
sidebar_label: Mine Iron Fish
description: Iron Fish mining | Iron Fish Onboarding
hide_table_of_contents: false
---

Miners are essential to the health of the Iron Fish network. Without them, blocks won't be generated and transactions won't be transmitted. Iron Fish is still at the testnet stage.

In the future, we plan to offer incentives for users to mine blocks on the testnet. Join our [Discord](https://discord.gg/EkQkEcm8DH) to stay up-to-date with our upcoming announcements!

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

## Distributed mining

Iron fish supports distributed mining by utilizing RPC over TCP. In this mode one server node can serve multiple miners on the same network or across the internet, in the latter the one must pay attention to latency.

You can configure distributed mining by first starting node and defining RPC over TCP parameters and then pointing the miner towards the node we just started.

######Starting a node
Starting a node with RPC over TCP is a straightforward thing just run the start command with the following attributes.
```sh
ironfish start --rpc.tcp --rpc.tcp.host=0.0.0.0 --rpc.tcp.port=8020 --port 9033
```
Once the node is started it is now ready to accept miner connections over TCP, make sure that your node is not blocking 
listening ports defined above. If you are running distributed setup over internet you will also have to port-forward 
the desired port on your router.

######Starting a miner
Starting a miner and connecting it to the node is also a straightforward thing you just need to start your miner using 
the following attributes.
```sh
ironfish miners:start --rpc.tcp --rpc.tcp.host=node1-ironfish.local --rpc.tcp.port=8020
```
Assumption here is that your local node had defined hostname of `node1-ironfish` and that it is on a `local` domain, 
these two can be anything, you don't even have to have hostname nor the domain defined you can use static ip.

##Running a node as a service
Assumption here is that you wish to run your node 24/7 and have it automatically recover in a case of failure. The best 
way of achieving this is by running it as a service, different platforms require different approaches when it comes to 
defining system services.

######Linux systemd
When defining a systemd service you generally want to point to an external script and then from that script execute 
command that you wish to run, that way if you ever wish to change the behaviour of the command you are running you just 
touch that service script and do not touch the service definition, makes for an easier maintenance.

Create a new file inside `/etc/systemd/system/` name it `node1-ironfish.service` inside it put the following definition. 
This definition will tell the system what to execute when it's booted and it will keep it running or restart it when it fails.
```
[Unit]
Description=Iron Fish Node #1

[Service]
User=ubuntu (can be any user of your choice, please do not run as root)
WorkingDirectory=/home/ubuntu/services
ExecStart=/home/ubuntu/services/node1-ironfish.sh
SuccessExitStatus=143
TimeoutStopSec=60
Restart=on-failure
RestartSec=1

[Install]
WantedBy=multi-user.target
```
After you save this file you will run the command that will reload daemon definitions.
```sh
sudo systemctl daemon-reload
```
Then you will enable your service by running systemctl enable command.
```sh
sudo systemctl enable node1-ironfish
```

A couple of assumptions here:
1. You are running this as an `ubuntu` user which will definitely not be the case for everyone, you can run it as any user, just adapt the above definition to facilitate that
2. You are running the start script from that users home, you don't have to do this either you can put  your script wherever you want just make sure that the user you defined has access to it and that it can execute it
3. Timeout, restart and restart frequency are all customizable and you can set them according to your preference the above is just a suggestion

You can set service logging by running the command journalctl with the following parameters:
```sh
sudo journalctl -f -n 1000 -u node1-ironfish
```
Parameter `-n` represents a number of lines you wish to show. If y ou run this without the `-n` parameter and use just `-f` you will get live output

Start, restart and stop your new service by running one of the following commands:
```sh
sudo systemctl start node1-ironfish
```
```sh
sudo systemctl restart node1-ironfish
```
```sh
sudo systemctl stop node1-ironfish
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
