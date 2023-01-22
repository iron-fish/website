import React, { useEffect, useState } from "react";

export default [
    <span data-ty="input">ironfish wallet:mint</span>,
    <span
      data-ty="input"
      data-ty-typeDelay="200"
      data-ty-prompt="Do you want to create a new asset (Y/N)?:"
    >
      y
    </span>,
    <span
      data-ty="input"
      data-ty-typeDelay="200"
      data-ty-prompt="Enter the name for the new asset:"
    >
      MyNewAsset
    </span>,
    <span
      data-ty="input"
      data-ty-typeDelay="200"
      data-ty-prompt="Enter metadata for the new asset:"
    >
      -
    </span>,
    <span
      data-ty="input"
      data-ty-typeDelay="200"
      data-ty-prompt="Enter the amount to mint in the custom asset:"
    >
      10
    </span>,
    <span
      data-ty="input"
      data-ty-typeDelay="200"
      data-ty-prompt="Enter the fee amount in $IRON (min: 0.00000001) [0.00000001]:"
    >
      0.00000001
    </span>,
      <span data-ty>
      {`
You are about to mint Name: MyNewAsset
10.00000000 plus a transaction fee of $IRON 0.00000001 with the account MyNewAccount

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
Minted asset MyNewAsset from MyNewAccount
Asset Identifier: 9d10d3fe1b86a5
Value: 10.00000000
Transaction Hash: e032e78268a1097288503e18510e48d140292ff5ce91d0914ae00f733ad8d166
Find the transaction on https://explorer.ironfish.network/transaction/e032e78268a1097288503e18510e48d140292ff5ce91d0914ae00f733ad8d166
`}
</span>
];
