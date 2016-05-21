// import React from 'react';
// class List extends React.Component{
// 	constructor(){
// 		super();
// 		this.state = ['a','b','c'];
// 	}
// 	render(){
// 		return (...);
// 	}
// }

var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH,'build');

module.exports = {
	entry: {
		app: path.resolve(APP_PATH, 'index.jsx')
	},
	output: {
		path: BUILD_PATH,
		filename: 'bundle.js'
	},
	//启用source-map
	devtool: 'eval-source-map',
	//启用dev server
	devServer: {
		historyApiFallback: true,
		progress: true
	},
	//添加resolve的参数
	resolve: {
		extensions: ['','.js','.jsx']
	},
	//babel重要的loader在这里
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel',
				include: APP_PATH
			},
			{
				test: /\.scss$/,
				loaders: ['style','css','sass']
			}
		]
	},
	plugins: [
		new HtmlwebpackPlugin({
			title: 'My first react app'
		})
	]
}