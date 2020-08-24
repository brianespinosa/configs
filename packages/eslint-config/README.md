# eslint-config

Portable configuration for [Eslint](https://eslint.org/)

## Install

```
yarn add -D @bjeco/eslint-config
```

> This configuration is turn-key and includes all dependencies as well as the preset.

## Setup

Add an `"eslintConfig"` parameter to the package.json file as an object containing an "extends" parameter:

```
{
  "name": "my-library",
  "version": "9000.0.1",
  "eslintConfig": {
    "extends": "@bjeco"
  }
}
```

[Eslint configuration settings](https://eslint.org/docs/user-guide/configuring)
