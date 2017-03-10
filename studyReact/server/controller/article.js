var Article = require('../proxy/article.js');

exports.saveArticle = function (req, res) {
	var body = req.body;

	var newArticle = new Article({
		title: body.title,
		time: body.time,
		tag: body.tag,
		introduction: body.introduction,
		content: body.content
	});

	newArticle.saveData(function (err, article) {

		if (err) {
			console.log(err);
			console.log('文章保存失败');
			res.send('fail');
			return;
		}
		console.log(article);
		console.log('文章发表成功');
		res.send('success');
	})

};

exports.getArticleList = function (req, res) {
	var pageNumber = parseInt(req.params.number);
	if (isNaN(pageNumber) || pageNumber < 1) {
		res.send([]);
	}
	Article.getArticleListData(pageNumber, function (err, articles) {
		if (err) {
			console.log(err);
			console.log('文章获取失败');
			res.send([]);
		}
		res.send(articles);
	});
}


exports.getArticleById = function (req, res) {
	var id = req.params.id;
	Article.getArticleDataById(id, function (err, articles) {
		if (err) {
			console.log(err);
			console.log('文章获取失败');
			res.send([]);
		}
		res.send(articles);
	})
	// Article.getArticleDataById(, function (err, articles) {
	// 	if (err) {
	// 		console.log(err);
	// 		console.log('文章获取失败');
	// 		res.send([]);
	// 	}
	// 	res.send(articles);
	// });
}