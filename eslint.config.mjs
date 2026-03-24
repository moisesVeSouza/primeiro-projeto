import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import prettier from "eslint-plugin-prettier";
import importPlugin from "eslint-plugin-import";

export default [
  js.configs.recommended,

  ...tseslint.configs.recommended,

  {
    files: ["**/*.{js,ts}"],
    plugins: {
      prettier,
      import: importPlugin,
    },
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": "error",
      "@typescript-eslint/no-unused-vars": ["error", {
        "argsIgnorePattern": "_",
      }],
      "prettier/prettier": "error",

      "import/extensions": [
        "error",
        "ignorePackages",
        {
          ts: "never",
        },
      ],
    },
    settings: {
      "import/resolver": {
        typescript: {},
      },
    },
  },
];
