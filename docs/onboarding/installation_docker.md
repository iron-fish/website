---
id: installation-iron-fish-docker
title: Install Using Docker
sidebar_label: Install using Docker
description: Iron Fish Installation | Iron Fish Onboarding
hide_table_of_contents: false

---

import Terminal from '../../src/theme/components/Terminal/Terminal'
import Ironfish from '../../src/theme/components/Terminal/Ironfish'

Run the Docker image from the GitHub registry, mounting the node's data directory into your home directory and using the host network. (Replace `<home-directory>` with `%USERPROFILE%` on Windows or `$HOME` on others)

```sh
docker run --rm --tty --interactive --network host --volume <home-directory>/.ironfish:/root/.ironfish ghcr.io/iron-fish/ironfish:latest
```

Now check the status of your node using IPC, again replacing `<home-directory>` according to your OS.

```sh
docker run --rm --tty --interactive --network host --volume <home-directory>/.ironfish:/root/.ironfish ghcr.io/iron-fish/ironfish:latest status -f
```

**Note:** `--network host` is needed for 2 Docker containers to connect over IPC.

**Note:** You can also use the RPC layer over TCP by starting your node with `--rpc.tcp`, which connects over the default port 8020.

#### Updating

To update your image, use `docker pull` before running the image.

```sh
docker pull ghcr.io/iron-fish/ironfish:latest
```
