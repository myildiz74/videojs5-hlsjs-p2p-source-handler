var Hls = require("streamroot-hlsjs-p2p-bundle");
var attachVideojsStreamrootProvider = require('./videojs5-hlsjs-source-handler.js');

attachVideojsStreamrootProvider(window, window.videojs, Hls);
