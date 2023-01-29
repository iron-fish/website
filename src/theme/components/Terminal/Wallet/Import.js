import React from "react";

export default [
    <span data-ty="input">ironfish wallet:import</span>,
    <span
        data-ty="input"
        data-ty-type-delay="400"
        data-ty-prompt="Enter the account name:"
    >
        wallet
      </span>,
    <span
        data-ty="input"
        data-ty-type-delay="400"
        data-ty-prompt="Enter the account spending key:"
    >
        9cfaf518a343aa5cb6d7ee704f7b0b29fac85ff96912ea7302a3e2a4ae52cff5
      </span>,
    <span data-ty>
        {`
Account wallet imported.
Run "ironfish wallet:use wallet" to set the account as default
`}
</span>
];
