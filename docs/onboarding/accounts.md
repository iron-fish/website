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
ironfish accounts:publicKey
```

### Account balance
To display the balance of the account
```sh
ironfish accounts:balance
```

### Send a transaction
To send a transaction from the current account
```sh
ironfish accounts:pay
```

### Account deletion
To delete an account
```sh
ironfish accounts:remove MyAccount
```
