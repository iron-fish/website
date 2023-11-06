import { SidebarDefinition } from "@/lib/markdown";

export const sidebar: SidebarDefinition = [
  "introduction",
  {
    label: "Protocol",
    items: [
      "protocol/accounts",
      "protocol/crypto-primitives",
      "protocol/transactions",
      "protocol/consensus",
      "protocol/blocks",
    ],
  },
  "networking",
  "glossary",
  "governance",
];
