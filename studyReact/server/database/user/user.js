var User = require('./userSchema.js');

User.prototype.saveData = function (callback) {
	this.save(callback);
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