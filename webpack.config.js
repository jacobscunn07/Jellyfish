const path = require('path');

module.exports = {
  entry: {
    app: './src/index',
  },
  target: 'web',
  output: {
    path: `${__dirname}/content/build`,
    filename: '[name].js',
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  plugins: [],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],

        use: [{
          loader: 'babel-loader',
        }],
      },
      {
        test: /(\.css)$/,

        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
          },
        ],
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
        }],
      },
      {
        test: /\.(woff|woff2)$/,
        use: [{
          loader: 'url-loader?prefix=font/&limit=5000',
        }],
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'url-loader?limit=10000&mimetype=application/octet-stream',
        }],
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
        }],
      },
      { test: /\.png$/, loader: 'url-loader?prefix=img/&limit=5000' },
      {
        test: /\.js$/,
        include: [/(react)/],
        exclude: [/(node_modules)/, /vendor/],

        use: {
          loader: 'eslint-loader',
          options: {
            enforce: 'pre',
            configFile: path.resolve(__dirname, '.eslintrc'),
          },
        },
      },
    ],
  },
};
