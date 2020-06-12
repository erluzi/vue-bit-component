const path = require('path')
const nodeExternals = require('webpack-node-externals')

exports.alias = {
  '@src': path.resolve(__dirname, '../src'),
  '@package': path.resolve(__dirname, '../package'),
}

exports.externals = [{vue: 'vue'}, nodeExternals()]
