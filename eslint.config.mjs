import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser },rules: {// allow empty catch blocks
      "no-empty": ["warn", { allowEmptyCatch: true }],} },
  tseslint.configs.recommended,
  {
    // React recommended config + React version detection
    ...pluginReact.configs.flat.recommended,
    settings: { react: { version: "detect" } },
  },    {
    ignores: ["node_modules/**", ".next/**", "generated/**", "prisma/generated/**"],
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "no-undef": "off",
      "react/react-in-jsx-scope": "off", // Next.js 13+ app dir
    },
  },
]);
