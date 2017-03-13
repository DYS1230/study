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
 * @param {String} pageNumber  文章页数
 * @param {Function} callback  回调函数
 */
Article.getArticleListData = function (pageNumber, callback) {
	//默认每页显示10篇文章
	var limit = 3;
	// 跳过数量为每页显示数量乘以页数减一，默认0
	var skip = (pageNumber - 1) * limit;
	this.find({}, {_id: 1, title: 1, time: 1, tag: 1, introduction: 1}, {limit: limit, skip: skip}, function (err, articles) {
		if (err) {
			return callback(err);
		}
		console.log(articles);
		callback(null, articles);
	})
}
/**
 * 根据id获取文章信息
 * @param {Object} id  文章id
 * @param {Function} callback  回调函数
 */
Article.getArticleDataById = function (id, callback) {
	this.find({_id: id}, function (err, articles) {
		if (err) {
			return callback(err);
		}
		console.log(articles);
		callback(null, articles);
	})
}




module.exports = Article;