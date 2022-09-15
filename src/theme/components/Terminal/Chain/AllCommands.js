import React, { useEffect, useState } from "react";

export default [
    <span data-ty="input">ironfish chain</span>,
    <span data-ty>
    {`
Manage the blockchain

USAGE
  $ ironfish chain:COMMAND

COMMANDS
  chain:export  Export part of the chain database to JSON
  chain:forks   Try to detect forks that are being mined
  chain:repair  Rebuild the main chain to fix corruption
  chain:show    Show the heaviest chain
        `}
  </span>,
];
