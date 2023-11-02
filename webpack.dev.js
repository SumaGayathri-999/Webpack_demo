const path = require('path');
const webpack = require('webpack');
require('dotenv').config({
    path: './.env.dev'
});
module.exports = {
    entry : "/src/index.js",
    output : {
        filename : "bundle.js",
        path : path.join(__dirname,'public')
    },
    resolve : {
         extensions : [".js", ".jsx"],
         alias : {
            images: path.join(__dirname,'./src/images')
         }
    },
    module : {
        rules :  [
            {
              test : /\.(js|jsx)$/,
              exclude : /node_modules/,
              loader : 'babel-loader',
            },
            {
                test : /\.s?css$/,
                use : ['style-loader', 'css-loader','sass-loader']
            },
            {
                test : /\.(jpeg|jpg|png|svg)$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins : [
        new webpack.ProvidePlugin({
            React : 'react'
        }),
        new webpack.DefinePlugin({
            "process.env" : JSON.stringify(process.env)
        })
    ],
    mode: "development",
    devtool: 'hidden-source-map',
    devServer : {
        port : 9000,
        historyApiFallback : true
    }

}