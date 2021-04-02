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
brew tap iron-fish/brew && brew install ironfish
```

Run the Iron Fish CLI
```sh
ironfish
```

<Terminal command={Ironfish} />

<br />

Iron Fish is now ready to use. Follow the [next step](new_node.md) of the tutorial or jump directly to the [the CLI commands list](cli.md).

## Windows
Windows installer packages will be published soon. In the meantime, you can install Iron Fish directly [from the source](#from-source)

## Linux
Linux installer packages will be published soon. In the meantime, you can install Iron Fish directly [from the source](#from-source)

## Using Docker
Docker images will be published soon. In the meantime, you can install Iron Fish directly [from the source](#from-source)

## From source

### Clone the source code
Download our source code from the [official repository](https://github.com/iron-fish/ironfish)

### Requirements
1. Install [Node.js 12.x](https://nodejs.org/en/download/)
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
