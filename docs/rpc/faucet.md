---
id: faucet
title: RPC Faucet commands
sidebar_label: RPC Faucet commands
description: RPC Faucet | Iron Fish Documentation
hide_table_of_contents: false
---

## Faucet

### `faucet/getFunds`

Submits a request to get funds from the faucet for an account

#### Request

```js
{
  account?: string
  email?: string 
}
```

#### Response

```js
{
  id: string
}
```
