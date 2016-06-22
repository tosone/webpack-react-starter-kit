const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: "./entry.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: "style!css!csso"
        }, {
            test: /\.md$/,
            loader: "html!markdown"
        }, {
            test: /\.less$/,
            loader: "style!css!csso!less"
        }, {
            test: /\.(jpe?g|png|gif|svg|woff|eot|ttf|woff2)$/i,
            loader: 'url?limit=10000!img?progressive=true'
        }]
    },
    resolve: {
        alias: {
            semanticcs: path.join(__dirname, './bower_components/semantic/dist/semantic.min.css'),
            semanticjs: path.join(__dirname, './bower_components/semantic/dist/semantic.min.js')
        }
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            mangle: {
                except: ['$super', '$', 'exports', 'require']
            }
        }),
        new HtmlWebpackPlugin({
            title:"首页",
            minify:{
                caseSensitive:false,
                collapseBooleanAttributes:true,
                collapseInlineTagWhitespace:false,
                collapseWhitespace:true,
                html5:true,
                minifyCSS:true,
                minifyJS:true,
                minifyURLs:true,
                preserveLineBreaks:false,
                removeComments:true,
                removeEmptyAttributes:true,
                removeTagWhitespace:true,
                useShortDoctype:true,
                keepClosingSlash:true
            }
        }),
        new FaviconsWebpackPlugin('./test.png')
    ]
};
