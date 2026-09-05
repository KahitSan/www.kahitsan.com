import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import solid from 'eslint-plugin-solid'
import prettier from 'eslint-config-prettier'

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: { solid },
    rules: {
      ...solid.configs.typescript.rules,
    },
  },
  prettier,
  {
    ignores: ['.vinxi/**', '.output/**', 'node_modules/**'],
  },
  {
    files: ['functions/_worker.js'],
    languageOptions: {
      globals: {
        fetch: 'readonly',
        Headers: 'readonly',
        Response: 'readonly',
        TextDecoder: 'readonly',
        URL: 'readonly',
      },
    },
  },
  {
    files: ['functions/**/*.test.mjs'],
    languageOptions: {
      globals: {
        Request: 'readonly',
        Response: 'readonly',
      },
    },
  }
)
