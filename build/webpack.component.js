const webpackBaseConfig = require('./webpack.base.js')
const Components = require('../components.json')
const webpackMerge = require('webpack-merge')

const webpackConfig = webpackMerge(webpackBaseConfig, {
  mode: 'production',
  entry: Components,
})

module.exports = webpackConfig
