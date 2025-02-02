// import type { NextConfig } from "next";
// import { hostname } from "os";

// const nextConfig: NextConfig = {
//   /* config options here */
// images:{
//   remotePatterns:[
// {
//   protocol:'https',
//   hostname:'cdn.sanity.io'
// }
//   ]
// }
   
// };

// export default nextConfig;

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // Your custom rules here (optional)
  },
  ignorePatterns: [
    'node_modules/',
    '.next/',
  ],
};
