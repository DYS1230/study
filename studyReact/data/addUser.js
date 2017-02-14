var name = 'a';
var password = 'b';


var mongoose = require('mongoose');

// if not have this code, will warn that  DeprecationWarning: Mongoose: 
//mpromise (mongoose's default promise library) is deprecated, 
//plug in your own promise library instead: http://mongoosejs.com/docs/promises.html

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/test');

var connection = mongoose.connection;

connection.on('connected', function () {
	console.log('Mongoose connect succeed');
});

connection.on('error', function (err) {
	console.log('Mongoose connection error: ' + err);
});

connection.on('disconnected', function () {
	console.log('Mongoose connect disconnected');
});


var Schema = mongoose.Schema;

var UserSchema = new Schema({
	name: {type: String},
	password: {type: String}
});

var User = mongoose.model('users', UserSchema);

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
};


var crypto = require('crypto');
var newUser = new User({
	name: name,
	password: crypto.createHash('md5').update(password).digest('hex')
});

User.getData(newUser.name, function (err, user) {
	if (err) {
		console.log('getData: ' + err);
		return 0;
	};
	if (user.length) {
		console.log('已有账号，失败');
		return 0;
	};
	newUser.saveData(function (err, user) {
		if (err) {
			console.log('saveData: ' + err);
			return 0;
		}
		console.log(user);
		console.log('添加账号成功');
	});
});