# Changelog

## [Unreleased]

### Added

-   This CHANGELOG file
-   `palette` property for direct access to the standard [Material.io](https://material.io/design/color/the-color-system.html#color-usage-and-palettes) color palette
-   `createColorObject` function
-   New `createPalette` function for generating an entire palette from a color dictionary

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
