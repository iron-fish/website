---
id: iron-fish-accounts-commands
title: Accounts commands
sidebar_label: Accounts commands
description: Accounts | Iron Fish Onboarding
hide_table_of_contents: false
---

### Account creation
To create a new account
```sh
ironfish accounts:create
```

### Default account
To change the default account used by the CLI
```sh
ironfish accounts:use MyAccount
```

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
Enter the details requested by the prompts

### Export an Account
To export an account to a file:
```sh
ironfish accounts:export AccountName filename
```

To export an account to the terminal:
```sh
ironfish accounts:export AccountName
```

### See current default account
To display the current default account used by the CLI
```sh
ironfish accounts:which
```

### Accounts list
To see the list of accounts on your node
```sh
ironfish accounts:list
```

### Account key
To see a specific account public key
```sh
ironfish accounts:publickey
```

### Account balance
To display the balance of the account
```sh
ironfish accounts:balance
```

### Account deletion
To delete an account
```sh
ironfish accounts:remove MyAccount
```

### Send a transaction
To send a transaction from the current account
```sh
ironfish accounts:pay
```

### Rescan transactions
To reset your wallet and attempt to rebuild it from scratch
```sh
ironfish accounts:rescan
```
