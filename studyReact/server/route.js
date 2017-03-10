var express = require('express');
var router = express.Router();

var path = require('path');

var auth = require('./controller/auth.js');
var article = require('./controller/article.js');

router.get('/test', function (req, res) {
	res.send('hello dys test')
});

router.get('/api', function (req, res) {
	res.send('hello dys api')
});

router.get('/api/test', function (req, res) {
	console.log('api test')
	res.send('hello dys api test')
});

router.get('/aa', function (req, res) {
	console.log(req.cookies);
	//res.cookie('aa', 'aa');
	res.send('a');
});

router.post('/bb', function (req, res) {
	console.log(req.cookies);
	//res.cookie('cc', 'cc');
	res.send('bb');
});

router.get('/api/backstage/checklogin', function (req, res) {
	if (req.session && req.session.uid) {
		res.send('success');
	} else {
		res.send('error');
	}

});




router.post('/api/backstage/sign', auth.signin);


router.get('/api/articleList/:number', article.getArticleList);
router.get('/api/article/:id', article.getArticleById)

router.post('/api/backstage/postarticle', article.saveArticle);




// 管理后台页面
router.get(/^\/backstage(\/.*)?/, function (req, res) {
	console.log('cookie: ', req.cookies);
	console.log(1212);
	console.log('session: ', req.session);
	res.sendFile(path.resolve(__dirname, '../end/public', 'main.html'))
});
// 另一种方法，访问x页面及x下所有子页面
/*
	var router = express.Router();
	router.route('/*').get(function (req, res) {
		res.sendFile(path.resolve(__dirname, '../../end/public', 'main.html'));
	});
	router.use("/control_back", router);
*/
// 管理前台页面
router.get('*', function (req, res){
	console.log('get *');
	//console.log('session: ', req.session);
	//console.log('cookie: ', req.cookies);
	// res.cookie('monster', 'muuuuu');
	res.sendFile(path.resolve(__dirname, '../front/public', 'b.html'));
});

module.exports = router;