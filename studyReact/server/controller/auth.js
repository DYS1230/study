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
			req.session.uid = user._id;
			res.send('success');
		} else {
			res.send('error');
		}
	});
}