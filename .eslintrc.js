module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['jest', '@typescript-eslint/eslint-plugin'],
  extends: [
    '@react-native',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
    'eslint:recommended',
    'plugin:jest/recommended',
  ],
  root: true,
  env: {
    jest: true,
    'jest/globals': true,
  },
  ignorePatterns: [
    '.eslintrc.js',
    'node_modules/',
    '**/node_modules/',
    '/**/node_modules/*',
    'out/',
    'dist/',
    'build/',
    'metro.config.js'
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    "arrow-body-style": ["error", "as-needed"],
    "react/self-closing-comp": ["error", { "component": true }],
  },
};
