import React, { useEffect, useState } from "react";

export default [
    <span data-ty="input">ironfish blocks:show 0000000012e89c7fc6a2ff9ad636a1caf89cd97c1c5c1e797fbea8a41b909f0d</span>,
    <span data-ty>
    {`
{
  "block": {
    "graffiti": "KingSuper",
    "difficulty": "22625047703",
    "hash": "0000000012e89c7fc6a2ff9ad636a1caf89cd97c1c5c1e797fbea8a41b909f0d",
    "previousBlockHash": "000000002b1e5fbfbce932011bafd93d80482e04704d15dbdb8966d668f53853",
    "sequence": 4551,
    "timestamp": 1638409498348,
    "transactions": [
      {
        "signature": "12f0de2b81729c537d3c9f2b5d62437e19599278696226eae577df8307d6e894d57c9756f7c678f76c5314398522fe4766e464e50edc97fc6e875a86c9927409",
        "hash": "ef14b3686cb58a0709af9f2d172c3a369e33c38cf661a88dfc3aa1c1ba5e47c0",
        "fee": "-2000000001",
        "spends": 0,
        "notes": 1
      },
      {
        "signature": "4222ec0797196102aee41beddb0e13e73b987cf625c10a9e33cb79290d8032ea5b507b4aa21fdbbcda61cbf31ae71ce74f75a3f356ad36c79d1310280591a408",
        "hash": "a25b5afd10f5904c44624f705bf3d3e1f9365a9ac15ee4fecf602d93bffdffb2",
        "fee": "1",
        "spends": 1,
        "notes": 2
      }
    ]
  },
  "metadata": {
    "main": true
  }
}
        `}
  </span>,
];
