const path = require('path');
const { DefinePlugin } = require('webpack');
const Dotenv = require('dotenv-webpack');

require('@babel/polyfill');
const RemovePlugin = require('remove-files-webpack-plugin');

const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: ['@babel/polyfill', './src/index.jsx'],
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'assets/js/[name].[hash:8].bundle.js',
        publicPath: '/',
    },
    devServer: {
        hot: true,
        port: 3000,
        historyApiFallback: true,
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                        },
                    },
                    'css-loader',
                ],
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: 'file-loader?name=assets/images/[name].[hash].[ext]',
            },
        ],
    },

    plugins: [
        new RemovePlugin({
            before: {
                include: ['./dist'],
            },
        }),
        // new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin(),
        new DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
            },
        }),
        new Dotenv({
            path: path.resolve(__dirname, './.env'),
            devtool: 'eval-source-map',
        }),
    ],
    node: {
        fs: 'empty',
    },
};
