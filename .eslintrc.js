module.exports = {
  extends: ['react-app'],
  plugins: ['prettier'],
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'react/prefer-stateless-function': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
  },
};
