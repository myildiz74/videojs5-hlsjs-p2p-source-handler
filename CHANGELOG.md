# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [Dev]

## [Unreleased]

## [0.2.20] - 2016-12-08
### Updated
- hlsjs-p2p-bundle version to ^4.0.0

## [0.2.12] - 2016-11-10
### Fixed
- Broken fallback logic when not in autoplay

## [0.2.4] - 2016-10-18
### Fixed
- Broken playback when video source was set in video tag. It was caused by source handler disposal, triggered by video.js. See comments in `lib/videojs5-hlsjs-source-handler.js` for detailed explanation.

### Removed
- Quality picker dependency in `package.json` and initialization in test page. It's usage was removed in modifications, required for the Brightcove plugin.

## [0.2.3] - 2016-09-27
### Changed
- Modifications required to use with Brightcove plugin: Hls.js is initialized lazy, only at point when media is requesting data. This way we can be sure that plugin is initialized already and our player instance carries P2P config information.

### Added
- Publish to NPM

## [0.1.4] - 2016-08-11
### Changed
- PreProd distribution name to videojs5-hlsjs-source-handler

### Fixed
- Starting loading before play (now loads when media element requests data)
[0.2.35]: https://github.com/streamroot/videojs5-hlsjs-p2p-source-handler/compare/v0.2.20...v0.2.35