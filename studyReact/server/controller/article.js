var Article = require('../proxy/article.js');

exports.addArticle = function (req, res) {
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

exports.updateArticle = function (req, res) {
	var body = req.body;
	var article = body.article;
	var id = body.id;
	Article.updateData(id, article, function (err, article) {
		if (err) {
			console.log(err);
			console.log('文章保存失败');
			res.send('fail');
			return;
		}
		console.log(article);
		console.log('文章更新成功');
		res.send('success');	
	});
};

exports.getArticleList = function (req, res) {
	var pageNumber = parseInt(req.params.number);
	console.log(pageNumber);
	console.log(isNaN(pageNumber));
	if (isNaN(pageNumber) || pageNumber < 1) {
		res.send([]);
		return;
	}
	Article.getArticleListData(pageNumber, function (err, articles) {
		if (err) {
			console.log(err);
			console.log('文章获取失败');
			res.send([]);
		}
		res.send(articles);
	});
};

exports.getArticlePageNubmers = function (req, res) {
	var perPageNumber = 5; //默认每页有5篇文章 
	Article.getArticleCount(function(err, number) {
		if (err) {
			console.log(err);
			return;
		}
		// 注：数字需要转化为字符串，若直接send数字，会提示Use res.sendStatus(status) instead
		// 因为数字send的是status
		var totalPageNumber = Math.ceil(number / perPageNumber).toString(); //页数
		res.send(totalPageNumber);
	});
};

// 可以看成数据库查询为异步
/*exports.getArticlePageNubmers = function (req, res) {
	var sumCount = 0; //文章总数量默认0
	var perPageNumber = 5; //默认每页有5篇文章 
	Article.getArticleCount(function(err, number) {
		if (err) {
			console.log(err);
			return;
		}
		sumCount = number;
	});
	console.log(sumCount); // 怎么都为0
	var totalPageNumber = Math.ceil(sumCount / perPageNumber).toString(); //页数
	res.send(totalPageNumber);
};*/

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
};