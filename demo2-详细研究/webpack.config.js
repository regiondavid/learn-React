var webpack = require("webpack")
module.exports = {
	entry: {
		index: './src/index.js',
		style: './src/style.css',
		a:'./src/a.js',
		vendor: [
			'react','react-dom'
		]
	},
	output: {
		path: './dist',
		filename: '[name].js',
		publicPath: '/dist'
	},
	module:{
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015','stage-0','react']
				}
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			}
		]
	},
	plugins: [
		// new BellOnBundlerErrorPlugin()
		new webpack.optimize.CommonsChunkPlugin("vendor","vendor.bundle.js")
	]
}