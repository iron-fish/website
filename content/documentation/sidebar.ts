import { SidebarDefinition } from "@/lib/markdown";

export const sidebar: SidebarDefinition = [
  {
    label: "RPC API Reference",
    items: [
      {
        label: "Chain",
        items: [
          {
            id: "rpc/chain/rpc_chain"
          },
        ],
      },
      {
        label: "Config",
        items: [
          {
            id: "rpc/config/rpc_config"
          },
        ],
      },
      {
        label: "Event",
        items: [
          {
            id: "rpc/event/rpc_event"
          },
        ],
      },
      {
        label: "Faucet",
        items: [
          {
            id: "rpc/faucet/rpc_faucet"
          },
        ],
      },
      {
        label: "Mempool",
        items: [
          {
            id: "rpc/mempool/get_status", 
            label: "getStatus",
          },
          {
            id: "rpc/mempool/get_transactions", 
            label: "getTransactions",
          },
        ],
      },
      {
        label: "Miner",
        items: [
          {
            id: "rpc/miner/rpc_miner"
          },
        ],
      },
      {
        label: "Node",
        items: [
          {
            id: "rpc/node/rpc_node"
          },
        ],
      },
      {
        label: "Peer",
        items: [
          {
            id: "rpc/peer/rpc_peer"
          },
        ],
      },
      {
        label: "RPC",
        items: [
          {
            id: "rpc/rpc/rpc_rpc"
          },
        ],
      },
      {
        label: "Wallet",
        items: [
          {
            id: "rpc/wallet/add_transaction",
            label: "addTransaction",
          },
          {
            id: "rpc/wallet/burn_asset",
            label: "burnAsset",
          },
          {
            id: "rpc/wallet/create_transaction",
            label: "createTransaction",
          },
          {
            id: "rpc/wallet/create",
            label: "create",
          },
          {
            id: "rpc/wallet/export_account",
            label: "exportAccount",
          },
          {
            id: "rpc/wallet/get_account_notes_stream",
            label: "getAccountNotesStream",
          },
          {
            id: "rpc/wallet/get_account_status",
            label: "getAccountStatus",
          },
          {
            id: "rpc/wallet/get_account_transaction",
            label: "getAccountTransaction",
          },
          {
            id: "rpc/wallet/get_account_transactions",
            label: "getAccountTransactions",
          },
          {
            id: "rpc/wallet/get_accounts",
            label: "getAccounts",
          },
          {
            id: "rpc/wallet/get_assets",
            label: "getAssets",
          },
          {
            id: "rpc/wallet/get_balance",
            label: "getBalance",
          },
          {
            id: "rpc/wallet/get_balances",
            label: "getBalances",
          },
          {
            id: "rpc/wallet/get_default_account",
            label: "getDefaultAccount",
          },
          {
            id: "rpc/wallet/get_public_key",
            label: "getPublicKey",
          },
          {
            id: "rpc/wallet/import_account",
            label: "importAccount",
          },
          {
            id: "rpc/wallet/mint_asset",
            label: "mintAsset",
          },
          {
            id: "rpc/wallet/post_transaction",
            label: "postTransaction",
          },
          {
            id: "rpc/wallet/post_transaction",
            label: "postTransaction",
          },
          {
            id: "rpc/wallet/remove",
            label: "remove",
          },
          {
            id: "rpc/wallet/rescan_account",
            label: "rescanAccount",
          },
          {
            id: "rpc/wallet/send_transaction",
            label: "sendTransaction",
          },
          {
            id: "rpc/wallet/use_account",
            label: "useAccount",
          },
        ],
      },
      {
        label: "Worker",
        items: [
          {
            id: "rpc/worker/get_status",
            label: "getStatus",
          },
        ],
      },
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
