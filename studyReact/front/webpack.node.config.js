//拥抱es6

const webpack = require('webpack');
const path = require('path');

const commonsPlugin = new webpack.optimize.CommonsChunkPlugin({
	name: 'js/common', //提取的公共模块，生成的文件名字 
	minChunks: 10, //公共模块被使用的最小次数，即当模块被引用至少3次，模块将被提取出来
	//chunks: ['entry', 'enentry'], //要抽取的文件，entry里面的key
});

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const clientPath = path.resolve(__dirname, 'client');

module.exports = {
	devtool: 'source-map',
	entry: {
		'js/app': path.join(__dirname, '/client/app.js'),
	},
	output: {
		path: path.join(__dirname, '/public'),
		filename: '[name].js',
		//publicPath: './front/public/'
	},
	externals: {
		'react': 'window.React',
		'react-dom': 'window.ReactDOM',
		'react-router': 'window.ReactRouter'
	},
	module:{
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react', 'stage-0']
				}
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader?modules',
			},
			{
				test: /\.(png|jpg|gif|ico)$/,
				loader: 'url-loader?limit=8192&name=img/[hash:8].[ext]'
			}
		]
	},
	plugins: [
		commonsPlugin
	],
	devServer: {
		historyApiFallback: true,
		hot: true,
		inline: true,
		process: true,
		proxy: {
			'/api': {
				target: 'http://localhost:3001',
				secure: false,
				pathRewrite: {'^/api' : ''}, //访问/api时相当于访问http://localhost:3001，没此句则相当于访问http://localhost:3001/api
				changeOrigin: true
			}
		}
	},
}
