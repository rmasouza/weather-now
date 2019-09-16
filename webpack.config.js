'use strict';
const path = require('path');
const compression = require('compression');
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InlineSourcePlugin = require('html-webpack-inline-source-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const Dotenv = require('dotenv-webpack');

const sourcePath = path.join(__dirname, './src');
const outputhPath = path.resolve(__dirname, './dist');

dotenv.config();
console.log(process.env.NODE_ENV);

const webpackConfig = {
    context: sourcePath,
    entry: {
        main: './index.tsx',
    },
    output: {
        path: outputhPath,
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name]-[chunkhash].js',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
        ],
    },
    mode: process.env.NODE_ENV,
    optimization: {
        minimizer: [
            new TerserPlugin({
                test: /\.js(\?.*)?$/i,
            }),
        ],
        runtimeChunk: true,
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                reactVendors: {
                    test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                    name: 'react~vendors',
                },
            },
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'assets/index.html',
            favicon: 'assets/favicon_32x32.png',
            inlineSource: 'runtime~.+\\.js',
        }),
        new InlineSourcePlugin(),
        new WorkboxWebpackPlugin.GenerateSW({
            clientsClaim: true,
            importWorkboxFrom: 'cdn',
            runtimeCaching: [
                {
                    urlPattern: /^https?.*/,
                    handler: 'NetworkFirst',
                    options: {
                        cacheName: 'WheatherNowCache',
                        expiration: {
                            maxEntries: 200,
                        },
                    },
                },
            ],
        }),
        new CompressionPlugin(),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
        }),
        new WebpackPwaManifest({
            name: 'Wheather Now',
            short_name: 'Wheather Now',
            description: 'My Awesome Wheather Now Progressive Web App!',
            background_color: '#fff',
            theme_color: '#69a3ff',
            display: 'standalone',
            start_url: '.',
            orientation: 'portrait',
            icons: [
                {
                    src: path.resolve('src/assets/icon-512x512.png'),
                    sizes: [512],
                    ios: true,
                },
                {
                    src: path.resolve('src/assets/icon-384x384.png'),
                    sizes: [384],
                    ios: true,
                },
                {
                    src: path.resolve('src/assets/icon-192x192.png'),
                    sizes: [192],
                    ios: true,
                },
                {
                    src: path.resolve('src/assets/icon-144x144.png'),
                    sizes: [144],
                    ios: true,
                },
            ],
            ios: {
                // 'apple-touch-icon': string | IosAppleTouchIcon,
                // 'apple-touch-startup-image': string,
                'apple-mobile-web-app-title': 'Wheather App',
                'apple-mobile-web-app-capable': true,
                'apple-mobile-web-app-status-bar-style': 'black',
            },
        }),
        new Dotenv({
            path: path.join(__dirname, './.env'),
            systemvars: true,
        }),
    ],
    node: {
        module: 'empty',
        dgram: 'empty',
        dns: 'mock',
        fs: 'empty',
        http2: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty',
    },
    devServer: {
        compress: true,
        port: process.env.PORT,
        before(app) {
            app.use(compression({}));
        },
    },
};

module.exports = webpackConfig;
