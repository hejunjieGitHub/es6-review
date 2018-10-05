var path = require("path");
var babelpolyfill = require("babel-polyfill")
module.exports = {
  entry: "./es6/main.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: path.join(__dirname, 'es6'),
        exclude:"/node_modules/",
        loader: 'babel-loader',
        query: {
          presets: ['es2015','stage-1'],
          plugins: ['transform-decorators-legacy','transform-decorators']
        }
      }
    ]
  }
}