import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

// Your config will be an array of objects
export default [
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/docs/**',
      '.github/',
      'vitest.config.ts',
    ],
  },
  {
    // Specify language options for TypeScript and JSX files
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        project: './tsconfig.app.json', // needed for some TS rules
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      // Recommended TS rules:
      ...tsPlugin.configs['recommended'].rules,
      // Recommended React rules:
      ...reactPlugin.configs['recommended'].rules,
      // Recommended React Hooks rules:
      ...reactHooksPlugin.configs['recommended'].rules,
      // Prettier integration:
      'prettier/prettier': ['error'],

      // Custom tweaks (example)
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
      'react/react-in-jsx-scope': 'off',
      'react/no-unescaped-entities': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },

  // You can add overrides for other file types if you want (e.g. .js)
];

// import js from "@eslint/js";
// import globals from "globals";
// import parser from "@typescript-eslint/parser";
// import tsPlugin from "@typescript-eslint/eslint-plugin";
// import reactHooks from "eslint-plugin-react-hooks";
// import reactRefresh from "eslint-plugin-react-refresh";
// import prettierPlugin from "eslint-plugin-prettier";

// export default [
//   {
//     ignores: ["dist"],
//   },

//   js.configs.recommended,

//   {
//     files: ["**/*.{ts,tsx}"],
//     languageOptions: {
//       parser,
//       parserOptions: {
//         ecmaVersion: 2020,
//         sourceType: "module",
//         ecmaFeatures: {
//           jsx: true,
//         },
//       },
//       globals: globals.browser,
//     },
//     plugins: {
//       "@typescript-eslint": tsPlugin,
//       "react-hooks": reactHooks,
//       "react-refresh": reactRefresh,
//       prettier: prettierPlugin,
//     },
//     rules: {
//       ...reactHooks.configs.recommended.rules,
//       "react-refresh/only-export-components": [
//         "warn",
//         { allowConstantExport: true },
//       ],
//       "react/react-in-jsx-scope": "off",
//       "prettier/prettier": [
//         "error",
//         { singleQuote: true, trailingComma: "all" },
//       ],
//     },
//   },
// ];

// Default

// import js from '@eslint/js'
// import globals from 'globals'
// import reactHooks from 'eslint-plugin-react-hooks'
// import reactRefresh from 'eslint-plugin-react-refresh'
// import tseslint from 'typescript-eslint'

// export default tseslint.config(
//   { ignores: ['dist'] },
//   {
//     extends: [js.configs.recommended, ...tseslint.configs.recommended],
//     files: ['**/*.{ts,tsx}'],
//     languageOptions: {
//       ecmaVersion: 2020,
//       globals: globals.browser,
//     },
//     plugins: {
//       'react-hooks': reactHooks,
//       'react-refresh': reactRefresh,
//     },
//     rules: {
//       ...reactHooks.configs.recommended.rules,
//       'react-refresh/only-export-components': [
//         'warn',
//         { allowConstantExport: true },
//       ],
//     },
//   },
// )
