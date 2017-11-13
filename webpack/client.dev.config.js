const webpack = require('webpack');
const path = require('path');

module.exports = {
	name: 'browser',
	context: path.join(__dirname, '..'),
	entry: {
		client: './web/client.js',
	},
	output: {
		path: path.resolve(__dirname, '..', 'assets', 'dist'),
		filename: '[name].js',
	},
	target: "web",
	module: {
		rules: [
			{
				test: /.jsx?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
					},
					{
						loader: 'eslint-loader',
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
			{
				test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: "url-loader?limit=10000&mimetype=application/font-woff",
					},
				],
			},
			{
				test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: "url-loader?limit=10000&mimetype=application/font-woff",
					},
				],
			},
			{
				test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: "url-loader?limit=10000&mimetype=application/octet-stream",
					},
				],
			},
			{
				test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: "file-loader",
					},
				],
			},
			{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: "url-loader?limit=10000&mimetype=image/svg+xml",
					},
				],
			},
		],
	},
	resolve: {
		extensions: ['*', '.js', '.jsx', '.json', '.scss', '.sass', '.css'],
		moduleExtensions: ['-loader'],
	},
	plugins: [
		new webpack.DefinePlugin({
			__DEVELOPMENT__: true,
			__CLIENT__: true,
		}),
		new webpack.LoaderOptionsPlugin({
			options: {
				devtools: 'source-map',
			},
		}),
	],
};
