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
		app: path.join(__dirname, '/client/app.js'),
	},
	output: {
		path: path.join(__dirname, '/public/js'),
		filename: '[name].js',
		publicPath: 'http://localhost:8080/public/js'
	},
	externals: {
		react: 'window.React',
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
		//	{ test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader?modules&sourceMap',
				//ExtractTextPlugin is only for production
				//loader: ExtractTextPlugin.extract("style", "css?modules&sourceMap!less")
			},
			{ test: /\.(png|jpg|gif|ico)$/, loader: 'url-loader?limit=8192&name=[name][hash:8].[ext]'}
		]
	},
	plugins: [
		commonsPlugin,
		//ExtractTextPlugin is only for production
		//new ExtractTextPlugin('../css/[name].css', {publicPath: 'http://localhost:8080/public/css'}),
		new webpack.HotModuleReplacementPlugin()

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