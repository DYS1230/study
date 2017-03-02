var Article = require('../database/articleSchema.js');

Article.prototype.saveData = function (callback) {

	this.save(callback);
};

Article.getData = function (title, callback) {
	Article.find({title: title}, function (err, article) {
		if (err) {
			return callback(err);
		}
		callback(null, article);
	})
};

module.exports = Article;