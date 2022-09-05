'use strict'
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  mode: 'development',
  context: resolve('./'),
  devtool: false,
  entry: {
    app: './src/main.js'
  },
  output: {
    path: resolve('./dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: resolve('./a.js')
          }
        ],
        include: [resolve('src')]
      }
    ]
  },
  node: false
}
