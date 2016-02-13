var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'cheap-eval-source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:8000',
        'webpack/hot/dev-server',
        './src/index'
    ],
    output: {
        path: __dirname + '/dist',
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loaders: ["style","css"]
            }, {
            test: /\.js$/,
            loaders: ['babel'],
            include: __dirname + '/src'
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    devServer: {
        contentBase: './dist',
        hot: true
    }
};