//webpack            // 最基本的启动webpack的方法
//webpack -w      // 提供watch方法；实时进行打包更新
//webpack -p      // 对打包后的文件进行压缩
//webpack -d      // 提供source map，方便调式代码
//打包成多个资源文件
/*module.exports = {
	entry: {
		"main": "./src/main.js",
		"index": "./src/index.js"
	},
	output: {
		filename: "[name].bundle.js"
	}
};*/

var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
	//这样出错以后就会采用source-map的形式直接显示你出错代码的位置。
	devtool: 'eval-source-map',
	//入口，默认找index.js，也可以自己指定，比如APP_PATH/main.js
	externals: {
		'react': 'window.React'
	},	
	entry: APP_PATH,
	//出口，输出的合并的文件
	output: {
		path: BUILD_PATH,
		filename: 'bundle.js'
	},
	// 模块
	module: {
		//test：一个匹配loaders所处理的文件的拓展名的正则表达式（必须）
		//loader：loader的名称（必须）
		//include/exclude:手动添加必须处理的文件（文件夹）或屏蔽不需要处理的文件（文件夹）（可选）；
		//query：为loaders提供额外的设置选项（可选）
		loaders: [
			{
				//有时候我们不想把样式打在脚本中，而是想独立css出来，然后在页面上外链css，这时候我们需要 extract-text-webpack-plugin 
				test: /\.css$/,
				loaders: ['style', 'css'],
				include: APP_PATH
			}, 
			{
				test: /\.jsx?$/,
				loader: 'babel',
				include: APP_PATH, //where file populate
				query: {
					presets: ['es2015']
				}
			}
		]
	},
	//定义了需要使用的插件，比如commonsPlugin在打包多个入口文件时会提取公用的部分，生成common.js;
	plugins: [
		new HtmlwebpackPlugin({
			title: 'Hello DYS'
		})
	],
	//webpack-dev-server
	//使用webpack构建本地服务器
	devServer: {
		historyApiFallback: true,
		hot: true,
		inline: true,
		process: true
	}
	//resolve: 定义了解析模块路径时的配置，常用的就是extensions; 可以用来指定模块的后缀，这样在引入模块时就不需要写后缀，会自动补全。
	// resolve: {
	// 	//查找module的话从这里开始查找
	// 	root: 'E:/github/flux-example/src', //绝对路径
	// 	//自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
	// 	extensions: ['', '.js', '.json', '.scss'],
	// 	//模块别名定义，方便后续直接引用别名，无须多写长长的地址
	// 	alias: {
	// 		AppStore : 'js/stores/AppStores.js',//后续直接 require('AppStore') 即可
	// 		ActionType : 'js/actions/ActionType.js',
	//  		AppAction : 'js/actions/AppAction.js'
	// 	}
	// }
}