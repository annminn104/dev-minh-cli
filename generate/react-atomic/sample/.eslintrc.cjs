/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint-config-prettier',
    'prettier',
    'plugin:storybook/recommended'
  ],
  plugins: ['prettier'],
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      node: {
        paths: [path.resolve(__dirname, '')],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      },
      typescript: {
        project: path.resolve(__dirname, './tsconfig.json')
      }
    }
  },
  env: {
    node: true
  },
  rules: {
    // Check rule no-unused-vars change state error
    '@typescript-eslint/no-unused-vars': 'error',
    // Disable rule import win react jsx
    'react/react-in-jsx-scope': 'off',
    // Warning <a target='_blank'> not include rel="noreferrer"
    'react/jsx-no-target-blank': 'warn',
    // Tắt props types xài props của typescript để xác định propsType
    'react/prop-types': 'off',
    // Tat81 react hooks check exhaustive-deps
    'react-hooks/exhaustive-deps': 'off',
    // Setup auto sort import
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true }
      }
    ],
    // Rule prettier (copy from file .prettierrc)
    'prettier/prettier': [
      'warn',
      {
        arrowParens: 'always',
        semi: true,
        trailingComma: 'none',
        tabWidth: 2,
        endOfLine: 'auto',
        useTabs: false,
        singleQuote: true,
        printWidth: 100,
        jsxSingleQuote: true
      }
    ]
  }
};
