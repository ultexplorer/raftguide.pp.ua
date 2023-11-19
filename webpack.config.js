const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const nodeExternals = require('webpack-node-externals')

module.exports = {
    target: 'node',
    externals: [nodeExternals()],
    externalsPresets: {
        node: true,
    },
    entry: {
        home: './src/static/js/index.js',
        registration: './src/static/js/registration.js',
        user: './src/static/js/user.js',
        404: './src/static/js/404.js',
    },   
    mode: 'development',
    output: {
        filename: "[name].bundle.[chunkhash].js",
        path: path.resolve(__dirname, 'src/frontend/static'),
    },
    devServer: {
        port: 3000,
    },
    plugins: [
        new HTMLPlugin({
            filename: 'index.html',
            template: './src/static/index.html',
            excludeChunks: ['registration', 'user', '404']
        }),
        new HTMLPlugin({
            filename: 'registration.html',
            template: './src/static/registration.html',
            chunks: 'registration',
            excludeChunks: ['home', 'user', '404']
        }),
        new HTMLPlugin({
            filename: 'user.html',
            template: './src/static/user.html',
            chunks: 'user',
            excludeChunks: ['home', 'registration', '404']
        }),
        new HTMLPlugin({
            filename: '404.html',
            template: './src/static/404.html',
            chunks: '404',
            excludeChunks: ['home', 'registration', 'user']
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
        ],
      },
}