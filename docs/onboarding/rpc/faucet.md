---
id: faucet
title: RPC Faucet commands
sidebar_label: Faucet
description: RPC Faucet | Iron Fish Documentation
hide_table_of_contents: false
---

import JsDisplay from '../../../src/theme/components/Terminal/JsDisplay'
import GithubCodeLink from '../../../src/theme/components/Terminal/rpc/GithubCodeLink'

## <GithubCodeLink link="faucet/getFunds" /> faucet/getFunds

**THIS ENDPOINT IS ONLY AVAILABLE ON TESTNET**

Submits a request to get funds from the faucet for an account. 

If an account is not provided, the default account on the node will be used.

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
