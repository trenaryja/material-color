import packageJson from "./package.json";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";

const addMin = (file) => `${file.slice(0, file.lastIndexOf("."))}.min${file.slice(file.lastIndexOf("."), file.length)}`;
const minPlugins = [terser()];
const globals = { "chroma-js": "chroma" };

export default [
	{
		input: packageJson.input,
		output: [
			{
				name: packageJson.moduleName,
				file: packageJson.browser,
				format: "umd",
				globals,
			},
			{
				file: packageJson.main,
				format: "cjs",
			},
			{
				file: packageJson.module,
				format: "es",
			},
			{
				name: packageJson.moduleName,
				file: addMin(packageJson.browser),
				format: "umd",
				plugins: minPlugins,
				globals,
			},
			{
				file: addMin(packageJson.main),
				format: "cjs",
				plugins: minPlugins,
			},
			{
				file: addMin(packageJson.module),
				format: "es",
				plugins: minPlugins,
			},
		],
		plugins: [
			babel({
				babelHelpers: "bundled",
			}),
		],
		external: ["chroma-js"],
	},
];
