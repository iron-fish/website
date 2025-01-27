import { SidebarDefinition } from "@/lib/markdown";

export const sidebar: SidebarDefinition = [
  {
    label: "CLI Setup",
    items: [
      "install-npm",
      {
        label: "Alternative installations",
        items: [
          "install-brew",
          "install-docker",
          "install-source",
          "install-standalone",
        ],
      },
      "run-a-node",
      "networks",
    ],
  },
  {
    label: "CLI Basics",
    items: ["setting-up-an-account", "transactions", "integration_keys"],
  },
  {
    label: "CLI Advanced",
    items: [
      "node-health",
      "integration_mining",
      "integration_local",
      "node-config",
      "offline-transaction-signing",
      "bootstrap-nodes",
      {
        label: "Multisig",
        items: [
          "multisig-creation-tdk",
          "multisig-creation-dkg",
          "multisig-signing",
        ],
      },
    ],
  },
  {
    label: "CLI Commands",
    items: [
      "cli/cli-help",
      "cli/cli-cmd-start",
      "cli/cli-cmd-stop",
      "cli/cli-cmd-status",
      "cli/cli-cmd-browse",
      "cli/cli-cmd-faucet",
      "cli/cli-cmd-reset",
      {
        label: "wallet",
        items: [
          "cli/cli-cmd-wallet-account",
          "cli/cli-cmd-wallet-accounts",
          "cli/cli-cmd-wallet-address",
          "cli/cli-cmd-wallet-assets",
          "cli/cli-cmd-wallet-balance",
          "cli/cli-cmd-wallet-balances",
          "cli/cli-cmd-wallet-burn",
          "cli/cli-cmd-wallet-create",
          "cli/cli-cmd-wallet-decrypt",
          "cli/cli-cmd-wallet-delete",
          "cli/cli-cmd-wallet-encrypt",
          "cli/cli-cmd-wallet-export",
          "cli/cli-cmd-wallet-import",
          "cli/cli-cmd-wallet-lock",
          "cli/cli-cmd-wallet-mint",
          "cli/cli-cmd-wallet-notes-combine",
          "cli/cli-cmd-wallet-notes",
          "cli/cli-cmd-wallet-post",
          "cli/cli-cmd-wallet-prune",
          "cli/cli-cmd-wallet-repair",
          "cli/cli-cmd-wallet-rescan",
          "cli/cli-cmd-wallet-reset",
          "cli/cli-cmd-wallet-send",
          "cli/cli-cmd-wallet-sign",
          "cli/cli-cmd-wallet-status",
          "cli/cli-cmd-wallet-transactions",
          "cli/cli-cmd-wallet-transaction",
          "cli/cli-cmd-wallet-transaction-add",
          "cli/cli-cmd-wallet-transaction-watch",
          "cli/cli-cmd-wallet-transaction-view",
          "cli/cli-cmd-wallet-unlock",
          "cli/cli-cmd-wallet-use",
          "cli/cli-cmd-wallet-which",
          {
            label: "chainport",
            items: ["cli/cli-cmd-wallet-chainport-send"],
          },
          {
            label: "multisig",
            items: [
              "cli/cli-cmd-wallet-multisig-participant-create",
              "cli/cli-cmd-wallet-multisig-participant-get",
              "cli/cli-cmd-wallet-multisig-dealer-create",
              "cli/cli-cmd-wallet-multisig-commitment-create",
              "cli/cli-cmd-wallet-multisig-commitment-aggregate",
              "cli/cli-cmd-wallet-multisig-sign",
              "cli/cli-cmd-wallet-multisig-signature-create",
              "cli/cli-cmd-wallet-multisig-signature-aggregate",
              "cli/cli-cmd-wallet-multisig-account-participants-list",
              "cli/cli-cmd-wallet-multisig-participants-list",
              {
                label: "dkg",
                items: [
                  "cli/cli-cmd-wallet-multisig-dkg-create",
                  "cli/cli-cmd-wallet-multisig-dkg-round1",
                  "cli/cli-cmd-wallet-multisig-dkg-round2",
                  "cli/cli-cmd-wallet-multisig-dkg-round3",
                ],
              },
            ],
          },
        ],
      },

      {
        label: "config",
        items: [
          "cli/cli-cmd-config",
          "cli/cli-cmd-config-edit",
          "cli/cli-cmd-config-get",
          "cli/cli-cmd-config-set",
        ],
      },
      {
        label: "peers",
        items: ["cli/cli-cmd-peers", "cli/cli-cmd-peers-show"],
      },
      {
        label: "chain",
        items: [
          "cli/cli-cmd-chain-show",
          "cli/cli-cmd-chain-repair",
          "cli/cli-cmd-chain-asset",
          "cli/cli-cmd-chain-export",
          "cli/cli-cmd-chain-forks",
          "cli/cli-cmd-chain-download",
        ],
      },
      {
        label: "blocks",
        items: ["cli/cli-cmd-blocks-show"],
      },
      {
        label: "workers",
        items: ["cli/cli-cmd-workers-status"],
      },
      {
        label: "miners",
        items: ["cli/cli-cmd-miners-start", "cli/cli-cmd-miners-pools-start"],
      },
    ],
  },
  "ironfish-wasm",
  {
    label: "Recipes",
    items: [
      "integration_transactions",
      "integration_deposits",
      "recipes_combining_notes",
      "recipes_maximizing_transaction_size",
      "recipes_splitting_notes",
      "recipes_accounting_export",
      {
        label: "Multisig",
        items: [
          "recipes_multisig_create_account",
          "recipes_multisig_create_account_dkg",
          "recipes_multisig_sign_transaction",
        ],
      },
    ],
  },
  {
    label: "RPC",
    items: [
      "integration_rpc",
      "rpc/protocol",
      {
        label: "Routes",
        items: [
          {
            label: "Response Objects",
            items: [
              {
                id: "rpc/objects/rpcAccountAssetBalanceDelta",
                label: "RpcAccountAssetBalanceDelta",
              },
              {
                id: "rpc/objects/rpcAccountStatus",
                label: "RpcAccountStatus",
              },
              {
                id: "rpc/objects/rpcAsset",
                label: "RpcAsset",
              },
              {
                id: "rpc/objects/rpcBlock",
                label: "RpcBlock",
              },
              {
                id: "rpc/objects/rpcBlockHeader",
                label: "RpcBlockHeader",
              },
              {
                id: "rpc/objects/rpcBurn",
                label: "RpcBurn",
              },
              {
                id: "rpc/objects/rpcEncryptedNote",
                label: "RpcEncryptedNote",
              },
              {
                id: "rpc/objects/rpcMint",
                label: "RpcMint",
              },
              {
                id: "rpc/objects/rpcPeerResponse",
                label: "RpcPeerResponse",
              },
              {
                id: "rpc/objects/rpcSpend",
                label: "RpcSpend",
              },
              {
                id: "rpc/objects/rpcTransaction",
                label: "RpcTransaction",
              },
              {
                id: "rpc/objects/rpcWalletNote",
                label: "RpcWalletNote",
              },
              {
                id: "rpc/objects/rpcWalletTransaction",
                label: "RpcWalletTransaction",
              },
            ],
          },
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
                id: "rpc/chain/export_chain_stream",
                label: "exportChainStream",
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
              {
                id: "rpc/chain/is_valid_public_address",
                label: "isValidPublicAddress",
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
                id: "rpc/mempool/accept_transaction",
                label: "acceptTransaction",
              },
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
                id: "rpc/peer/add_peer",
                label: "addPeer",
              },
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
                label: "Multisig",
                items: [
                  {
                    id: "rpc/wallet/multisig/get_account_identity",
                    label: "getAccountIdentity",
                  },
                  {
                    id: "rpc/wallet/multisig/get_account_identities",
                    label: "getAccountIdentities",
                  },
                  {
                    id: "rpc/wallet/multisig/get_participant",
                    label: "getParticipant",
                  },
                  {
                    id: "rpc/wallet/multisig/create_participant",
                    label: "createParticipant",
                  },
                  {
                    id: "rpc/wallet/multisig/create_trusted_dealer_key_package",
                    label: "createTrustedDealerKeyPackage",
                  },
                  {
                    id: "rpc/wallet/multisig/create_signing_commitment",
                    label: "createSiginingCommitment",
                  },
                  {
                    id: "rpc/wallet/multisig/create_signing_package",
                    label: "createSigningPackage",
                  },
                  {
                    id: "rpc/wallet/multisig/create_signature_share",
                    label: "createSignatureShare",
                  },
                  {
                    id: "rpc/wallet/multisig/aggregate_signature_shares",
                    label: "aggregateSignatureShares",
                  },
                  {
                    label: "DKG",
                    items: [
                      {
                        id: "rpc/wallet/multisig/dkg/round1",
                        label: "round1",
                      },
                      {
                        id: "rpc/wallet/multisig/dkg/round2",
                        label: "round2",
                      },
                      {
                        id: "rpc/wallet/multisig/dkg/round3",
                        label: "round3",
                      },
                    ],
                  },
                ],
              },
              {
                id: "rpc/wallet/add_transaction",
                label: "addTransaction",
              },
              {
                id: "rpc/wallet/build_transaction",
                label: "buildTransaction",
              },
              {
                id: "rpc/wallet/burn_asset",
                label: "burnAsset",
              },
              {
                id: "rpc/wallet/create",
                label: "create [DEPRECATED]",
              },
              {
                id: "rpc/wallet/createAccount",
                label: "createAccount",
              },
              {
                id: "rpc/wallet/create_transaction",
                label: "createTransaction",
              },
              {
                id: "rpc/wallet/decrypt",
                label: "decrypt",
              },
              {
                id: "rpc/wallet/encrypt",
                label: "encrypt",
              },
              {
                id: "rpc/wallet/estimate_fee_rates",
                label: "estimateFeeRates",
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
                id: "rpc/wallet/get_asset",
                label: "getAsset",
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
                id: "rpc/wallet/get_node_status",
                label: "getNodeStatus",
              },
              {
                id: "rpc/wallet/get_unsigned_transaction_notes",
                label: "getUnsignedTransactionNotes",
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
                id: "rpc/wallet/lock",
                label: "lock",
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
                label: "remove [DEPRECATED]",
              },
              {
                id: "rpc/wallet/removeAccount",
                label: "removeAccount",
              },
              {
                id: "rpc/wallet/rename",
                label: "rename [DEPRECATED]",
              },
              {
                id: "rpc/wallet/renameAccount",
                label: "renameAccount",
              },
              {
                id: "rpc/wallet/rescan",
                label: "rescan",
              },
              {
                id: "rpc/wallet/reset_account",
                label: "resetAccount",
              },
              {
                id: "rpc/wallet/send_transaction",
                label: "sendTransaction",
              },
              {
                id: "rpc/wallet/set_account_head",
                label: "setAccountHead",
              },
              {
                id: "rpc/wallet/set_scanning",
                label: "setScanning",
              },
              {
                id: "rpc/wallet/sign_transaction",
                label: "signTransaction",
              },
              {
                id: "rpc/wallet/unlock",
                label: "unlock",
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
    ],
  },
  {
    label: "Contribute To Iron Fish",
    items: [
      "contribute/lint_and_format",
      "release-versioning",
      "hardfork-update-process",
    ],
  },
];
