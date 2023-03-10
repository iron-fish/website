import React, { useEffect, useState } from "react";

export default [
    <span data-ty="input">curl -X POST http://localhost:8021/node/getStatus</span>,
    <span data-ty>
    {`
{
    "status": 200,
    "data": {
        "peerNetwork": {
        "peers": 1,
        "isReady": true,
        "inboundTraffic": 164.7915348665539,
        "outboundTraffic": 492.89305662948544
        },
        "blockchain": {
        "synced": true,
        "head": {
            "hash": "0000000011d7fab8c852b8ee547452fdc77a10bc55f2ac4b8487b252005cb3a7",
            "sequence": 6013
        },
        "headTimestamp": 1678400569905,
        "newBlockSpeed": 0
        },
        "node": {
        "status": "started",
        "version": "0.1.71",
        "git": "src",
        "nodeName": ""
        },
        "cpu": {
        "cores": 10,
        "percentRollingAvg": 5.094278042633619,
        "percentCurrent": 7.5034068136272545
        },
        "memory": {
        "heapMax": 4283089400,
        "heapTotal": 63651840,
        "heapUsed": 58443312,
        "rss": 441401344,
        "memFree": 2373255168,
        "memTotal": 17179869184
        },
        "miningDirector": {
        "status": "started",
        "miners": 0,
        "blocks": 0,
        "blockGraffiti": "",
        "newBlockTemplateSpeed": 0,
        "newBlockTransactionsSpeed": 0
        },
        "memPool": {
        "size": 0,
        "sizeBytes": 0,
        "maxSizeBytes": 60000000,
        "evictions": 0,
        "recentlyEvictedCache": {
            "size": 0,
            "maxSize": 60000
        }
        },
        "blockSyncer": {
        "status": "idle",
        "syncing": {
            "blockSpeed": 0,
            "speed": 0,
            "downloadSpeed": 0,
            "progress": 1
        }
        },
        "telemetry": {
        "status": "stopped",
        "pending": 0,
        "submitted": 0
        },
        "workers": {
        "started": true,
        "workers": 6,
        "executing": 0,
        "queued": 0,
        "capacity": 6,
        "change": 0,
        "speed": 0
        },
        "accounts": {
        "head": {
            "hash": "0000000011d7fab8c852b8ee547452fdc77a10bc55f2ac4b8487b252005cb3a7",
            "sequence": -1
        }
        }
    }
}        `
}
  </span>,
];
