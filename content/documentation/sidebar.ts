import { SidebarDefinition } from "@/lib/markdown";

export const sidebar: SidebarDefinition = [
  {
    label: "Integration Guide",
    items: [
      "integration_local",
      "integration_mining",
      "integration_rpc",
      "integration_keys",
      "integration_transactions",
      "integration_deposits",
    ],
  },
  {
    label: "Recipes",
    items: [
      "recipes_combining_notes",
      "recipes_maximizing_transaction_size",
      "recipes_splitting_notes",
    ],
  },
  "release-versioning",
  "offline-transaction-signing",
  {
    label: "RPC API Reference",
    items: [
      {
        label: "Chain",
        items: [
          {
            id: "rpc/chain/broadcast_transaction",
            label: "broadcastTransaction",
          },
          {
            id: "rpc/chain/estimate_fee_rate",
            label: "estimateFeeRate",
          },
          {
            id: "rpc/chain/estimate_fee_rates",
            label: "estimateFeeRates",
          },
          {
            id: "rpc/chain/follow_chain_stream",
            label: "followChainStream",
          },
          {
            id: "rpc/chain/get_asset",
            label: "getAsset",
          },
          {
            id: "rpc/chain/get_block",
            label: "getBlock",
          },
          {
            id: "rpc/chain/get_chain_info",
            label: "getChainInfo",
          },
          {
            id: "rpc/chain/get_consensus_parameters",
            label: "getConsensusParameters",
          },
          {
            id: "rpc/chain/get_difficulty",
            label: "getDifficulty",
          },
          {
            id: "rpc/chain/get_network_hash_power",
            label: "getNetworkHashPower",
          },
          {
            id: "rpc/chain/get_network_info",
            label: "getNetworkInfo",
          },
          {
            id: "rpc/chain/get_note_witness",
            label: "getNoteWitness",
          },
          {
            id: "rpc/chain/get_transaction",
            label: "getTransaction",
          },
          {
            id: "rpc/chain/get_transaction_stream",
            label: "getTransactionStream",
          },
          {
            id: "rpc/chain/show_chain",
            label: "showChain",
          },
        ],
      },
      {
        label: "Config",
        items: [
          {
            id: "rpc/config/get_config",
            label: "getConfig",
          },
          {
            id: "rpc/config/set_config",
            label: "setConfig",
          },
          {
            id: "rpc/config/unset_config",
            label: "unsetConfig",
          },
          {
            id: "rpc/config/upload_config",
            label: "uploadConfig",
          },
        ],
      },
      {
        label: "Event",
        items: [
          {
            id: "rpc/event/on_gossip",
            label: "onGossip",
          },
          {
            id: "rpc/event/on_reorganize_chain",
            label: "onReorganizeChain",
          },
          {
            id: "rpc/event/on_transaction_gossip",
            label: "onTransactionGossip",
          },
        ],
      },
      {
        label: "Faucet",
        items: [
          {
            id: "rpc/faucet/get_funds",
            label: "getFunds",
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
            id: "rpc/miner/block_template_stream",
            label: "blockTemplateStream",
          },
          {
            id: "rpc/miner/submit_block",
            label: "submitBlock",
          },
        ],
      },
      {
        label: "Node",
        items: [
          {
            id: "rpc/node/get_log_stream",
            label: "getLogStream",
          },
          {
            id: "rpc/node/get_status",
            label: "getStatus",
          },
          {
            id: "rpc/node/stop_node",
            label: "stopNode",
          },
        ],
      },
      {
        label: "Peer",
        items: [
          {
            id: "rpc/peer/get_banned_peers",
            label: "getBannedPeers",
          },
          {
            id: "rpc/peer/get_peer",
            label: "getPeer",
          },
          {
            id: "rpc/peer/get_peers",
            label: "getPeers",
          },
          {
            id: "rpc/peer/get_peer_messages",
            label: "getPeerMessages",
          },
        ],
      },
      {
        label: "RPC",
        items: [
          {
            id: "rpc/rpc/get_status",
            label: "getStatus",
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
            id: "rpc/wallet/create",
            label: "create",
          },
          {
            id: "rpc/wallet/create_transaction",
            label: "createTransaction",
          },
          {
            id: "rpc/wallet/export_account",
            label: "exportAccount",
          },
          {
            id: "rpc/wallet/get_accounts",
            label: "getAccounts",
          },
          {
            id: "rpc/wallet/get_account_notes_stream",
            label: "getAccountNotesStream",
          },
          {
            id: "rpc/wallet/get_accounts_status",
            label: "getAccountsStatus",
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
            id: "rpc/wallet/get_notes",
            label: "getNotes",
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
            id: "rpc/wallet/remove",
            label: "remove",
          },
          {
            id: "rpc/wallet/rename",
            label: "rename",
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
];
