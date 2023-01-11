---
id: iron-fish-wallet-commands
title: Wallet commands
sidebar_label: Wallet commands
description: Wallet | Iron Fish Onboarding
hide_table_of_contents: false
---
import Terminal from '../../src/theme/components/Terminal/Terminal'
import AllCommands from '../../src/theme/components/Terminal/Wallet/AllCommands'
import AccountCreate from '../../src/theme/components/Terminal/Wallet/Create'
import SelectDefault from '../../src/theme/components/Terminal/Wallet/SelectDefault'
import CheckBalance from '../../src/theme/components/Terminal/Wallet/CheckBalance'
import List from '../../src/theme/components/Terminal/Wallet/List'
import CheckDefault from '../../src/theme/components/Terminal/Wallet/CheckDefault'
import Export from '../../src/theme/components/Terminal/Wallet/Export'
import PubKey from '../../src/theme/components/Terminal/Wallet/PubKey'
import Import from '../../src/theme/components/Terminal/Wallet/Import'
import Remove from '../../src/theme/components/Terminal/Wallet/Remove'
import Send from '../../src/theme/components/Terminal/Wallet/Send'
import Rescan from '../../src/theme/components/Terminal/Wallet/Rescan'
import Transactions from '../../src/theme/components/Terminal/Wallet/Transactions'
import Notes from '../../src/theme/components/Terminal/Wallet/Notes'



To check all available commands
```sh
ironfish wallet --help
```
<Terminal command={AllCommands} />

### Account creation
To create a new account
```sh
ironfish wallet:create
```
<Terminal command={AccountCreate} />

### Default account
To change the default account used by the CLI
```sh
ironfish wallet:use MyAccount
```
<Terminal command={SelectDefault} />

### Import an Account
To import an account from a file:
```sh
ironfish wallet:import filename
```

To import an account via stdin:
```sh
echo {<account json>} | ironfish wallet:import
```
Enter the JSON of the account and press enter

To import an account interactively:
```sh
ironfish wallet:import
```
<Terminal command={Import} />

Enter the details requested by the prompts as shown above

### Export an Account
To export an account to a file:
```sh
ironfish wallet:export AccountName filename
```

To export an account to the terminal:
```sh
ironfish wallet:export AccountName
```
<Terminal command={Export} />

### See current default account
To display the current default account used by the CLI
```sh
ironfish wallet:which
```
<Terminal command={CheckDefault} />

### Accounts list
To see the list of accounts on your node
```sh
ironfish wallet
```
<Terminal command={List} />

### Account key
To see a specific account public key
```sh
ironfish wallet:address
```
<Terminal command={PubKey} />

### Account balance
To display the balance of the account
```sh
ironfish wallet:balance
```
<Terminal command={CheckBalance} />

### Account notes
To display the notes of the account
```sh
ironfish wallet:notes
```
<Terminal command={Notes} />

### Account deletion
To delete an account
```sh
ironfish wallet:remove MyAccount
```
<Terminal command={Remove} />

### Send a transaction
To send a transaction from the current account
```sh
ironfish wallet:send
```
<Terminal command={Send} />

### View transactions
To view transactions from the current account
```sh
ironfish wallet:transactions
```
<Terminal command={Transactions} />

### Rescan transactions
To reset your wallet and attempt to rebuild it from scratch
```sh
ironfish wallet:rescan
```
<Terminal command={Rescan} />

Wait for scanning to get completed
