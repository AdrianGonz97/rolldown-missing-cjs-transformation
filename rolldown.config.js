import { defineConfig } from "rolldown";

export default defineConfig({
	input: "index.ts",
	output: {
		dir: "dist-rolldown",
		format: "esm",
	},
	platform: "node",
});
