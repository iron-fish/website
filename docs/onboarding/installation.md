---
id: installation-iron-fish
title: Iron Fish Installation
sidebar_label: Installation
description: Iron Fish Installation | Iron Fish Onboarding
hide_table_of_contents: false
---

import Terminal from '../../src/theme/components/Terminal/Terminal'
import Ironfish from '../../src/theme/components/Terminal/Ironfish'

## Recommended Installation
We recommend installing Iron Fish through NPM.

```sh
npm install -g ironfish
```

> **Note:** If you do not have NPM on your system, you may need to install [Node.js](https://nodejs.org/en/download/).

You're all set! Run the Iron Fish CLI:

```sh
ironfish
```

<Terminal command={Ironfish} />

<br />

Iron Fish is now ready to use. Follow the [next step](new_node.md) of the tutorial or jump directly to the [the CLI commands list](cli.md).

## Alternative Installation Methods
You can also get started with Iron Fish by using Docker or running from source. If you are using an Intel-based macOS system, we support Homebrew as an alternative installation method.
### Using Docker

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

### From source

First, head over to GitHub to clone our [official repository](https://github.com/iron-fish/ironfish). Once that's done, follow the initial setup steps in the [README](https://github.com/iron-fish/ironfish#initial-setup) to install prerequisites, then head to the [CLI README](https://github.com/iron-fish/ironfish/tree/master/ironfish-cli#use-scenarios) to run the CLI.

### Homebrew (macOS)

> **Note:** Our Homebrew tap does not yet support **M1/arm64**. However, you can install Iron Fish directly [from the source](#from-source) or [use Docker](#using-docker) with x86_64 support.

Start by adding our Homebrew tap and installing Iron Fish.

```sh
brew tap iron-fish/brew && brew install ironfish
```

You're all set! Run the Iron Fish CLI:

```sh
ironfish
```

When updates are available, update Brew, then reinstall Iron Fish.

```sh
brew update && brew uninstall ironfish && brew install ironfish
```
