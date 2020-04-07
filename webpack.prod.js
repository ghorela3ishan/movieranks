const path = require("path");
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode:'production',
    devtool: false,
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "",
        filename: '[name].[hash].js'
      },
      performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }
});