const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'app.bundle.js',
        path: __dirname + '/dist'
    },
    module:{
        rules: [
            {
              test: /\.css$/i,
              use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                  outputPath: 'imgs',
                  esModule: false
                },
              },
              {
                test: /\.html$/i,
                loader: 'html-loader',
              },
              {
                test: /\.handlebars$/,loader: "handlebars-loader"
              }
          ],
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'}),
        new CleanWebpackPlugin(),
    ]
};