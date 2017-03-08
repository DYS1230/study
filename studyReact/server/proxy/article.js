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
 * 获取分组信息
 * @param {Object} option  option.limit 文章显示数量 option.pageNumber 文章页数
 * @param {Function} callback  回调函数
 */
Article.getGroupData = function (option, callback) {
	this.find({}, null, {limit: 1}, function (err, articles) {
		if (err) {
			return callback(err);
		}
		console.log(articles);
		callback(null, articles);
	})
} 


module.exports = Article;