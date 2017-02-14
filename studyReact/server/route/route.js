var crypto = require('crypto');


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

	app.post('/api/control_back/sign_in', function (req, res) {

		var md5 = crypto.createHash('md5');

		var name = req.body.name;
		var password = md5.update(req.body.password).digest('hex');

		User.getData(name, function (err, user) {
			if (err) {
				console.log('getData err: ' + err);
			}
			console.log(user);
			// when not find, return []
			if (user.length) {
			
			}
		});

		res.send('get');
	});

	// 管理后台页面
	app.get(/^\/control_back(\/.*)?/, function (req, res) {
		console.log('get controlback');
		res.sendFile(path.resolve(__dirname, '../end/public', 'main.html'))
	});
	// 另一种方法，访问x页面及x下所有子页面
	/*
		var router = express.Router();
			res.sendFile(path.resolve(__dirname, '../end/public', 'main.html'));
		});
		app.use("/control_back", router);
	*/
	// 管理前台页面
	app.get('*', function (req, res){
		console.log('get *');
		res.sendFile(path.resolve(__dirname, '../front/public', 'b.html'));
	});
}