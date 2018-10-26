const {VueLoaderPlugin} = require('vue-loader')
const webpack = require('webpack')
const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './front/main.js',
  output: {
    filename: './bundle.js'
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        exclude: /(node_modules)/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: 'babel-loader',
            css: ExtractTextPlugin.extract({
              use: 'css-loader',
              fallback: 'vue-style-loader' // <- это внутренняя часть vue-loader, поэтому нет необходимости его устанавливать через NPM
            })
          }
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlPlugin({
      template: './front/index.html',
      inject: 'body'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('style.css')
  ],
  devServer: {
    port: 3000
  }
}

//chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security