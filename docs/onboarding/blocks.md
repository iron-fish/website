---
id: iron-fish-blocks-commands
title: Blocks commands
sidebar_label: Blocks commands
description: Blocks | Iron Fish Onboarding
hide_table_of_contents: false
---
import Terminal from '../../src/theme/components/Terminal/Terminal'
import AllCommands from '../../src/theme/components/Terminal/Blocks/AllCommands'
import GetBlockHashInfo from '../../src/theme/components/Terminal/Blocks/GetBlockHashInfo'



To check all available commands
```sh
ironfish blocks
```
<Terminal command={AllCommands} />

## Get Block Info

Shows the block header of a requested hash
```sh
ironfish blocks:show blockHash
```
<Terminal command={GetBlockHashInfo} />
