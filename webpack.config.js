const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].bundle.js',
    },
    // webpack 5 comes with devServer which loads in development mode
    devServer: {
        port: 3000,
        watchContentBase: true,
        historyApiFallback: {
            rewrites: [{ from: /./, to: '/index.html' }],
        },
        proxy: {
            '/auth': 'http://localhost:1499',
            '/api/v1': 'http://localhost:1499',
        },
        contentBase: './',
        hot: true,
    },
    // Rules of how webpack will take our files, compile & bundle them for the browser
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /nodeModules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(svg|png|gif|jpg|bmp)$/,
                use: [`file-loader`],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ filename: 'index.html', template: './src/index.html', chunks: ['index'] }),
        new MiniCssExtractPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: 'public/**/*',
                    force: true,
                },
            ],
        }),
    ],
};
