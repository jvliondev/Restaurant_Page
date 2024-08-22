

const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');

module.exports = {
    mode: "production",
    entry: './src/index.js',
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devtool: "source-map",
    devServer: {
        watchFiles: ["./src/template.html"],
        watchFiles: ['src/**/*'],
        hot: true,
    },
    watchOptions: {
        aggregateTimeout: 300, // Delay before rebuilding (in milliseconds)
        poll: 1000, // Check for changes every second
        ignored: /node_modules/, // Ignore node_modules to reduce CPU usage
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
        }),
        
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.html$/i,
                use: "html-loader",
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ],
    },
};