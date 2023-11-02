const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
require('dotenv').config({
    path: './.env.prod'
});


module.exports = {
    entry : "/src/index.js",
    output : {
        filename : "bundle.js",
        path : path.join(__dirname,'build')
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
                use : [MiniCssExtractPlugin.loader, 'css-loader','sass-loader'],
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
        }),
        new HtmlWebpackPlugin({
             template : 'public/template.html'
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css",
          }),
        
    ],
    optimization: {
        minimizer: [
          new CssMinimizerPlugin(),
        ],
      },
    
    mode: "production",
    devtool: 'hidden-source-map',
}