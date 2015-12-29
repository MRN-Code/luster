'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        'luster-docs': path.join(__dirname, 'docs', 'js', 'index.js'),
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist'),
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
    ],
};

