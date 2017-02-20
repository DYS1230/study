var User = require('../database/userSchema.js');

User.newData = function (obj, callback) {
	var user = new User();
	user.name = obj.name;
	user.password = obj.password;
	user.save(callback);
};

User.getData = function (name, callback) {
	User.find({name: name}, function (err,  user) {
		if (err) {
			return callback(err);
		}
		callback(null, user);
	});
}


module.exports = User;