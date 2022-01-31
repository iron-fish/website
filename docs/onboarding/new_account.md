---
id: new-account-iron-fish
title: Create an account
sidebar_label: Create an account
description: Create an account | Iron Fish Onboarding
hide_table_of_contents: true
---

import Terminal from '../../src/theme/components/Terminal/Terminal'
import Account from '../../src/theme/components/Terminal/Account'

### Create a new account

By default, an account is created when you start up your node for the first time. But you can create a new account at any time with the following command:

```sh
ironfish accounts:create
```

<Terminal command={Account} />

### Set the account as default
When you have multiple accounts, you can indicate to the CLI which one to use:
```sh
ironfish accounts:use MyNewAccount
```

## Next steps

Now that you have created an account, you can use it to get coins or start mining.
Read about the different accounts commands on [this section](accounts.md).

Want to help grow Iron Fish? Join the incentivized testnet [here](https://testnet.ironfish.network/signup)!