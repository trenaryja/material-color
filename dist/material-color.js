(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("chroma-js"));
	else if(typeof define === 'function' && define.amd)
		define(["chroma-js"], factory);
	else if(typeof exports === 'object')
		exports["materialColor"] = factory(require("chroma-js"));
	else
		root["materialColor"] = factory(root["chroma"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_chroma_js__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/material-color.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/colors.json":
/*!*************************!*\
  !*** ./src/colors.json ***!
  \*************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, default */
/***/ (function(module) {

module.exports = JSON.parse("[[\"#ffebee\",\"#ffcdd2\",\"#ef9a9a\",\"#e57373\",\"#ef5350\",\"#f44336\",\"#e53935\",\"#d32f2f\",\"#c62828\",\"#b71c1c\"],[\"#fce4ec\",\"#f8bbd0\",\"#f48fb1\",\"#f06292\",\"#ec407a\",\"#e91e63\",\"#d81b60\",\"#c2185b\",\"#ad1457\",\"#880e4f\"],[\"#f3e5f5\",\"#e1bee7\",\"#ce93d8\",\"#ba68c8\",\"#ab47bc\",\"#9c27b0\",\"#8e24aa\",\"#7b1fa2\",\"#6a1b9a\",\"#4a148c\"],[\"#ede7f6\",\"#d1c4e9\",\"#b39ddb\",\"#9575cd\",\"#7e57c2\",\"#673ab7\",\"#5e35b1\",\"#512da8\",\"#4527a0\",\"#311b92\"],[\"#e8eaf6\",\"#c5cae9\",\"#9fa8da\",\"#7986cb\",\"#5c6bc0\",\"#3f51b5\",\"#3949ab\",\"#303f9f\",\"#283593\",\"#1a237e\"],[\"#e3f2fd\",\"#bbdefb\",\"#90caf9\",\"#64b5f6\",\"#42a5f5\",\"#2196f3\",\"#1e88e5\",\"#1976d2\",\"#1565c0\",\"#0d47a1\"],[\"#e1f5fe\",\"#b3e5fc\",\"#81d4fa\",\"#4fc3f7\",\"#29b6f6\",\"#03a9f4\",\"#039be5\",\"#0288d1\",\"#0277bd\",\"#01579b\"],[\"#e0f7fa\",\"#b2ebf2\",\"#80deea\",\"#4dd0e1\",\"#26c6da\",\"#00bcd4\",\"#00acc1\",\"#0097a7\",\"#00838f\",\"#006064\"],[\"#e0f2f1\",\"#b2dfdb\",\"#80cbc4\",\"#4db6ac\",\"#26a69a\",\"#009688\",\"#00897b\",\"#00796b\",\"#00695c\",\"#004d40\"],[\"#e8f5e9\",\"#c8e6c9\",\"#a5d6a7\",\"#81c784\",\"#66bb6a\",\"#4caf50\",\"#43a047\",\"#388e3c\",\"#2e7d32\",\"#1b5e20\"],[\"#f1f8e9\",\"#dcedc8\",\"#c5e1a5\",\"#aed581\",\"#9ccc65\",\"#8bc34a\",\"#7cb342\",\"#689f38\",\"#558b2f\",\"#33691e\"],[\"#f9fbe7\",\"#f0f4c3\",\"#e6ee9c\",\"#dce775\",\"#d4e157\",\"#cddc39\",\"#c0ca33\",\"#afb42b\",\"#9e9d24\",\"#827717\"],[\"#fffde7\",\"#fff9c4\",\"#fff59d\",\"#fff176\",\"#ffee58\",\"#ffeb3b\",\"#fdd835\",\"#fbc02d\",\"#f9a825\",\"#f57f17\"],[\"#fff8e1\",\"#ffecb3\",\"#ffe082\",\"#ffd54f\",\"#ffca28\",\"#ffc107\",\"#ffb300\",\"#ffa000\",\"#ff8f00\",\"#ff6f00\"],[\"#fff3e0\",\"#ffe0b2\",\"#ffcc80\",\"#ffb74d\",\"#ffa726\",\"#ff9800\",\"#fb8c00\",\"#f57c00\",\"#ef6c00\",\"#e65100\"],[\"#fbe9e7\",\"#ffccbc\",\"#ffab91\",\"#ff8a65\",\"#ff7043\",\"#ff5722\",\"#f4511e\",\"#e64a19\",\"#d84315\",\"#bf360c\"],[\"#efebe9\",\"#d7ccc8\",\"#bcaaa4\",\"#a1887f\",\"#8d6e63\",\"#795548\",\"#6d4c41\",\"#5d4037\",\"#4e342e\",\"#3e2723\"],[\"#fafafa\",\"#f5f5f5\",\"#eeeeee\",\"#e0e0e0\",\"#bdbdbd\",\"#9e9e9e\",\"#757575\",\"#616161\",\"#424242\",\"#212121\"],[\"#eceff1\",\"#cfd8dc\",\"#b0bec5\",\"#90a4ae\",\"#78909c\",\"#607d8b\",\"#546e7a\",\"#455a64\",\"#37474f\",\"#263238\"]]");

/***/ }),

/***/ "./src/material-color.js":
/*!*******************************!*\
  !*** ./src/material-color.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chroma-js */ "chroma-js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./colors */ "./src/colors.json");
var _colors__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./colors */ "./src/colors.json", 1);



const getClosestMaterialColors = color => {
	let closestColorDelta = Infinity,
		closestColorArray = _colors__WEBPACK_IMPORTED_MODULE_1__[0],
		closestColorIndex = -1;
	for (let i = 0; i < _colors__WEBPACK_IMPORTED_MODULE_1__.length; i++) {
		for (let j = 0; j < _colors__WEBPACK_IMPORTED_MODULE_1__[i].length && 0 < closestColorDelta; j++) {
			const delta = chroma_js__WEBPACK_IMPORTED_MODULE_0___default.a.deltaE(color, _colors__WEBPACK_IMPORTED_MODULE_1__[i][j]);
			if (delta < closestColorDelta) {
				closestColorDelta = delta;
				closestColorArray = _colors__WEBPACK_IMPORTED_MODULE_1__[i];
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

const createPalette = color => {
	const { closestColorArray, closestColorIndex, closestColor } = getClosestMaterialColors(color);
	const hcl = chroma_js__WEBPACK_IMPORTED_MODULE_0___default()(color).hcl();
	const closestHcl = chroma_js__WEBPACK_IMPORTED_MODULE_0___default()(closestColor).hcl();
	const [hueDiff, chromaDiff, lightDiff] = hcl.map((x, i) => closestHcl[i] - x);
	const lightTransformArray = [2.048875457, 5.124792061, 8.751659557, 12.07628774, 13.91449542, 15.92738893, 15.46585818, 15.09779227, 15.13738673, 15.09818372];
	const chromaTransformArray = [1.762442714, 4.213532634, 7.395827458, 11.07174158, 13.89634504, 16.37591477, 16.27071136, 16.54160806, 17.35916727, 19.88410864];
	let lightModifier = 100;
	return closestColorArray.map(function(x, i) {
		if (x === closestColor) {
			lightModifier = Math.max(hcl[2] - 1.7, 0);
			return chroma_js__WEBPACK_IMPORTED_MODULE_0___default()(color).hex();
		}
		const xhcl = chroma_js__WEBPACK_IMPORTED_MODULE_0___default()(x).hcl();
		const result = chroma_js__WEBPACK_IMPORTED_MODULE_0___default()(
			(xhcl[0] - hueDiff + 360) % 360,
			Math.max(0, 30 > chroma_js__WEBPACK_IMPORTED_MODULE_0___default()(closestColorArray[5]).hcl()[1] ? xhcl[1] - chromaDiff : xhcl[1] - chromaDiff * Math.min(chromaTransformArray[i] / chromaTransformArray[closestColorIndex], 1.25)),
			Math.min(Math.max(Math.min(xhcl[2] - (lightTransformArray[i] / lightTransformArray[closestColorIndex]) * lightDiff, lightModifier), 0), 100),
			"hcl",
		);
		lightModifier = Math.max(result.hcl()[2] - 1.7, 0);
		return result.hex();
	});
};

/* harmony default export */ __webpack_exports__["default"] = ({
	getClosestMaterialColors,
	createPalette,
});


/***/ }),

/***/ "chroma-js":
/*!***************************************************************************************************!*\
  !*** external {"commonjs":"chroma-js","commonjs2":"chroma-js","amd":"chroma-js","root":"chroma"} ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_chroma_js__;

/***/ })

/******/ });
});
//# sourceMappingURL=material-color.js.map