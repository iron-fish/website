---
id: installation-iron-fish-homebrew
title: Install With Homebrew
sidebar_label: Install with Homebrew
description: Iron Fish Installation | Iron Fish Onboarding
hide_table_of_contents: false

---

import Terminal from '../../src/theme/components/Terminal/Terminal'
import Ironfish from '../../src/theme/components/Terminal/Ironfish'

> **Note:** Our Homebrew tap does not yet support **Apple Silicon/arm64**. We recommend installing Iron Fish [using NPM](http://localhost:3000/docs/onboarding/installation-iron-fish). You can also install Iron Fish [from the source](#from-source) or [use Docker](#using-docker) with `x86_64` support.

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
