const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        clean: true
    },
    devtool: 'source-map',
    devServer: {
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules\/(?!@olton\/ribbon-menu-react)/,
                loader: 'babel-loader',
                options:{
                    presets:[ "@babel/preset-react"]
                }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.svg$/,
                type: "asset",
                use: "svgo-loader"
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: "src/index.html"
        })
    ],
    mode: "production",
    performance: {
        hints: false,
    }
}