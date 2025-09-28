module.exports = {
  env: {
    es2022: true,
    node: true,
    jest: true,
    browser: true
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:jest/recommended',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'import/order': ['warn', { 'newlines-between': 'always' }]
  }
};
