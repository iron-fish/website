import { SidebarDefinition } from "@/lib/markdown";

export const sidebar: SidebarDefinition = [
  "get-started",
  "installation",
  {
    label: "Alternative Installations",
    items: ["install-brew", "install-docker", "install-source"],
  },
  "running-a-node",
  "node-health",
  "setting-up-an-account",
  "transactions",
  "mining",
  {
    label: "Reference",
    items: [
      "node-configuration",
      "node-datadir",
      "wallet-commands",
      "glossary",
      "cli-commands",
    ],
  },
];
