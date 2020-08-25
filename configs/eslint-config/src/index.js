// https://eslint.org/docs/user-guide/configuring

module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    './rules/eslint.js',
    './rules/jest.js',
    './rules/json-format.js',
    './rules/jsx-a11y.js',
    './rules/react-hooks.js',
    './rules/react.js',
    './rules/unicorn.js',
  ],
};
