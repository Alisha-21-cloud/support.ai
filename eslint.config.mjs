import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  {
    ignores: ["**/*"],
    rules: {},
  },
  globalIgnores(["**/*"]),
]);
