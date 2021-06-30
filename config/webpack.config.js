const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, '../public/src/main.js')
  },
  output: {
    filename: '[contenthash].dist/bundle.js',
    path: path.resolve(__dirname, '../public/dist')
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
       {
         test: /\.(png|jpe?g|gif)$/i,
         use: [
           {
             loader: 'file-loader',
           }
         ]
       }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.resolve(__dirname, '../public/src/index.html')
  })]  

}