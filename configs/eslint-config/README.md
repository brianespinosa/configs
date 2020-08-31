# eslint-config

![npm (scoped)](https://img.shields.io/npm/v/@bjeco/eslint-config)

Portable configuration for [Eslint](https://eslint.org/)

## Install

```
yarn add -D @bjeco/eslint-config eslint eslint-plugin-jest eslint-plugin-json-format eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-unicorn@19
```

## Setup

Add an `"eslintConfig"` parameter to the package.json file as an object containing an "extends" parameter:

```json
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

- [ ] Add VSCode plugin and settings for auto fix setup
- [ ] Go through existing recommended rule sets and extend them with additional rules
  - [x] eslint core
  - [x] json-format
  - [ ] jsx-a11y
  - [ ] react
  - [x] react-hooks
  - [x] unicorn
- [ ] Figure out [what other lint plugins](https://github.com/dustinspecker/awesome-eslint#plugins) should be added here
