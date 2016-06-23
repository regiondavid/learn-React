var webpack = require("webpack")
module.exports = {
	entry: {
		index: './src/index.js',
		aa: './src/a.js'
	},
	output: {
		path: './dist',
		filename: '[name].js'
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
			}
		]
	}
}