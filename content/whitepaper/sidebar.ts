import { SidebarDefinition } from "@/lib/markdown";

export const sidebar: SidebarDefinition = [
  "introduction",
  {
    label: "Protocol",
    items: [
      "protocol/accounts",
      "protocol/crypto-primitives",
      "protocol/transactions",
    ],
  },
  "networking",
  "storage",
  "mining",
  "account",
  "transaction",
  "consensus-verification",
  "appendix",
];
