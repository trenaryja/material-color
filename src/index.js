import chroma from "chroma-js";
import palette from "./palette";
import deltaE from "./deltaE";

export { palette };

/**
 * Get calculated values related to the input color based on the default material palette
 * @param {*} color - any valid {@link https://gka.github.io/chroma.js/#chroma|chroma-js} color input
 * @returns {Object} object with the following properties:
 * - `closestColorArray`: array of colors from the default material palette that contains the closest color to the input
 * - `closestColorIndex`: index of the closest color within the closest color array
 * - `closestColorDelta`: the {@link https://gka.github.io/chroma.js/#chroma-deltae|deltaE} between the input color and the closest color
 * - `closestColor`: the closest color to the input color that is available in the default material palette
 */
export const getClosestMaterialColorValues = (color) => {
	const materialColors = Object.values(palette).map((x) => Object.values(x));
	let closestColorDelta = Infinity,
		closestColorArray = materialColors[0],
		closestColorIndex = -1;
	for (let i = 0; i < materialColors.length; i++) {
		for (let j = 0; j < materialColors[i].length && 0 < closestColorDelta; j++) {
			const delta = deltaE(color, materialColors[i][j]);
			if (delta < closestColorDelta) {
				closestColorDelta = delta;
				closestColorArray = materialColors[i];
				closestColorIndex = j;
			}
		}
	}
	return {
		closestColorArray,
		closestColorIndex,
		closestColorDelta,
		closestColor: closestColorArray[closestColorIndex],
	};
};

/**
 * Generate an array of colors/values based on the input color
 * @param {*} color - any valid {@link https://gka.github.io/chroma.js/#chroma|chroma-js} color input
 * @returns {String[]} array containing 10 colors/values that conform to the material design standards based on the input color
 */
export const createColorArray = (color) => {
	const lightArray = [
		2.048875457,
		5.124792061,
		8.751659557,
		12.07628774,
		13.91449542,
		15.92738893,
		15.46585818,
		15.09779227,
		15.13738673,
		15.09818372,
	];
	const chromaArray = [
		1.762442714,
		4.213532634,
		7.395827458,
		11.07174158,
		13.89634504,
		16.37591477,
		16.27071136,
		16.54160806,
		17.35916727,
		19.88410864,
	];

	let { closestColorArray, closestColorIndex, closestColor } = getClosestMaterialColorValues(color);
	color = chroma(color);
	closestColor = chroma(closestColor);
	const [h, c, l] = color.hcl();
	const [closestH, closestC, closestL] = closestColor.hcl();
	const mode = color.alpha() < 1 ? "rgba" : "rgb";
	const largeChroma = 30 > chroma(closestColorArray[5]).get("hcl.c");
	let lightModifier = 100;
	return closestColorArray.map((x, i) => {
		if (x === closestColor.hex(mode)) {
			lightModifier = Math.max(l - 1.7, 0);
			return color.hex();
		}
		let [xH, xC, xL] = chroma(x).hcl();
		xH = (xH - (closestH - h) + 360) % 360;
		xC = xC - (closestC - c) * (largeChroma ? 1 : Math.min(chromaArray[i] / chromaArray[closestColorIndex], 1.25));
		xL = Math.min(xL - (lightArray[i] / lightArray[closestColorIndex]) * (closestL - l), lightModifier);
		lightModifier = Math.max(xL - 1.7, 0);
		return chroma(xH, xC, xL, "hcl").alpha(color.alpha()).hex(mode);
	});
};

/**
 * Generate an object/dictionary based on the input color
 * @param {*} color - any valid {@link https://gka.github.io/chroma.js/#chroma|chroma-js} color input
 * @returns {Object} object/dictionary containing 10 colors/values that conform to the material design standards based on the input color
 */
export const createColorObject = (color) => {
	const materialIndexValues = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900"];
	const colorArray = createColorArray(color);
	return colorArray.reduce((result, x, i) => {
		result[materialIndexValues[i]] = x;
		return result;
	}, {});
};

/**
 * Generate a palette for the given colorDictionary
 * @param {*} colorDictionary - object/dictionary containing key/value pairs, where each value is a valid {@link https://gka.github.io/chroma.js/#chroma|chroma-js} color input
 * @returns {Object} palette object which contains a color object/dictionary for each key/value pair in the given colorDictionary
 */
export const createPalette = (colorDictionary) => {
	return Object.keys(colorDictionary).reduce((result, key) => {
		result[key] = createColorObject(colorDictionary[key]);
		return result;
	}, {});
};
