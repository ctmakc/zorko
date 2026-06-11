import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  // Marketing / blog pages contain natural prose — allow apostrophes and quotes in JSX
  {
    files: [
      "app/about/**",
      "app/features/**",
      "app/use-cases/**",
      "app/blog/**",
      "app/compare/**",
      "app/ru/**",
      "components/marketing/**",
    ],
    rules: {
      "react/no-unescaped-entities": "off",
    },
  },
];

export default eslintConfig;
