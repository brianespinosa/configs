# eslint-config

![npm (scoped)](https://img.shields.io/npm/v/@bjeco/eslint-config)

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

## Reference

[Eslint configuration settings](https://eslint.org/docs/user-guide/configuring)

## TODO

- [ ] Go through existing recommended rule sets and extend them with additional rules
  - [ ] eslint core
  - [x] json-format
  - [ ] jsx-a11y
  - [ ] react
  - [x] react-hooks
  - [ ] unicorn
- [ ] Figure out [what other lint plugins](https://github.com/dustinspecker/awesome-eslint#plugins) should be added here