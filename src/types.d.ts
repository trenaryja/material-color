type Color = string | number | chroma.Color;

interface ColorDictionary extends Map<string, Color> {}

type MaterialColor = {
	"50": string;
	"100": string;
	"200": string;
	"300": string;
	"400": string;
	"500": string;
	"600": string;
	"700": string;
	"800": string;
	"900": string;
};

interface MaterialPalette extends Map<string, MaterialColor> {}

type OfficialMaterialPalette = {
	red: MaterialColor;
	pink: MaterialColor;
	purple: MaterialColor;
	deepPurple: MaterialColor;
	indigo: MaterialColor;
	blue: MaterialColor;
	lightBlue: MaterialColor;
	cyan: MaterialColor;
	teal: MaterialColor;
	green: MaterialColor;
	lightGreen: MaterialColor;
	lime: MaterialColor;
	yellow: MaterialColor;
	amber: MaterialColor;
	orange: MaterialColor;
	deepOrange: MaterialColor;
	brown: MaterialColor;
	grey: MaterialColor;
	blueGrey: MaterialColor;
};

type MaterialColorInfo = {
	closestColorArray: string[];
	closestColorIndex: number;
	closestColorDelta: number;
	closestColor: string;
};
