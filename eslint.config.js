// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');
const simpleImportSort = require("eslint-plugin-simple-import-sort");
const pluginJest = require('eslint-plugin-jest');

module.exports = defineConfig([
  expoConfig,
  eslintPluginPrettierRecommended,
  {
    ignores: ['dist/*'],
    plugins: {
      "simple-import-sort": simpleImportSort,
      jest: pluginJest
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "import/first": "error",
      "import/newline-after-import": "error",
      "import/no-duplicates": "error",
      // below rules are from eslint-plugin-jest
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'warn',
      'jest/valid-expect': 'error',
    },
    // eslint for jest
    files: ['**/*.spec.js', '**/*.test.js', '**/*.spec.ts', '**/*.test.ts'],
    languageOptions: {
      globals: pluginJest.environments.globals.globals,
    },
  },
]);
