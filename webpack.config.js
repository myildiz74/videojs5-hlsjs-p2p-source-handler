const webpack = require('webpack');
const {
    version
} = require('./package.json');

module.exports = {
    entry: './lib/main.js',
    output: {
        path: __dirname + '/dist',
        filename: 'videojs5-hlsjs-p2p-source-handler.js'
    },
    module: {
        noParse: /node_modules\/streamroot-p2p\/p2p.js/,
    },
    plugins: [
        new webpack.DefinePlugin({
            __VERSION__: JSON.stringify(`v${version}`)
        }),
        new webpack.optimize.OccurrenceOrderPlugin(true),
        new webpack.optimize.UglifyJsPlugin()
    ]
};
