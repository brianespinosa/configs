// https://eslint.org/docs/rules/

module.exports = {
  extends: 'eslint:recommended',
  rules: {
    'consistent-return': 'error',
    eqeqeq: 'error',
    'multiline-comment-style': ['error', 'starred-block'],
    'no-alert': 'warn',
    'no-console': 'warn',
    'no-duplicate-imports': 'error',
    'no-implicit-coercion': 'error',
    'no-undef-init': 'error',
    'no-use-before-define': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': 'error',
    'prefer-rest-params': 'warn',
    'prefer-spread': 'warn',
    'sort-imports': [
      'error',
      {
        memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple'],
      },
    ],
    strict: ['error', 'never'],
    'vars-on-top': 'error',
    yoda: 'error',
  },
};
