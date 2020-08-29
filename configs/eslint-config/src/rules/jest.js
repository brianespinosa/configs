// https://github.com/jest-community/eslint-plugin-jest

module.exports = {
  extends: 'plugin:jest/recommended',
  overrides: [
    {
      env: {
        'jest/globals': true,
      },
      files: ['*.test.js'],
    },
  ],
  plugins: ['jest'],
  rules: {
    'jest/consistent-test-it': 'error',
    'jest/lowercase-name': 'error',
    'jest/no-conditional-expect': 'error',
    'jest/no-deprecated-functions': 'error',
    'jest/no-duplicate-hooks': 'error',
    'jest/no-if': 'warn',
    'jest/no-large-snapshots': 'warn',
    'jest/no-test-return-statement': 'error',
    'jest/prefer-called-with': 'warn',
    'jest/prefer-expect-assertions': 'warn',
    'jest/prefer-hooks-on-top': 'warn',
    'jest/prefer-spy-on': 'error',
    'jest/prefer-to-be-null': 'error',
    'jest/prefer-to-be-undefined': 'error',
    'jest/prefer-to-contain': 'error',
    'jest/prefer-to-have-length': 'error',
    'jest/prefer-todo': 'error',
    'jest/require-top-level-describe': 'error',
    'jest/valid-title': 'error',
  },
};
