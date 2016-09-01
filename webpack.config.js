var path = require('path')
var webpack = require('webpack')
var WebpackNotifierPlugin = require('webpack-notifier')

module.exports = {
  devtool: '#inline-source-map',
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
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
        loaders: ['react-hot', 'babel', 'ts'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css?sourceMap', 'sass?sourceMap'],
        include: path.join(__dirname, 'src')
      }
    ]
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.jsx', '.css', '.scss'],
    modules: [
      path.resolve('./src'),
      path.resolve('./src/components'),
      path.resolve('./src/reducers'),
      path.resolve('./src/actions'),
      path.resolve('./src/middlewares'),
      'node_modules'
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new WebpackNotifierPlugin({ alwaysNotify: true }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
}
