import { SidebarDefinition } from "@/lib/markdown";

export const sidebar: SidebarDefinition = [
  "get-started",
  "installation",
  {
    label: "Alternative Installations",
    items: [
      "install-brew",
      "install-docker",
      "install-source",
      "install-standalone",
    ],
  },
  "run-a-node",
  "node-health",
  "setting-up-an-account",
  "transactions",
  "mining",
  {
    label: "Reference",
    items: ["node-config", "node-datadir", "bootstrap-nodes"],
  },
  {
    label: "CLI Commands",
    items: [
      "cli-how-to-use",
      "cli-cmd-start",
      "cli-cmd-stop",
      "cli-cmd-status",
      "cli-cmd-browse",
      "cli-cmd-faucet",
      {
        label: "wallet",
        items: [
          "cli-cmd-wallet-accounts",
          "cli-cmd-wallet-address",
          "cli-cmd-wallet-assets",
          "cli-cmd-wallet-balance",
          "cli-cmd-wallet-balances",
          "cli-cmd-wallet-burn",
          "cli-cmd-wallet-create",
          "cli-cmd-wallet-delete",
          "cli-cmd-wallet-export",
          "cli-cmd-wallet-import",
          "cli-cmd-wallet-mint",
          "cli-cmd-wallet-notes-combine",
          "cli-cmd-wallet-notes",
          "cli-cmd-wallet-post",
          "cli-cmd-wallet-prune",
          "cli-cmd-wallet-repair",
          "cli-cmd-wallet-rescan",
          "cli-cmd-wallet-send",
          "cli-cmd-wallet-status",
          "cli-cmd-wallet-transactions",
          "cli-cmd-wallet-transaction",
          "cli-cmd-wallet-transaction-watch",
          "cli-cmd-wallet-use",
          "cli-cmd-wallet-which",
          {
            label: "multisig",
            items: [
              "cli-cmd-wallet-multisig-commitment-create",
              "cli-cmd-wallet-multisig-commitment-aggregate",
            ],
          },
        ],
      },
      {
        label: "config",
        items: [
          "cli-cmd-config",
          "cli-cmd-config-edit",
          "cli-cmd-config-get",
          "cli-cmd-config-set",
        ],
      },
      {
        label: "peers",
        items: ["cli-cmd-peers", "cli-cmd-peers-show"],
      },
      {
        label: "chain",
        items: [
          "cli-cmd-chain-show",
          "cli-cmd-chain-repair",
          "cli-cmd-chain-asset",
          "cli-cmd-chain-export",
          "cli-cmd-chain-forks",
          "cli-cmd-chain-download",
        ],
      },
      {
        label: "blocks",
        items: ["cli-cmd-blocks-show"],
      },
      {
        label: "workers",
        items: ["cli-cmd-workers-status"],
      },
      {
        label: "miners",
        items: ["cli-cmd-miners-start", "cli-cmd-miners-pools-start"],
      },
    ],
  },
];
