const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const outputPath = path.join(process.cwd(), 'dist')
const contentBase = path.join(process.cwd(), 'public')

const config = {
  entry: './src/index.js',
  output: {
    path: outputPath,
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    contentBase: './dist',
    host: '0.0.0.0',
    port: 3000,
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(contentBase, 'index.html')
    })
  ]
}

module.exports = config
