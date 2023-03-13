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

1. Install [Node.js 18 (on Windows, choose 64-bit/x64)](https://nodejs.org/en/download/).

> **Note:** On Mac and Linux, You can also install Node.js through [nvm](https://nvm.sh).

2. Next, run the following:

```sh
npm install -g ironfish
```

You're all set! Run the Iron Fish CLI:

```sh
ironfish
```

<Terminal command={Ironfish} />

<br />

When new Iron Fish versions are released, you can update through NPM:

```sh
npm install -g ironfish
```

Iron Fish is now ready to use. Follow the [next step](new_node.md) of the tutorial or jump directly to the [CLI commands list](cli.md).

## Alternative Installation Methods

You can also get started with Iron Fish by [using Docker](http://localhost:3000/docs/onboarding/installation-iron-fish-docker) or [running from source](http://localhost:3000/docs/onboarding/installation-iron-fish-source). If you are using an Intel-based macOS system, [we support Homebrew](http://localhost:3000/docs/onboarding/installation-iron-fish-homebrew) as an alternative installation method.