import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'

const resolve = filePath => path.resolve(__dirname, '../../', filePath)

export default {
  entry: [resolve('client/index')],

  output: {
    path: resolve('public'),
    publicPath: '/',
    filename: 'static/[name].[hash].js',
    chunkFilename: 'static/[name].[hash].chunk.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: [resolve('client')],
        loader: 'babel-loader'
      }
    ]
  },

  resolve: {
    modules: ['node_modules', resolve('client')]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('client/index.html'),
      chunksSortMode: 'none'
    })
  ],

  stats: {
    modules: false,
    children: false,
    colors: true
  }
}
