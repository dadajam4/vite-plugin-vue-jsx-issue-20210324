module.exports = {
  plugins: [
    'stylelint-scss'
  ],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier'
  ],
  rules: {
    'indentation': 2,
    'string-quotes': 'single',
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
  },
  ignoreFiles: [
    '!.eslintrc.js',
    '/node_modules/',
    '**/node_modules/',
    '/coverage/',
    '/.build/',
    '/.build-server/',
    '**/.dynamic/',
    '/.er/',
    '**/.git/',
    '/.memo/',
    '/.migration/',
    '/.schemaspy/',
    '/.secret/',
    '/.store/',
  ],
};
