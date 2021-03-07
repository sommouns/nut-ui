const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const wepbackConfig = {
    mode: process.env.NODE_ENV,
    entry: path.resolve(__dirname, '../examples/index.tsx'),
    module: {
        rules: [
            {
                test: /\.(jpg|jpeg|png|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: '8*1024',
                        name: '[name].[ext]',
                        outputPath: 'images',
                    },
                },
            },
            {
                test: /\.html$/,
                use: 'html-loader',
            },
            {
                test: /(\.js(x?)$|\.ts(x?)$)/,
                exclude: /node_modules/,
                use: [
                    { loader: 'babel-loader' },
                    { loader: 'ts-loader' },
                ],
            },
        ],
    },
    optimization: {
        // splitChunks: {
        //     // minSize: 2000, // 3kb   表示在压缩前的最小模块大小,默认值是30kb
        //     chunks: 'all', // 同时分割同步和异步代码,推荐。
        // },
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../examples/index.html'),
            filename: 'index.html',
        }),
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
};

module.exports = wepbackConfig;
