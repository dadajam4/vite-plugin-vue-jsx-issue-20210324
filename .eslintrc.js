module.exports = {
  extends: ['prettier'],
  overrides: [
    {
      parser: 'eslint-html-parser',
      files: ['*.html'],
    },
    {
      extends: [
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
      ],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'vue/one-component-per-file': 'off',
        'prettier/prettier': [
          'error',
          {
            semi: true,
            endOfLine: 'auto',
          },
        ],
      },

      files: ['*.ts', '*.tsx', '*.js', '*.jsx', '*.vue'],
    },
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: true,
        endOfLine: 'auto',
      },
    ],
  },
  ignorePatterns: [
    '/node_modules/',
    '**/node_modules/',
    '/coverage/',
    '/.customs',
  ],
};
