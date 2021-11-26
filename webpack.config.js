const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: "[name].js",
    library: {
      name: '[name].js',
      type: 'umd',
      export: 'default'
    }
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              exclude: /node_modules/
            }
          }
        ]
      },
      {
        test: /\.(jpg|png|gif|woff|woff2|svg|ttf|eot)$/,
        use: [ 'url-loader' ]
      },
      {
        test: /\.css$/,
        use: [ 'css-loader' ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  resolve: {
    extensions: [ '.js', '.json' ] // webpack 默认只会解析['.js', '.json', '.wasm']
  }
};
