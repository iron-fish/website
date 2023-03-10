import React, { useEffect, useState } from "react";

export default [
    <span data-ty="input">{`curl -d '{"sequence": 1}' -X POST http://localhost:8080/chain/getBlock`}</span>,
    <span data-ty>
    {
`{
  "block": {
    "graffiti": "genesis",
    "difficulty": "131072",
    "hash": "d2a2ef4d7d5c6b92aac56af05877e6a39332cf3541b8ea3c907f343c2cbeac07",
    "previousBlockHash": "0000000000000000000000000000000000000000000000000000000000000000",
    "sequence": 1,
    "timestamp": 1678227692542,
    "transactions": [
      {
        "signature": "cbc791f1c5afa287807d44e248c3b0a1d65cb5687b191f1c4bc990def2b692eb1d249536d2de6afefe775e900ef28535349c71dc8128f75051db30c607c13f04",
        "hash": "99b37ae17d4ee1b7486aece754c1612c6fad8a4a738ba00ed54a28ed2a818739",
        "fee": "0",
        "spends": 0,
        "notes": 1
      },
      {
        "signature": "889c17e4ce1c5c8c241e66fb7df91a981ab127236dededd0959cf945dee72b5a5a4ed7e09e09be1ddfa455a1af6ab25c258ba767371feecc5f48331af0556f09",
        "hash": "b71de53a1a4a5d0bc91a0bd8c578d941bcfd477af1cc894f33fd1732028f7746",
        "fee": "-4200000000000000",
        "spends": 0,
        "notes": 1
      },
      {
        "signature": "3148fc5284913e54936ea951736a115ee8034b65a5f82cd3f7ddb07d0eae6087063ac6e4ab2adbd179d111c18f36172dd6a8e8a09f8c34ed44983c73ea7fb302",
        "hash": "3381f200b19d4e6d3744812dc4fe144b2241c10dcc1cc0b630979eb963fd0acd",
        "fee": "0",
        "spends": 1,
        "notes": 1
      }
    ]
  },
  "metadata": {
    "main": true,
    "confirmed": true
  }
}`}
  </span>,
];
