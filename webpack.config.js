const webpack = require('webpack');
const path = require('path');

function merge(obj) {
  const devServer = Object.assign({}, config.devServer, obj.devServer);
  return Object.assign({}, config, obj, {devServer});
}

const config = {
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
  ],
};

let photos = {
  entry: {
    app: path.resolve(__dirname, 'src', 'pages', 'photos', 'index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'public', 'js'),
    publicPath: '/js/',
    filename: 'photos.js',
  },
  module: {
    rules: [
      {
        test: /\.js?/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
photos = merge(photos);

let sass = {
  devServer: {
    publicPath: '/css/',
  },
  entry: {
    app: path.resolve(__dirname, 'src', 'sass', 'styles.scss'),
  },
  output: {
    path: path.resolve(__dirname, 'public', 'css'),
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
sass = merge(sass);
// const hbs = {
//   module: {
//     loaders: [
//       { test: /\.handlebars$/, loader: "handlebars-loader" }
//     ]
//   }
// };

module.exports = [sass, photos];
