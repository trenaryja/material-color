# Changelog

## [Unreleased]

## [2.1.0] - 2020-08-09

### Changed

-   Simplified `createColorArray` function to significantly increase accuracy, performance, maintainability, and readability.

## [2.0.2] - 2020-08-08

### Added

-   prepublish script to package.json to ensure build happens before publishing

### Changed

-   `getClosestMaterialColors` now uses the [CIEDE2000](https://en.wikipedia.org/wiki/Color_difference#CIEDE2000) formula for calculating the closestDelta value. Will revert back to using [chroma-js deltaE](https://gka.github.io/chroma.js/#chroma-deltae) function when it is updated to CIEDE2000.
-   "chromajs" => "chroma-js" in JSDoc comments

## [2.0.0] - 2020-08-05

### Added

-   This CHANGELOG file
-   `palette` property for direct access to the standard [Material.io](https://material.io/design/color/the-color-system.html#color-usage-and-palettes) color palette
-   `createColorObject` function
-   New `createPalette` function for generating an entire palette from a color dictionary
-   JSDoc comments

### Changed

-   Switch from using webpack to using rollup for library authoring
-   No longer exporting `default`
-   Renamed `getClosestMaterialColors` function to `getClosestMaterialColorValues`
-   Renamed `createPalette` function to `createColorArray`

### Removed

-   `dist` folder from source control
-   All files/folders except `dist` folder and npm default files from published package

## [1.0.0] - 2019-12-06

### Added

-   `createPalette` function
-   `getClosestMaterialColors` function
