// import { dirname } from "path";
// import { fileURLToPath } from "url";
// import { FlatCompat } from "@eslint/eslintrc";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const compat = new FlatCompat({
//   baseDirectory: __dirname,
// });

// const eslintConfig = [
//   ...compat.extends("next/core-web-vitals", "next/typescript"),
// ];

// export default eslintConfig;

// .eslintrc.js (Recommended)

module.exports = {
  root: true, // Important: Prevents ESLint from searching up the directory tree
  env: {
    browser: true,
    es2021: true, // Or the appropriate ES version
    node: true,  // If you have any Node.js code
  },
  extends: [
    'eslint:recommended', // Recommended ESLint rules
    'plugin:@typescript-eslint/recommended', // TypeScript rules
    'next/core-web-vitals', // Next.js specific rules
  ],
  parser: '@typescript-eslint/parser', // The parser for TypeScript
  plugins: [
    '@typescript-eslint', // The plugin for TypeScript
  ],
  settings: {
    react: {
      version: 'detect', // Automatically detect React version
    },
  },
  rules: {
    // Your custom rules go here (optional)
    // Example:
    // 'no-unused-vars': 'warn',  // Warn about unused variables
  },
  ignorePatterns: [
    'node_modules/', // Exclude node_modules
    '.next/', // Exclude the .next build directory
  ],
};