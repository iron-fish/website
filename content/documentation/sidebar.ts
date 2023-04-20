import { SidebarDefinition } from '@/lib/markdown';

export const sidebar: SidebarDefinition = [
  {
    label: 'RPC API Reference',
    items: [
      'rpc_chain',
      'rpc_config',
      'rpc_event',
      'rpc_faucet',
      'rpc_mempool',
      'rpc_miner',
      'rpc_node',
      'rpc_peer',
      'rpc_rpc',
      'rpc_wallet',
      'rpc_worker',
    ],
  },
  {
    label: 'Integration Guide',
    items: [
      'integration_local',
      'integration_rpc',
      'integration_keys',
      'integration_transactions',
      'integration_deposits',
    ]
  },
  'offline-transaction-signing',
];
