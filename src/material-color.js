import chroma from "chroma-js";
import materialColors from "./colors";

export const getClosestMaterialColors = color => {
	let closestColorDelta = Infinity,
		closestColorArray = materialColors[0],
		closestColorIndex = -1;
	for (let i = 0; i < materialColors.length; i++) {
		for (let j = 0; j < materialColors[i].length && 0 < closestColorDelta; j++) {
			const delta = chroma.deltaE(color, materialColors[i][j]);
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

export const createPalette = color => {
	const { closestColorArray, closestColorIndex, closestColor } = getClosestMaterialColors(color);
	const hcl = chroma(color).hcl();
	const closestHcl = chroma(closestColor).hcl();
	const [hueDiff, chromaDiff, lightDiff] = hcl.map((x, i) => closestHcl[i] - x);
	const lightTransformArray = [2.048875457, 5.124792061, 8.751659557, 12.07628774, 13.91449542, 15.92738893, 15.46585818, 15.09779227, 15.13738673, 15.09818372];
	const chromaTransformArray = [1.762442714, 4.213532634, 7.395827458, 11.07174158, 13.89634504, 16.37591477, 16.27071136, 16.54160806, 17.35916727, 19.88410864];
	let lightModifier = 100;
	return closestColorArray.map(function(x, i) {
		if (x === closestColor) {
			lightModifier = Math.max(hcl[2] - 1.7, 0);
			return chroma(color).hex();
		}
		const xhcl = chroma(x).hcl();
		const result = chroma(
			(xhcl[0] - hueDiff + 360) % 360,
			Math.max(0, 30 > chroma(closestColorArray[5]).hcl()[1] ? xhcl[1] - chromaDiff : xhcl[1] - chromaDiff * Math.min(chromaTransformArray[i] / chromaTransformArray[closestColorIndex], 1.25)),
			Math.min(Math.max(Math.min(xhcl[2] - (lightTransformArray[i] / lightTransformArray[closestColorIndex]) * lightDiff, lightModifier), 0), 100),
			"hcl",
		);
		lightModifier = Math.max(result.hcl()[2] - 1.7, 0);
		return result.hex();
	});
};
