import React from "react";

export default [
    <span data-ty="input">ironfish accounts:import</span>,
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
    <span
        data-ty="input"
        data-ty-type-delay="50"
        data-ty-prompt="Enter the account incoming view key:"
    >
        0092734294658f53417ed104deb10ac333a799ca13d210bbad3d62e95247f306
      </span>,
    <span
        data-ty="input"
        data-ty-type-delay="50"
        data-ty-prompt="Enter the account outgoing view key:"
    >
        687ddc73cc224fad52379f52cd545c1a6b79af38d7cf18a02e1f527fd4740a1c
      </span>,
    <span
        data-ty="input"
        data-ty-type-delay="50"
        data-ty-prompt="Enter the account public address:"
    >
        c1ab489154850983e68f2e4b74f658d7dd1cfe84cb18902cf6632680909b2379590b3b7287fc78b8e947c7
      </span>,
    <span data-ty>
        {`
Account wallet imported.
Run "ironfish accounts:use wallet" to set the account as default
`}
</span>
];
