import { defineConfig } from "rollup";
import commonjs from "@rollup/plugin-commonjs";

export default defineConfig({
	input: "entry.js",
	output: {
		dir: "dist-rollup",
		format: "esm",
		entryFileNames: "index.js",
	},
	platform: "node",
	plugins: [commonjs()],
});
