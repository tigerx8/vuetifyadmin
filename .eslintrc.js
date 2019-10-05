// .eslintrc.js
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    // some rules
    'no-console': 'off',
  },
  parserOptions: {
    'parser': 'babel-eslint'
  }
}