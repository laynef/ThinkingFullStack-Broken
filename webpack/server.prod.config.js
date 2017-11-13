const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const fs = require('fs');
let nodeModules = {};

fs.readdirSync(path.resolve(__dirname, '..', 'node_modules'))
	.filter(x => ['.bin'].indexOf(x) === -1)
	.forEach(mod => { nodeModules[mod] = `commonjs ${mod}`; });


module.exports = {
	name: 'server',
	context: path.join(__dirname, '..'),
	entry: './web/server.js',
	target: 'node',
	node: {
		dns: true,
		fs: true,
		path: true,
		url: true,
		console: false,
		global: true,
		process: true,
		__filename: true,
		__dirname: true,
		Buffer: true,
		setImmediate: true,
	},
	externals: nodeModules,
	output: {
		path: path.resolve(__dirname, '..'),
		filename: 'server.js',
	},
	module: {
		rules: [
			{
				test: /.jsx?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
					},
				],
			},
			{
				test: /.json$/,
				use: [
					{
						loader: 'json-loader',
					},
				],
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json'],
		moduleExtensions: ['-loader'],
	},
	plugins: [
		new webpack.DefinePlugin({
			__DEVELOPMENT__: false,
			__CLIENT__: false,
			sessionStorage: {
				getItem: () => { },
				setItem: () => { },
				removeItem: () => { },
			},
		}),
		new UglifyJSPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
	],
};
