import { defineConfig } from "rolldown";

export default defineConfig({
	input: "entry.js",
	output: {
		dir: "dist-rolldown",
		format: "esm",
		entryFileNames: "index.js",
	},
	platform: "node",
});
