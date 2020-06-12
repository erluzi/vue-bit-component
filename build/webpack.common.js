const webpackBaseConfig = require('./webpack.base.js')
const webpackMerge = require('webpack-merge')
const CopyPlugin = require('copy-webpack-plugin')

const webpackConfig = webpackMerge(webpackBaseConfig, {
  mode: 'production',
  entry: {
    index: './src/index.js',
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'src/scss', to: 'scss' },
        { from: 'src/less', to: 'less' },
      ],
    }),
  ]
})

module.exports = webpackConfig
