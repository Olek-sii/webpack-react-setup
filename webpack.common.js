const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const publicPath = 'http://localhost:8050/static/build/';
const cssName = process.env.NODE_ENV === 'production' ? 'styles-[hash].css' : 'styles.css';
const jsName = process.env.NODE_ENV === 'production' ? 'bundle-[hash].js' : 'bundle.js';

module.exports = {
    entry: ['react-hot-loader/patch', './src/index.js'],
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new ExtractTextPlugin(cssName),
        new webpack.NamedModulesPlugin()
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                }))
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel-loader', 'eslint-loader']
            }
        ]
    },
    output: {
        filename: jsName,
        path: `${__dirname}/static/build/`,
        publicPath
    }
};
