---
id: iron-fish-chain-commands
title: Chain commands
sidebar_label: Chain commands
description: Chain | Iron Fish Onboarding
hide_table_of_contents: false
---
import Terminal from '../../src/theme/components/Terminal/Terminal'
import AllCommands from '../../src/theme/components/Terminal/Chain/AllCommands'
import Show from '../../src/theme/components/Terminal/Chain/Show'
import Fork from '../../src/theme/components/Terminal/Chain/Fork'
import Export from '../../src/theme/components/Terminal/Chain/Export'




To check all available commands
```sh
ironfish chain --help
```
<Terminal command={AllCommands} />

### Show the heaviest chain
To Show the heaviest chain
```sh
ironfish chain:show
```
<Terminal command={Show} />

### Detect Forks
Tries to detect forks that are being mined
```sh
ironfish chain:forks
```
<Terminal command={Fork} />


### Export Chain
Exports part of the chain database to JSON

You can pass `-p` flag to pass the local where you want to export the JSON
```sh
ironfish chain:export -p ./data.json
```
<Terminal command={Export} />
