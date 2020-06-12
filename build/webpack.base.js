const path = require('path')
const config = require('./config')

//mast use this plugin => https://vue-loader.vuejs.org/guide/#vue-cli
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const webpackConfig = {
  output: {
    path: path.resolve(process.cwd(), './lib'),
    filename: '[name].js',
    chunkFilename: '[id].js',
    library: 'vbc',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: config.alias,
    modules: ['node_modules'],
  },
  externals: config.externals,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.less$/,
        use: ['css-loader', 'postcss-loader', 'less-loader'],
      },
      {
        test: /\.scss$/,
        use: ['css-loader', 'postcss-loader', 'sass-loader']
      }
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
}

module.exports = webpackConfig
