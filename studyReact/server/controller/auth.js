var crypto = require('crypto');

var User = require('../proxy/user.js');

exports.signin = function (req, res) {
	var md5 = crypto.createHash('md5');

	var name = req.body.name;
	var password = md5.update(req.body.password).digest('hex');

	User.getData(name, function (err, user) {
		if (err) {
			console.log('getData err: ' + err);
		}
		// when not find, return []
		if (user.length) {
			var auth = user[0];
			if (auth.password === password) {
				req.session.uid = auth._id;
				res.send('success');
			} else {
				res.send('账号或密码错误，请重新输入');
			}
		} else {
			res.send('账号或密码错误，请重新输入');
		}
	});
}