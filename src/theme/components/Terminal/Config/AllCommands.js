import React, { useEffect, useState } from "react";

export default [
    <span data-ty="input">ironfish config</span>,
    <span data-ty>
    {`
Show and edit the node configuration

USAGE
  $ ironfish config:COMMAND

COMMANDS
  config:edit  Edit the config in your configured editor
  config:get   Print out one config value
  config:set   Set a value in the config
  config:show  Print out the entire config
        `}
  </span>,
];
