import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"
import stylistic from "@stylistic/eslint-plugin"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [stylistic.configs.customize({
  indent: 2,
  quotes: "double",
  semi: false,
  jsx: true,
  // Add other stylistic options as needed
}), ...compat.extends(
  "next/core-web-vitals",
  "next/typescript",
), {
  plugins: {
    "@stylistic": stylistic,
  },
}]

export default eslintConfig
