module.exports = {
  extends: 'eslint-config-airbnb-base',
  root: true,
  rules: {
    'no-console': 2,
    'import/prefer-default-export': 'off',
  },
  env: {
    browser: true,
  },
};
