const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',  // The HTMLWebpackPlugin lets us use a custom HTML template where it will inject all necessary bundled files for us.
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }],
      }
    ]
  }
};
