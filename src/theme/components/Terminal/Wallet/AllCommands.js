import React, { useEffect, useState } from "react";

export default [
    <span data-ty="input">ironfish wallet</span>,
    <span data-ty>
    {`
List all the accounts on the node

USAGE
  $ ironfish wallet:COMMAND

TOPICS
  wallet:transaction  Display an account transaction

COMMANDS
  wallet:accounts      List all the accounts on the node
  wallet:address       Display your account address
  wallet:assets        Display the wallet's assets
  wallet:balance       Display the account balance
  wallet:balances      Display the account's balances for all assets
  wallet:burn          Burn tokens and decrease supply for a given asset
  wallet:create        Create a new account for sending and receiving coins
  wallet:delete        Permanently delete an account
  wallet:export        Export an account
  wallet:import        Import an account
  wallet:mint          Mint tokens and increase supply for a given asset
  wallet:notes         Display the account notes
  wallet:post          Post a raw transaction
  wallet:prune         Removes expired transactions from the wallet
  wallet:repair        Repair wallet database stores
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
