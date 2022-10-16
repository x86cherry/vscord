import { defineConfig } from "tsup";

export default defineConfig({
    target: "node16",
    entry: ["src/extension.ts"],
    external: ["vscode"],
    minify: true
});