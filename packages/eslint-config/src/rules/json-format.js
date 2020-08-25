// https://github.com/bkucera/eslint-plugin-json-format

module.exports = {
  plugins: ['json-format'],
  // Eslint does not normally see .json files. This makes it see package.json files specifically with this rule
  overrides: [
    {
      files: ['package.json'],
      settings: {
        'json/sort-package-json': 'pro',
      },
    },
  ],
};
