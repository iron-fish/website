---
id: new-account-iron-fish
title: Create an account
sidebar_label: Create an account
description: Create an account | Iron Fish Onboarding
hide_table_of_contents: true
---

import Terminal from '../../src/theme/components/Terminal/Terminal'
import Create from '../../src/theme/components/Terminal/Wallet/Create'

### Create a new account

By default, an account is created when you start up your node for the first time. But you can create a new account at any time with the following command:

```sh
ironfish wallet:create
```

<Terminal command={Create} />

### Set the account as default
When you have multiple accounts, you can indicate to the CLI which one to use:
```sh
ironfish wallet:use MyNewAccount
```

## Next steps

You can read about the different accounts commands in [this section](accounts.md).
Now that you have created an account, you can use it to get coins or start mining.
