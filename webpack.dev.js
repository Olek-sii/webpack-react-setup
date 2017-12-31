const common = require('./webpack.common.js');
const merge = require('webpack-merge');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './static/build',
        headers: { 'Access-Control-Allow-Origin': '*' }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loaders: ['react-hot-loader/webpack', 'babel-loader', 'eslint-loader'],
                exclude: [/node_modules/, /public/]
            }
        ]
    }
});
