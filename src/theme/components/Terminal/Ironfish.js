import React, { useEffect, useState } from "react";

export default [
  <span data-ty="input">ironfish</span>,
  <span data-ty>
    {`
Command line Iron Fish node

VERSION
  ironfish-cli/0.0.0 darwin-x64 node-v12.18.4

USAGE
  $ ironfish [COMMAND]

TOPICS
  accounts  Create and delete accounts
  blocks    Show the block header of a requested hash
  chain     Manage the blockchain
  config    Show and edit the node configuration
  miners    Manage an Iron Fish miner
  peers     Manage the peers connected to this node
  rpc       Show the status of the RPC layer
  workers   Show the status of the worker pool

COMMANDS
  deposit     Deposit $IRON for testnet points
  depositAll  Deposit $IRON for testnet points
  faucet      Receive coins from the Iron Fish official Faucet
  help        display help for ironfish
  logs        Tail server logs
  reset       Reset the node to its initial state
  start       Start the node
  status      Show the status of the node
  stop        Stop the node from running
  testnet     Set up your node to mine for the testnet
        `}
  </span>,
];
