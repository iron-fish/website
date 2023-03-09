---
id: faucet
title: RPC Faucet commands
sidebar_label: Faucet
description: RPC Faucet | Iron Fish Documentation
hide_table_of_contents: false
---

import JsDisplay from '../../../src/theme/components/Terminal/JsDisplay'

## faucet/getFunds

Submits a request to get funds from the faucet for an account

#### Request

<JsDisplay js={`{
  account?: string
  email?: string 
}
`} />

#### Response

<JsDisplay js={`{
  id: string
}
`} />
