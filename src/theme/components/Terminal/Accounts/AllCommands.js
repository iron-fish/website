import React, { useEffect, useState } from "react";

export default [
    <span data-ty="input">ironfish accounts</span>,
    <span data-ty>
    {`
Create and delete accounts

USAGE
  $ ironfish accounts:COMMAND

COMMANDS
  accounts:balance    Display the account balance
  accounts:create     Create a new account for sending and receiving coins
  accounts:export     Export an account
  accounts:import     Import an account
  accounts:list       List all the accounts on the node
  accounts:pay        Send coins to another account
  accounts:publickey  Display or regenerate the account public key
  accounts:remove     Permanently remove an account
  accounts:rescan     Rescan the blockchain for transaction
  accounts:use        Change the default account used by all commands
  accounts:which      Show the account currently used.
        `}
  </span>,
];
