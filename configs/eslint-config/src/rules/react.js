// https://github.com/yannickcr/eslint-plugin-react

module.exports = {
  plugins: ['react'],
  extends: 'plugin:react/recommended',
  rules: {
    'react/prop-types': [
      'error',
      { ignore: ['children'], skipUndeclared: true },
    ],
  },
};
