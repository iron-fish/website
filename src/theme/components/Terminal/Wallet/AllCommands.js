import React, { useEffect, useState } from "react";

export default [
    <span data-ty="input">ironfish wallet</span>,
    <span data-ty>
    {`
List all the accounts on the node

USAGE
  $ ironfish wallet:COMMAND

COMMANDS
  wallet:accounts      List all the accounts on the node
  wallet:address       Display your account address
  wallet:balance       Display the account balance
  wallet:balances      Display the account's balances for all assets
  wallet:burn          Burn tokens and decrease supply for a given asset
  wallet:create        Create a new account for sending and receiving coins
  wallet:export        Export an account
  wallet:import        Import an account
  wallet:mint          Mint tokens and increase supply for a given asset
  wallet:notes         Display the account notes
  wallet:remove        Permanently remove an account
  wallet:repair        Repairs wallet database stores
  wallet:rescan        Rescan the blockchain for transaction
  wallet:send          Send coins to another account
  wallet:status        Get status of an account
  wallet:transaction   Display an account transaction
  wallet:transactions  Display the account transactions
  wallet:use           Change the default account used by all commands
  wallet:which         Show the account currently used.
        `}
  </span>,
];
