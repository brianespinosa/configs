// https://prettier.io/docs/en/configuration.html

module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-idiomatic-order',
    'stylelint-config-recommended-scss',

    //  Make sure this is last so we can override any configs that conflict with Prettier
    'stylelint-config-prettier',
  ],
  plugins: ['stylelint-order', 'stylelint-scss'],
  rules: {},
};
