import React, { useEffect, useState } from "react";

export default [
    <span data-ty="input">ironfish config:show</span>,
    <span data-ty>
    {`
{
   "bootstrapNodes": [
      "test.bn1.ironfish.network"
   ],
   "databaseName": "default",
   "defaultTransactionExpirationSequenceDelta": 15,
   "editor": "",
   "enableListenP2P": true,
   "enableLogFile": false,
   "enableMiningDirector": false,
   "enableRpc": true,
   "enableRpcIpc": true,
   "enableRpcTcp": true,
   "enableSyncing": true,
   "enableTelemetry": false,
   "enableMetrics": true,
   "getFundsApi": "https://api.ironfish.network/faucet_transactions",
   "ipcPath": "/root/.ironfish/ironfish.ipc",
   "logLevel": "*:info",
   "logPeerMessages": false,
   "logPrefix": "",
   "miningForce": false,
   "blockGraffiti": "",
   "nodeName": "",
   "nodeWorkers": -1,
   "nodeWorkersMax": 6,
   "p2pSimulateLatency": 0,
   "peerPort": 9033,
   "rpcTcpHost": "localhost",
   "rpcTcpPort": 8020,
   "rpcTcpSecure": false,
   "rpcRetryConnect": false,
   "maxPeers": 50,
   "minPeers": 1,
   "targetPeers": 50,
   "telemetryApi": "https://api.ironfish.network/telemetry",
   "accountName": "default",
   "generateNewIdentity": false,
   "blocksPerMessage": 20,
   "minerBatchSize": 10000
}
        `}
  </span>,
];
