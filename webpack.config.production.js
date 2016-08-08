var path = require('path')
var webpack = require('webpack')
var WebpackNotifierPlugin = require('webpack-notifier')

module.exports = {
  entry: {
    app: [
      './src/index'
    ],
    vendor: [
      'babel-polyfill', // might be not nessasary !!!
      'immutable',
      // 'material-ui',
      'redux',
      'react',
      'react-dom',
      'react-router',
      'react-redux',
      'react-router-redux',
    // 'redux-promise-middleware'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/static/'
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loaders: ['babel', 'ts'],
        include: path.join(__dirname, 'src')
      },
      { test: /\.scss$/,
        loaders: ['style', 'css?sourceMap', 'sass?sourceMap'],
        include: path.join(__dirname, 'src')
      }
    ]
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.jsx', '.scss'],
    modules: [path.resolve('./src'), 'node_modules']
  },
  plugins: [
    new WebpackNotifierPlugin({ alwaysNotify: true }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      },
      sourceMap: false
    })
  ]
}
