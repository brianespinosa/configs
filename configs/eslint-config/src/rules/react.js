// https://github.com/yannickcr/eslint-plugin-react

module.exports = {
  extends: 'plugin:react/recommended',
  plugins: ['react'],
  rules: {
    'react/prop-types': [
      'error',
      {
        ignore: ['children'],
        skipUndeclared: true,
      },
    ],
  },
};
