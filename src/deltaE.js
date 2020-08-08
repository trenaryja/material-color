import chroma from "chroma-js";
const { abs, atan2, cos, exp, sin, sqrt, PI } = Math;

export default (x1, x2, L = 1, C = 1, H = 1) => {
	const [l1, a1, b1] = chroma(x1).lab();
	const [l2, a2, b2] = chroma(x2).lab();
	var lBarPrime = 0.5 * (l1 + l2);
	var c1 = sqrt(a1 ** 2 + b1 ** 2);
	var c2 = sqrt(a2 ** 2 + b2 ** 2);
	var cBar = 0.5 * (c1 + c2);
	var g = 0.5 * (1 - sqrt(cBar ** 7 / (cBar ** 7 + 25 ** 7)));
	var a1Prime = a1 * (1 + g);
	var a2Prime = a2 * (1 + g);
	var c1Prime = sqrt(a1Prime ** 2 + b1 ** 2);
	var c2Prime = sqrt(a2Prime ** 2 + b2 ** 2);
	var cBarPrime = 0.5 * (c1Prime + c2Prime);
	var h1Prime = (atan2(b1, a1Prime) * 180) / PI;
	if (h1Prime < 0) h1Prime += 360;
	var h2Prime = (atan2(b2, a2Prime) * 180) / PI;
	if (h2Prime < 0) h2Prime += 360;
	var hBarPrime = abs(h1Prime - h2Prime) > 180 ? 0.5 * (h1Prime + h2Prime + 360) : 0.5 * (h1Prime + h2Prime);
	var t =
		1 -
		0.17 * cos((PI * (hBarPrime - 30)) / 180) +
		0.24 * cos((PI * (2 * hBarPrime)) / 180) +
		0.32 * cos((PI * (3 * hBarPrime + 6)) / 180) -
		0.2 * cos((PI * (4 * hBarPrime - 63)) / 180);
	var dhPrime = 0;
	if (abs(h2Prime - h1Prime) <= 180) dhPrime = h2Prime - h1Prime;
	else dhPrime = h2Prime <= h1Prime ? h2Prime - h1Prime + 360 : h2Prime - h1Prime - 360;
	var dLPrime = l2 - l1;
	var dCPrime = c2Prime - c1Prime;
	var dHPrime = 2 * sqrt(c1Prime * c2Prime) * sin((PI * (0.5 * dhPrime)) / 180);
	var sL = 1 + (0.015 * (lBarPrime - 50) ** 2) / sqrt(20 + (lBarPrime - 50) ** 2);
	var sC = 1 + 0.045 * cBarPrime;
	var sH = 1 + 0.015 * cBarPrime * t;
	var dTheta = 30 * exp(-(((hBarPrime - 275) / 25) ** 2));
	var rC = sqrt(cBarPrime ** 7 / (cBarPrime ** 7 + 25 ** 7));
	var rT = -2 * rC * sin((PI * (2 * dTheta)) / 180);
	return sqrt(
		(dLPrime / (L * sL)) * (dLPrime / (L * sL)) +
			(dCPrime / (C * sC)) * (dCPrime / (C * sC)) +
			(dHPrime / (H * sH)) * (dHPrime / (H * sH)) +
			(dCPrime / (C * sC)) * (dHPrime / (H * sH)) * rT,
	);
};
