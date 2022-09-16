import React, { useEffect, useState } from "react";

export default [
    <span data-ty="input">ironfish chain:export -p ./data.json</span>,
    <span data-ty>
    {`
Exporting chain from 1 -> 37897 to /usr/src/app/data.json
Exporting blocks:`}
  </span>,
    <span data-ty="progress"></span>,
    <span data-ty>
    {`
Export complete
        `}
  </span>,
];
