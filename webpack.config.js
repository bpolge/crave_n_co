const webpack = require('webpack');
const path = require('path');

const config = {
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
  ],
};

let sass = {
  devServer: {
    publicPath: '/css/',
  },
  entry: {
    app: path.resolve(__dirname, 'sass', 'styles.scss'),
  },
  output: {
    path: path.resolve(__dirname, 'css'),
    publicPath: '/css/',
    filename: 'styles.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader', // creates style nodes from JS strings
        }, {
          loader: 'css-loader', // translates CSS into CommonJS
        }, {
          loader: 'sass-loader', // compiles Sass to CSS
        }],
      }, {
        test: /\.(eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
      }, {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream',
      },
    ],
  },
};
sass = Object.assign(config, sass);

// const hbs = {
//   module: {
//     loaders: [
//       { test: /\.handlebars$/, loader: "handlebars-loader" }
//     ]
//   }
// };

module.exports = sass;
