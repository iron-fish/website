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
  chain     Manage the blockchain
  config    Show and edit the node configuration
  faucet    Get coins to start using Iron Fish
  miners    Manage an Iron Fish miner
  peers     Manage the peers connected to this node

COMMANDS
  help    display help for ironfish
  logs    Tail server logs
  start   Start the node
  status  Show the status of the node
  stop    Stop the node from running
        `}
  </span>,
];
