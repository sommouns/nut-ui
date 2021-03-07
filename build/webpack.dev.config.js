const {merge} = require('webpack-merge');
const common = require('./webpack.base.config');
const path = require('path');

module.exports = merge(common, {
    output: {
        path: path.resolve(__dirname, '../examples/dist'),
        filename: 'main.js',
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(c|le)ss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    },
                    'less-loader',
                ],
            },
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, '../examples'),
        compress: true,
        port: 8888,
        hot: true,
        open: true,
        // proxy: {
        //     '/m-api': {
        //         target: 'http://47.98.159.95',
        //         changeOrigin: true,
        //         ws: true,
        //     },
        // },
    },
});
