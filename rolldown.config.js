import { defineConfig } from "rolldown";

export default defineConfig({
	input: "index.ts",
	output: {
		dir: "dist",
		format: "esm",
	},
	platform: "node",
});
