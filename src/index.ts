import chroma from "chroma-js";
import palette from "./palette";
import deltaE from "./deltaE";

export { palette };

export const getMaterialColorInfo = (color: Color): MaterialColorInfo => {
	const officialMaterialColors = Object.values(palette).map((x) => Object.values(x));
	let closestColorDelta = Infinity,
		closestColorArray = officialMaterialColors[0],
		closestColorIndex = -1;
	for (let i = 0; i < officialMaterialColors.length; i++) {
		for (let j = 0; j < officialMaterialColors[i].length && 0 < closestColorDelta; j++) {
			const delta = deltaE(color, officialMaterialColors[i][j]);
			if (delta < closestColorDelta) {
				closestColorDelta = delta;
				closestColorArray = officialMaterialColors[i];
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

export const createMaterialColorArray = (color: Color): string[] => {
	const lightArray = [
		2.048875457, 5.124792061, 8.751659557, 12.07628774, 13.91449542, 15.92738893, 15.46585818, 15.09779227,
		15.13738673, 15.09818372,
	];
	const chromaArray = [
		1.762442714, 4.213532634, 7.395827458, 11.07174158, 13.89634504, 16.37591477, 16.27071136, 16.54160806,
		17.35916727, 19.88410864,
	];

	let { closestColorArray, closestColorIndex, closestColor } = getMaterialColorInfo(color);
	const chromaColor = chroma(color);
	const chromaClosestColor = chroma(closestColor);
	const [h, c, l] = chromaColor.hcl();
	const [closestH, closestC, closestL] = chromaClosestColor.hcl();
	const mode = chromaColor.alpha() < 1 ? "rgba" : "rgb";
	const largeChroma = 30 > chroma(closestColorArray[5]).get("hcl.c");
	let lightModifier = 100;
	return closestColorArray.map((x, i) => {
		if (x === chromaClosestColor.hex(mode)) {
			lightModifier = Math.max(l - 1.7, 0);
			return chromaColor.hex();
		}
		let [xH, xC, xL] = chroma(x).hcl();
		xH = (xH - (closestH - h) + 360) % 360;
		xC = xC - (closestC - c) * (largeChroma ? 1 : Math.min(chromaArray[i] / chromaArray[closestColorIndex], 1.25));
		xL = Math.min(xL - (lightArray[i] / lightArray[closestColorIndex]) * (closestL - l), lightModifier);
		lightModifier = Math.max(xL - 1.7, 0);
		return chroma(xH, xC, xL, "hcl").alpha(chromaColor.alpha()).hex(mode);
	});
};

export const createMaterialColor = (color: Color): MaterialColor => {
	const colorArray = createMaterialColorArray(color);
	return {
		"50": colorArray[0],
		"100": colorArray[1],
		"200": colorArray[2],
		"300": colorArray[3],
		"400": colorArray[4],
		"500": colorArray[5],
		"600": colorArray[6],
		"700": colorArray[7],
		"800": colorArray[8],
		"900": colorArray[9],
	};
};

export const createMaterialPalette = (colorDictionary: ColorDictionary): MaterialPalette => {
	const result = new Map<string, MaterialColor>() as MaterialPalette;
	colorDictionary.forEach((value, key) => result.set(key, createMaterialColor(value)));
	return result;
};
