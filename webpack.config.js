const path = require('path');
const webpack = require('webpack');


module.exports = {
    entry: ['./app/index.js'],
    output: {
        path: path.resolve(__dirname,'./build'),
        filename: 'bundle.js'
    },
    devServer:{
        contentBase:'./build'
    },
    module: {
        rules: [{
            test: /\.ts$/,
            exclude: [/node_modules/],
            use: [{
                loader:'babel-loader',
                options: { presets: ['es2015'] }
            }]
        }]
    }
}