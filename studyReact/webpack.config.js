/*const webpack = require('webpack');
var path = require('path');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

// 导出的css地址为 style/[name].css 前面加上BUILD_PATH
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractCss = new ExtractTextPlugin('style/[name].css');

var publicPath = 'http://localhost:3000/';
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

module.exports = {
	devtool: 'eval-source-map',
	externals: {
		'react': 'window.React',
		'react-dom': 'window.ReactDOM'
	},
	entry: {
		entry: [APP_PATH + '/entry.js', hotMiddlewareScript],
		es2015: [APP_PATH + '/es2015.js', hotMiddlewareScript],
		comment: [APP_PATH + '/comment.js', hotMiddlewareScript],
		product: [APP_PATH + '/product.js', hotMiddlewareScript]
	},
	output: {
		path: BUILD_PATH,
		filename: '[name].js',
		publicPath: publicPath
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel',
				exclude: path.resolve(ROOT_PATH, 'node_modules'),
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.css$/,
				loader: extractCss.extract('css')
			}
		]
	},
	plugins: [
		extractCss,
		new webpack.HotModuleReplacementPlugin(),
	],
	resolve: {
		extension: ['', 'js', 'jsx']
	}
}*/




//拥抱es6

const webpack = require('webpack');
const path = require('path');

const commonsPlugin = new webpack.optimize.CommonsChunkPlugin({
	name: 'common', //提取的公共模块，生成的文件名字 
	minChunks: 10, //公共模块被使用的最小次数，即当模块被引用至少3次，模块将被提取出来
	//chunks: ['entry', 'enentry'], //要抽取的文件，entry里面的key
});

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const clientPath = path.resolve(__dirname, 'client');

console.log(clientPath);

module.exports = {
	devtool: 'source-map',
	entry: {
		hello: path.join(__dirname, '/client/hello.js'),
	},
	output: {
		path: path.join(__dirname, '/public/js'),
		filename: '[name].js',
		publicPath: '/public/js'
	},
	externals: {
		react: 'window.React',
		'react-dom': 'window.ReactDOM',
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
				loader: ExtractTextPlugin.extract('css')
			}
		]
	},
	plugins: [
		commonsPlugin,
		new ExtractTextPlugin('style/[name].css'),
		new webpack.HotModuleReplacementPlugin()

	],
	devServer: {
		historyApiFallback: true,
		hot: true,
		inline: true,
		process: true,
	        //其实很简单的，只要配置这个参数就可以了
		proxy: {
			'/api/*': {
				target: 'http://localhost:3001',
				secure: false
			}
		}
	},
}






/*

const glob = require('glob');
//visit every file and get fileName
function getEntry(url) {
	let entry = {};
	glob.sync(url).forEach(function (name) {
		console.log(name);
	});

}*/




/*
无作用的

const HtmlWebpackPlugin = require('html-webpack-plugin');

let conf = {
	filename: 'xxx.html',
	//template: './view/a.html', //生成的html的模板，可以为原先的html
	title: 'dys',
	favicon: 'favicon.ico',
	minify: {
		removeComments: true // 移除注释，minify参数 https://github.com/kangax/html-minifier#options-quick-reference
	},
	chunks: ['react', 'jquery', 'common', 'enentry', 'enenentry'],
	template: './view/a.html',
	templateContent: function () {
		for (var i = 0; i < arguments.length; i++) {
			console.log(arguments);
			console.log('................................................');
		}
		return '....';
	}
	chunksSortMode: function (a, b) {
		console.log('---------------');
		console.log(a);
		console.log('---------------');
		console.log(b);
		return (b.id - a.id);
	},
}
*/