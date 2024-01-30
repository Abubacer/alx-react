const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    all: [
      './modules/header/header.js',
      './modules/body/body.js',
      './modules/footer/footer.js',
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(gif|png|jpg|jpeg|svg|webp)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, 
              disable: true, 
            },
          },
        ],
      },
    ]
  },
  devServer: {
    static: path.join(__dirname, './public'),
    compress: true,
    port: 8564
  },
  devtool: 'inline-source-map',// inline source mapping support
  plugins: [
    new CleanWebpackPlugin(), // clean the public folder on each build
		new HtmlWebpackPlugin() // Generates default index.html
  ],
  optimization: {
    splitChunks: {
      chunks: 'all' // split the modules in chunks
    }
  }
};