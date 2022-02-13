---
id: iron-fish-config-commands
title: Config commands
sidebar_label: Config commands
description: Config | Iron Fish Onboarding
hide_table_of_contents: false
---
import Terminal from '../../src/theme/components/Terminal/Terminal'
import AllCommands from '../../src/theme/components/Terminal/Config/AllCommands'
import Show from '../../src/theme/components/Terminal/Config/Show'
import Get from '../../src/theme/components/Terminal/Config/Get'
import Set from '../../src/theme/components/Terminal/Config/Set'


To check all available commands
```sh
ironfish config
```
<Terminal command={AllCommands} />

### Show Entire Config
Prints out the entire config
```sh
ironfish config:show
```
<Terminal command={Show} />

### Get a config value
Prints out one config value
```sh
ironfish config:get NAME
```
<Terminal command={Get} />

### Set a config value
Sets a value in the config
```sh
ironfish config:set NAME VALUE
```
<Terminal command={Set} />
