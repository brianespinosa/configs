// https://github.com/jest-community/eslint-plugin-jest

module.exports = {
  plugins: ['jest'],
  extends: 'plugin:jest/recommended',
  rules: {
    'jest/consistent-test-it': 'error',
    'jest/lowercase-name': 'error',
    'jest/no-conditional-expect': 'error',
    'jest/no-deprecated-functions': 'error',
    'jest/no-duplicate-hooks': 'error',
    'jest/no-if': 'warning',
    'jest/no-large-snapshots': 'warning',
    'jest/no-test-return-statement': 'error',
    'jest/prefer-called-with': 'warning',
    'jest/prefer-expect-assertions': 'warning',
    'jest/prefer-hooks-on-top': 'warning',
    'jest/prefer-spy-on': 'error',
    'jest/prefer-to-be-null': 'error',
    'jest/prefer-to-be-undefined': 'error',
    'jest/prefer-to-contain': 'error',
    'jest/prefer-to-have-length': 'error',
    'jest/prefer-todo': 'error',
    'jest/require-top-level-describe': 'error',
    'jest/valid-title': 'error',
  },
  overrides: [
    {
      files: ['*.test.js'],
      // Only add jest globals for test files
      env: {
        'jest/globals': true,
      },
    },
  ],
};
