import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  // Standard configuration
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  // React configuration
  pluginReact.configs.flat['jsx-runtime'],
  // Prettier configuration
  eslintConfigPrettier,
  eslintPluginPrettier,
]
