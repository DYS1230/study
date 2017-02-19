var crypto = require('crypto');

var path = require('path');

var User = require('../database/user/user.js');

module.exports = function (app) {

	app.get('/test', function (req, res) {
		res.send('hello dys test')
	});

	app.get('/api', function (req, res) {
		res.send('hello dys api')
	});

	app.get('/api/test', function (req, res) {
		console.log('api test')
		res.send('hello dys api test')
	});

	app.get('/aa', function (req, res) {
		console.log(req.cookies);
		res.cookie('aa', 'aa');
		res.send('a');
	});

	app.post('/bb', function (req, res) {
		console.log(req.cookies);
		res.cookie('cc', 'cc');
		res.send('bb');
	})


	app.post('/api/control_back/sign_in', function (req, res) {

		var md5 = crypto.createHash('md5');

		var name = req.body.name;
		var password = md5.update(req.body.password).digest('hex');

		User.getData(name, function (err, user) {
			if (err) {
				console.log('getData err: ' + err);
			}
			// when not find, return []
			if (user.length) {
				req.session.uid = user._id;
				res.send('success');
			} else {
				res.send('error');
			}
		});

	});

	// 管理后台页面
	app.get(/^\/control_back(\/.*)?/, function (req, res) {
		console.log('cookie: ', req.cookies);
		console.log(1212);
		console.log('session: ', req.session);
		res.sendFile(path.resolve(__dirname, '../../end/public', 'main.html'))
	});
	// 另一种方法，访问x页面及x下所有子页面
	/*
		var router = express.Router();
			res.sendFile(path.resolve(__dirname, '../../end/public', 'main.html'));
		});
		app.use("/control_back", router);
	*/
	// 管理前台页面
	app.get('*', function (req, res){
		console.log('get *');
		//console.log('session: ', req.session);
		//console.log('cookie: ', req.cookies);
		// res.cookie('monster', 'muuuuu');
		res.sendFile(path.resolve(__dirname, '../../front/public', 'b.html'));
	});
}