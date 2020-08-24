// https://github.com/bkucera/eslint-plugin-json-format

module.exports = {
  plugins: ['json-format'],
  settings: {
    'json/sort-package-json': 'pro',
    // NOTE: This 'json/ignore-files' configuration is not needed if we use ignorePatterns
    // 'json/ignore-files': ['!**/package.json'],
  },
  // FIRST ignore all .json files
  // THEN look only at package.json files (double negative)
  ignorePatterns: ['**/*.json', '!**/package.json'],
};
