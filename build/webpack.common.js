const webpackBaseConfig = require('./webpack.base.js')
const webpackMerge = require('webpack-merge')

const webpackConfig = webpackMerge(webpackBaseConfig, {
  mode: 'production',
  entry: {
    index: './src/index.js',
  },
})

module.exports = webpackConfig
