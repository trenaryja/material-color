const path = require("path");

module.exports = {
	entry: "./src/material-color.js",
	mode: "development",
	devtool: "source-map",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "material-color.js",
		library: "materialColor",
		libraryTarget: "umd",
		libraryExport: "default",
	},
	externals: {
		"chroma-js": {
			commonjs: "chroma-js",
			commonjs2: "chroma-js",
			amd: "chroma-js",
			root: "chroma",
		},
	},
};
