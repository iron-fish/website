import React, { useEffect, useState } from "react";

export default [
  <span data-ty="input">ironfish</span>,
  <span data-ty>
    {`
CLI for running and interacting with an Iron Fish node

VERSION
  ironfish/0.1.57 darwin-arm64 node-v18.12.1

USAGE
  $ ironfish [COMMAND]

TOPICS
  blocks      Show the block header of a requested hash or sequence
  chain       Manage the blockchain
  config      Show and edit the node configuration
  migrations  List all the migration statuses
  miners      Manage an Iron Fish miner
  peers       Manage the peers connected to this node
  rpc         Show the status of the RPC layer
  wallet      List all the accounts on the node
  workers     Show the status of the worker pool

COMMANDS
  config      Print out the entire config
  faucet      Receive coins from the Iron Fish official Faucet
  fees        Get fee distribution for most recent blocks
  help        Display help for ironfish.
  logs        Tail server logs
  migrations  List all the migration statuses
  peers       List all connected peers
  repl        An interactive terminal to the node
  reset       Reset the node to its initial state
  start       Start the node
  status      Show the status of the node
  stop        Stop the node from running
  testnet     Set up your node to mine for the testnet
  wallet      List all the accounts on the node
        `}
  </span>,
];
