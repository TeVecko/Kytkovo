const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'eval-source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    writeToDisk: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]-[hash:6].[ext]',
              outputPath: 'img',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'src/assets', to: 'assets', noErrorOnMissing: true },
        { from: 'src/img', to: 'img', noErrorOnMissing: true },
        { from: 'src/favicon.ico', to: '', noErrorOnMissing: true },
        { from: 'src/apple-touch-icon.png', to: '', noErrorOnMissing: true },
        { from: 'src/favicon-32x32.png', to: '', noErrorOnMissing: true },
        { from: 'src/favicon-16x16.png', to: '', noErrorOnMissing: true },
        { from: 'src/site.webmanifest', to: '', noErrorOnMissing: true },
        { from: 'src/*.html', to: '[name].html' },
        { from: 'src/Plants/*.html', to: 'Plants/[name].html' },
        { from: 'src/Articles/*.html', to: 'Articles/[name].html' },
      ],
    }),
  ],
};
