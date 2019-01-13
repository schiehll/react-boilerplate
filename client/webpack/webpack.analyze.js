import merge from 'webpack-merge'
import config from './webpack.config.js'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

export default merge(config, {
  plugins: [new BundleAnalyzerPlugin()]
})
