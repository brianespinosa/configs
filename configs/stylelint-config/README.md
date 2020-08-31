# stylelint-config

![npm (scoped)](https://img.shields.io/npm/v/@bjeco/stylelint-config)

Portable configuration for [Stylelint](https://stylelint.io/)

## Install

```
yarn add -D @bjeco/stylelint-config
```

> This configuration is turn-key and includes all plugin dependencies as well as the config.

## Setup

Add a `"stylelint"` parameter to the package.json file which specifies the shared config:

```json
{
  "name": "my-library",
  "version": "9000.0.1",
  "stylelint": {
    "extends": "@bjeco/stylelint-config"
  }
}
```

## VSCode

For best results, use in conjunction with the VSCode plugin to auto fix any issues related to this configuration

#### Plugin

[stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

#### Settings

```json settings.json
{
  "css.validate": false,
  "less.validate": false,
  "scss.validate": false,
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  }
}
```
