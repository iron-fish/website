---
id: installation-iron-fish
title: Iron Fish Installation
sidebar_label: Installation
description: Iron Fish Installation | Iron Fish Onboarding
hide_table_of_contents: false
---

import Terminal from '../../src/theme/components/Terminal/Terminal'
import Ironfish from '../../src/theme/components/Terminal/Ironfish'

## Mac OS

### Homebrew

Install Iron Fish from Homebrew

```sh
brew update && brew install ironfish
```

Run the Iron Fish CLI

```sh
ironfish
```

<Terminal command={Ironfish} />

<br />

Iron Fish is now ready to use. Follow the [next step](new_node.md) of the tutorial or jump directly to the [the CLI commands list](cli.md).

## Windows

Windows installer packages will be published soon. In the meantime, you can install Iron Fish directly [from the source](#from-source) or [use Docker](#using-docker).

## Linux

Linux installer packages will be published soon. In the meantime, you can install Iron Fish directly [from the source](#from-source) or [use Docker](#using-docker)

## Using Docker

Run the Docker image from the Github registry, mounting the node's data directory into your home directory and using the host network.

```sh
docker run --rm --tty --interactive --network host --volume $HOME/.ironfish:/root/.ironfish ghcr.io/iron-fish/ironfish:latest
```

Now check the status of your node using IPC.

```sh
docker run --rm --tty --interactive --network host --volume $HOME/.ironfish:/root/.ironfish ghcr.io/iron-fish/ironfish:latest status -f
```

**Note:** Network host is needed for 2 docker containers to connet over IPC.
**Note:** You can also use the RPC layer over TCP by starting your node with `--rpc.tcp`, which connects over the default port 8020.

## From source

### Clone the source code

Download our source code from the [official repository](https://github.com/iron-fish/ironfish)

### Requirements

1. Install [Node.js 14.x](https://nodejs.org/en/download/)
1. Install [Rust](https://www.rust-lang.org/learn/get-started)
1. Install [yarn](https://classic.yarnpkg.com/en/docs/install)

### Install

Install the WebAssembly wrapper generator.

```sh
cargo install wasm-pack
```

Install the Javascript dependencies.

```sh
yarn install
```

### Build

Build the project

```sh
yarn build
```

### Run

Run the Iron Fish CLI

```sh
ironfish-cli/bin/run start
```

(Optional) Create an alias to run Iron Fish

```sh
alias ironfish="ironfish-cli/bin/run"
```
