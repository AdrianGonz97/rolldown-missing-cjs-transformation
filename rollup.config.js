import { defineConfig } from "rollup";
import commonjs from "@rollup/plugin-commonjs";

export default defineConfig({
	input: "index.ts",
	output: {
		dir: "dist-rollup",
		format: "esm",
	},
	platform: "node",
	plugins: [commonjs()],
});
