import React, { useEffect, useState } from "react";

export default [
    <span data-ty="input">ironfish wallet:transactions</span>,
    <span data-ty>
    {`
Timestamp               Status    Type    Hash     Expiration Fee Paid ($IRON) Asset         Net Amount 
─────────────────────── ───────── ─────── ──────── ────────── ──────────────── ───────────── ───────────
3/9/2023 6:08:57 PM PST confirmed send    aa72c... 75076      0.00000001       $IRON (d7c86) -0.00000003
3/9/2023 2:26:48 PM PST confirmed receive a4360... 74854                       $IRON (d7c86) 0.00000001 
        `}
  </span>,
];
