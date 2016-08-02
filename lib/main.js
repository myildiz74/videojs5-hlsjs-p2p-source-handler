var Hls = require("streamroot-hlsjs-p2p-bundle");
var attachVideojsStreamrootProvider = require('./vjs-hls');

attachVideojsStreamrootProvider(window, window.videojs, Hls);
