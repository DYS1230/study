var Article = require('../database/articleSchema.js');

Article.prototype.saveData = function (callback) {

	this.save(callback);
};

//搜索
Article.searchData = function (title, callback) {
	this.find({title: title}, function (err, article) {
		if (err) {
			return callback(err);
		}
		callback(null, article);
	})
};

//获取全部文章信息
Article.getAllData = function (callback) {
	this.find({}, function (err, articles) {
		if (err) {
			return callback(err);
		}
		callback(null, articles)
		//console.log(article);
	})
};

/**
 * 获取首页显示的分组信息，显示title，time，tag，introduction
 * @param {Object} option  option.limit 文章每页显示数量 option.pageNumber 文章页数
 * @param {Function} callback  回调函数
 */
Article.getHomeGroupData = function (options, callback) {
	var limt = options.limit || 10;
	// 跳过数量为每页显示数量乘以页数，默认0
	var skip = options.pageNumber ? options.pageNumber * limit : 0;
	this.find({}, {title: 1, time: 1, tag: 1, introduction: 1}, {limit: 2}, function (err, articles) {
		if (err) {
			return callback(err);
		}
		console.log(articles);
		callback(null, articles);
	})
} 


module.exports = Article;