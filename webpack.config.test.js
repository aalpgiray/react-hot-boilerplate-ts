var path = require('path')
var webpack = require('webpack')
var WebpackNotifierPlugin = require('webpack-notifier')

module.exports = {
  // target: 'node',
  devtool: '#inline-source-map',
  entry: {
    app: [
      'index'
    ]
  },
  output: {
    path: path.resolve('tests'),
    filename: 'index.js',
    publicPath: '/tests/'
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loaders: ['react-hot', 'babel', 'ts'],
        include: path.join(__dirname, 'src')
      },
      { test: /\.scss$/,
        loaders: ['style', 'css?sourceMap', 'sass?sourceMap'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.json$/,
        loaders: ['json-loader']
      }

    ]
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.jsx', '.scss'],
    modules: [
      path.resolve('./tests'),
      path.resolve('./src/components'),
      path.resolve('./src/middlewares'),
      path.resolve('./src/reducers'),
      path.resolve('./src/actions'),
      'node_modules'
    ]
  },
  plugins: [
    // new webpack.IgnorePlugin(/^fs$/),
    new WebpackNotifierPlugin({ alwaysNotify: true }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
}
