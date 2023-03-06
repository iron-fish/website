---
id: installation-iron-fish
title: Iron Fish Installation
sidebar_label: Install
description: Iron Fish Installation | Iron Fish Onboarding
hide_table_of_contents: false

---

import Terminal from '../../src/theme/components/Terminal/Terminal'
import Ironfish from '../../src/theme/components/Terminal/Ironfish'

## Recommended Installation

We recommend installing Iron Fish through [NPM](https://nodejs.org/en/download/).

```sh
npm install -g ironfish
```

> **Note:** If you do not have NPM on your system, you may need to install [Node.js](https://nodejs.org/en/download/). We require version 18 - you may also want to check out [nvm](https://nvm.sh).

You're all set! Run the Iron Fish CLI:

```sh
ironfish
```

<Terminal command={Ironfish} />

<br />

When new versions are announced, you can update through NPM:

```sh
npm install -g ironfish
```

Iron Fish is now ready to use. Follow the [next step](new_node.md) of the tutorial or jump directly to the [CLI commands list](cli.md).

## Alternative Installation Methods

You can also get started with Iron Fish by using Docker or running from source. If you are using an Intel-based macOS system, we support Homebrew as an alternative installation method.s