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

```
{
  "name": "my-library",
  "version": "9000.0.1",
  "stylelint": {
    "extends": "@bjeco/stylelint-config"
  }
}
```

[Prettier configuration settings](https://prettier.io/docs/en/configuration.html#sharing-configurations)
