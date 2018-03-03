const webpackValidator = require('webpack-validator')
const {resolve} = require('path')
////same as:
////const resolve = require('path').resolve  -- destructuring

module.exports = env => {
  return webpackValidator({
    context: resolve('src'),
    entry: './bootstrap.js',
    output: {
      path: resolve('dist'),
      filename: 'bundle.js',
      publicPath: '/dist/',
    },
    devtool: env.prod ? 'source-map' : 'eval'
  })
}
