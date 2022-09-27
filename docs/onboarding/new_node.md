---
id: start-an-iron-fish-node
title: Spin up a new node
sidebar_label: Spin up a new node
description: Spin up a new node | Iron Fish Onboarding
hide_table_of_contents: true
---

import Terminal from '../../src/theme/components/Terminal/Terminal'
import Start from '../../src/theme/components/Terminal/Start'

## Start the node

Run the Iron Fish CLI
```sh
ironfish start
```

<Terminal command={Start} />

## Using a different directory
By default, the database and configuration files for the Iron Fish node are created in the `~/.ironfish` directory (more details in the [configuration section](configuration.md)). You can use a different directory for the database and configuration files by using the `--datadir` flag.

E.g.
```sh
ironfish start --datadir=~/myCustomFolder
```

## Using a different bootstrap node
By default, your node will connect to the official Iron Fish bootstrap nodes.
If you are developing and want to use a different bootstrap node, you can make the node connect to a different address with the `--bootstrap` flag.

**Do not use a production bootstrap node that isn't officially endorsed by Iron Fish, you might end up on a malicious network.**

E.g.
```sh
ironfish start --bootstrap=localhost:9031
```

## Using a different port
By default, Iron Fish runs on port 9033. If you wish to use a different port, you can use the `--port` flag.

E.g.
```sh
ironfish start --port=9045
```

## Next steps

The node will now sync your local chain with the network. It might take a while for the full sync to be complete. But you can still use the node in the meantime.

## Downloading a chain snapshot

To sync your local chain with the network more quickly you can download a snapshot of the chain database.

```sh
ironfish chain:download
```
