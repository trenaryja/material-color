import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";

import pkg from "./package.json";

export default [
	{
		input: "src/index.ts",
		external: ["chroma-js"],
		plugins: [resolve(), commonjs(), typescript(), terser()],
		output: {
			sourcemap: true,
			name: "materialColor",
			file: pkg.browser,
			format: "umd",
			globals: { "chroma-js": "chroma" },
		},
	},
	{
		input: "src/index.ts",
		external: ["chroma-js"],
		plugins: [typescript(), terser()],
		output: [
			{ file: pkg.main, format: "cjs", sourcemap: true },
			{ file: pkg.module, format: "es", sourcemap: true },
		],
	},
];
