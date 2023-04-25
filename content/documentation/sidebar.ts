import { SidebarDefinition } from "@/lib/markdown";

export const sidebar: SidebarDefinition = [
  {
    label: "RPC API Reference",
    items: [
      "rpc_chain",
      "rpc_config",
      "rpc_event",
      "rpc_faucet",
      {
        label: "Mempool RPCs",
        items: [
          {
            id: "rpc/mempool/get_status", 
            label: "get_status",
          },
          {
            id: "rpc/mempool/get_transactions", 
            label: "get_transactions",
          },
        ],
      },
      "rpc_miner",
      "rpc_node",
      "rpc_peer",
      "rpc_rpc",
      "rpc_wallet",
      "rpc_worker",
    ],
  },
  {
    label: "Integration Guide",
    items: [
      "integration_local",
      "integration_rpc",
      "integration_keys",
      "integration_transactions",
      "integration_deposits",
      "integration_combining_notes",
    ],
  },
  "offline-transaction-signing",
];
