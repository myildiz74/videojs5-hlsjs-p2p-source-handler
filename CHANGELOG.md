# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [Dev]

## [Unreleased]
## Changed
- Modifications required to use with Brightcove plugin: Hls.js is initialized lazy, only at point when media is requesting data. This way we can be sure that plugin is initialized already and our player instance carries P2P config information.

## Added
- Publish to NPM

## [0.1.4] - 2016-08-11
### Changed
- PreProd distribution name to videojs5-hlsjs-source-handler

### Fixed
- Starting loading before play (now loads when media element requests data)
