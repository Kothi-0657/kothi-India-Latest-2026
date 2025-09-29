import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // ✅ Next.js recommended + TypeScript rules
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // ✅ TypeScript parser & plugin
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
    },
    rules: {
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/explicit-function-return-type": "off",
    },
  },

  // ✅ React plugin for hooks & JSX rules
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      react: require("eslint-plugin-react"),
    },
    rules: {
      "react/react-in-jsx-scope": "off", // Next.js already imports React
      "react/jsx-uses-react": "off",
      "react/jsx-uses-vars": "error",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },

  // ✅ Prettier integration (optional but recommended)
  {
    files: ["**/*.{js,jsx,ts,tsx,json,css,scss,md}"],
    rules: {
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
        },
      ],
    },
    plugins: {
      prettier: require("eslint-plugin-prettier"),
    },
  },

  // ✅ Ignored paths
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;
