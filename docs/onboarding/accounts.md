---
id: iron-fish-accounts-commands
title: Accounts commands
sidebar_label: Accounts commands
description: Accounts | Iron Fish Onboarding
hide_table_of_contents: false
---
import Terminal from '../../src/theme/components/Terminal/Terminal'
import AllCommands from '../../src/theme/components/Terminal/Accounts/AllCommands'
import AccountCreate from '../../src/theme/components/Terminal/Account'
import SelectDefault from '../../src/theme/components/Terminal/Accounts/SelectDefault'
import CheckBalance from '../../src/theme/components/Terminal/Accounts/CheckBalance'
import List from '../../src/theme/components/Terminal/Accounts/List'
import CheckDefault from '../../src/theme/components/Terminal/Accounts/CheckDefault'
import Export from '../../src/theme/components/Terminal/Accounts/Export'
import PubKey from '../../src/theme/components/Terminal/Accounts/PubKey'
import Import from '../../src/theme/components/Terminal/Accounts/Import'
import Remove from '../../src/theme/components/Terminal/Accounts/Remove'
import Pay from '../../src/theme/components/Terminal/Pay'
import Rescan from '../../src/theme/components/Terminal/Accounts/Rescan'



To check all available commands
```sh
ironfish accounts
```
<Terminal command={AllCommands} />

### Account creation
To create a new account
```sh
ironfish accounts:create
```
<Terminal command={AccountCreate} />

### Default account
To change the default account used by the CLI
```sh
ironfish accounts:use MyAccount
```
<Terminal command={SelectDefault} />

### Import an Account
To import an account from a file:
```sh
ironfish accounts:import filename
```

To import an account via stdin:
```sh
echo {<account json>} | ironfish accounts:import
```
Enter the JSON of the account and press enter

To import an account interactively:
```sh
ironfish accounts:import
```
<Terminal command={Import} />

Enter the details requested by the prompts as shown above

### Export an Account
To export an account to a file:
```sh
ironfish accounts:export AccountName filename
```

To export an account to the terminal:
```sh
ironfish accounts:export AccountName
```
<Terminal command={Export} />

### See current default account
To display the current default account used by the CLI
```sh
ironfish accounts:which
```
<Terminal command={CheckDefault} />

### Accounts list
To see the list of accounts on your node
```sh
ironfish accounts:list
```
<Terminal command={List} />

### Account key
To see a specific account public key
```sh
ironfish accounts:publickey
```
<Terminal command={PubKey} />

### Account balance
To display the balance of the account
```sh
ironfish accounts:balance
```
<Terminal command={CheckBalance} />

### Account deletion
To delete an account
```sh
ironfish accounts:remove MyAccount
```
<Terminal command={Remove} />

### Send a transaction
To send a transaction from the current account
```sh
ironfish accounts:pay
```
<Terminal command={Pay} />

### Rescan transactions
To reset your wallet and attempt to rebuild it from scratch
```sh
ironfish accounts:rescan
```
<Terminal command={Rescan} />

Wait for scanning to get completed
