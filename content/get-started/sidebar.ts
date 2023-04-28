import { SidebarDefinition } from "@/lib/markdown";

export const sidebar: SidebarDefinition = [
  {
    label: "Installation",
    id: "installation",
  },
  "alternative-installation-methods",
  "running-a-node",
  "setting-up-an-account",
  "transactions",
  {
    label: "Track your transaction",
    id: "track-transaction",
  },
  "mining",
  {
    label: "Reference",
    items: [
      "node-health",
      "node-configuration",
      "wallet-commands",
      "glossary",
      "cli-commands",
    ],
  },
];
