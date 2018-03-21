const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const resolve = filePath => path.resolve(__dirname, '../', filePath)

module.exports = {
  entry: resolve('src/index'),

  output: {
    path: resolve('dist'),
    publicPath: '/',
    chunkFilename: '[name].chunk.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: [resolve('src')],
        loader: 'babel-loader'
      }
    ]
  },

  resolve: {
    modules: ['node_modules', resolve('src')]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('src/index.html'),
      chunksSortMode: 'none'
    })
  ],

  stats: {
    modules: false,
    children: false
  }
}
