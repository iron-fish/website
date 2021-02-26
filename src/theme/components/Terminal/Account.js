import React from "react";

export default [
  <span data-ty="input">ironfish accounts:create</span>,
  <span
    data-ty="input"
    data-ty-typeDelay="200"
    data-ty-prompt="Enter the name of the account:"
  >
    MyNewAccount
  </span>,
  <span data-ty>
    {`
Creating account MyNewAccount

Account MyNewAccount saved to /Users/username/.ironfishtodelete/accounts.json
Public address: 6a085865ac5608c8ec64189db54d4b5c085da9da12dad0a0bf00f60e52c16b0303d8a8dd7d82601f577c8d

Run "ironfish accounts:use MyNewAccount" to set the account as default
`}
  </span>
];
