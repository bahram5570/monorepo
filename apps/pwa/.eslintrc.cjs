module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  overrides: [
    {
      env: {
        node: true,
        jest: true,
      },
      files: ['.eslintrc.{js,cjs}'],
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-undef': 'off',
    'prefer-const': 'off',
    'no-unused-vars': 'off',
    'react/prop-types': 'off',
    'no-multi-spaces': 'warn',
    'no-useless-escape': 'off',
    'prettier/prettier': 'off',
    'react/display-name': 'off',
    'no-case-declarations': 'off',
    'no-duplicate-imports': 'error',
    'react/no-children-prop': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-unknown-property': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-multiple-empty-lines': ['warn', { max: 1 }],
    quotes: ['warn', 'single', { allowTemplateLiterals: true }],
  },
};
