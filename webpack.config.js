const { resolve } = require('path')

module.exports = {
	entry: './app/index.js',
	output: {
		path: resolve(__dirname, 'dist'),
		filename: 'main.js',
	},


	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [{
					loader: 'babel-loader',
					options: {
						presets: ['es2015', 'stage-3','react']
					}
				}]
			}
		]
	},
	devServer: {
		historyApiFallback: {
			index: '/dist/'
		}
	}
}