const path = require('path');
const webpack = require('webpack');

module.exports = [
  {
    mode: 'development',
    entry: path.resolve(__dirname, './src/index.js'),
    devtool: 'inline-source-map',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, './dist')
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [ 'babel-loader' ]
        },
        {
          test: /\.(sass|css|scss)$/i,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader'
            },
            { loader: 'sass-loader' }
          ]
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader'
            }
          ]
        }
      ]
    },
    resolve: {
      extensions: [ '*', '.js', '.jsx' ]
      // alias: {
      //   Styles: path.resolve(__dirname, 'src/styles'),
      //   Utils: path.resolve(__dirname, 'src/utils')
      // }
    },
    plugins: [ new webpack.HotModuleReplacementPlugin() ],
    devServer: {
      contentBase: path.resolve(__dirname, './dist'),
      hot: true
    }
  }
];