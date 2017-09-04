const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.ProvidePlugin({
	  $: 'jquery',
	  jQuery: 'jquery',
	})
  ],
  module: {
    rules: [
	  {
	    test: /\.css$/,
		use: [
		  'style-loader',
		  'css-loader'
		]
	  },
	  {
	    test: /\.scss$/,
		use: [
		  'style-loader',
		  'css-loader',
		  'sass-loader'
		]
	  },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader?name=/images/[name].[ext]'
        ]
      },
	  {
		test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader?name=/fonts/[name].[ext]'
        ]
      },
	  {
	    test: /index.html$/,
		use: {
		  loader: 'file-loader?!extract-loader!html-loader',
		  options: {
		  	name: 'index.html',
		    attrs: false
		  }
		},
	  }
	]
  },
};
