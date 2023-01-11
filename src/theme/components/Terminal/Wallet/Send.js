import React from "react";

export default [
      <span data-ty="input">ironfish wallet:send</span>,
      <span
        data-ty="input"
        data-ty-type-delay="400"
        data-ty-prompt="Enter the amount in $IRON (balance available: $IRON 200)"
      >
        20
      </span>,
      <span
        data-ty="input"
        data-ty-type-delay="400"
        data-ty-prompt="Enter the fee amount in $IRON"
      >
        0.00000001
      </span>,
      <span
        data-ty="input"
        data-ty-type-delay="50"
        data-ty-prompt="Enter the the public address of the recipient:"
      >
        ab518b8c908d7157eaebdf8159c5813894074d3136826daba4a485598de1b86a597af2821f8400bbfe70c1
      </span>,
      <span data-ty>
        {`
You are about to send:
$IRON 20 to ab518b8c908d7157eaebdf8159c5813894074d3136826daba4a485598de1b86a597af2821f8400bbfe70c1 from the account IronFishGenesisAccount

* This action is NOT reversible *
`}
      </span>,
      <span
        data-ty="input"
        data-ty-type-delay="400"
        data-ty-prompt="Do you confirm (Y/N)?:"
      >
        Y
      </span>,
      <span data-ty>Creating the transaction:</span>,
      <span data-ty="progress"></span>,
      <span data-ty>
        {`
Sending 20 to ab518b8c908d7157eaebdf8159c5813894074d3136826daba4a485598de1b86a597af2821f8400bbfe70c1 from MyNewAccount

Transaction Hash: e032e78268a1097288503e18510e48d140292ff5ce91d0914ae00f733ad8d166
Transaction Fee: 0.00000001
Find the transaction on https://explorer.ironfish.network/transaction/ee32e78268a1097288503e18510e48d140292ff5ce91d0914ae00f733ad8d166
`}
</span>
];
