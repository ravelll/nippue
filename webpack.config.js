const path = require('path')
const srcPath = path.resolve(__dirname, 'src')

module.exports = {
  entry: './src/main.js',
  output: {
    filename: './dist/bundle.js'
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
        loader: 'vue-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    modules: [
      srcPath,
      'node_modules'
    ],
    alias: {
      '@': srcPath
    }
  },
  devServer: {
    contentBase: srcPath,
    compress: true,
    port: 8080
  }
}
