---
id: iron-fish-faucet
title: Iron Fish Faucet
sidebar_label: Funding your account
description: Get test $IRON | Funding your account | Iron Fish Onboarding
hide_table_of_contents: true
---

import Terminal from '../../src/theme/components/Terminal/Terminal'
import Faucet from '../../src/theme/components/Terminal/Faucet'

## Iron Fish Faucet

You can receive free $IRON to start testing Iron Fish. You can keep these coins, or send them to friends.

To get these coins, you can run the following command:
```sh
ironfish faucet
```

<Terminal command={Faucet} />
<br />

Once the request is executed, our Faucet will send a small transaction (10 $ORE) to your account. Depending on the volume of requests, it might take several minutes before the coins reaches your account. You can check your balance with the following command:
```sh
ironfish accounts:balance
```

## Next steps

Now that you have coins on your account, you can start sending transactions.
