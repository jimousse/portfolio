const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = [
  {
    mode: 'development',
    entry: path.resolve(__dirname, './src/index.js'),
    devtool: 'inline-source-map',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, './docs')
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
            { loader: 'style-loader' },
            { loader: 'css-loader' },
            { loader: 'sass-loader' }
          ]
        },
        {
          test: /\.(png|jpe?g|gif|svg|mp4)$/i,
          use: [
            { loader: 'url-loader' }
          ]
        }
      ]
    },
    resolve: {
      extensions: [ '*', '.js', '.jsx' ]
    },
    plugins: [ new webpack.HotModuleReplacementPlugin() ],
    devServer: {
      contentBase: [ path.resolve(__dirname, './docs'), path.resolve(__dirname, './img') ],
      host: 'localhost',
      hot: true
    }
  },
  {
    mode: 'production',
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, './docs')
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
            { loader: 'style-loader' },
            { loader: 'css-loader' },
            { loader: 'sass-loader' }
          ]
        },
        {
          test: /\.(png|jpe?g|gif|svg|mp4)$/i,
          use: [
            { loader: 'url-loader' }
          ]
        }
      ]
    },
    resolve: {
      extensions: [ '*', '.js', '.jsx' ]
    }
    // plugins: [
    //   new BundleAnalyzerPlugin()
    // ]
  }
];