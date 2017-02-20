var mongoose = require('mongoose');

// if not have this code, will warn that  DeprecationWarning: Mongoose: 
//mpromise (mongoose's default promise library) is deprecated, 
//plug in your own promise library instead: http://mongoosejs.com/docs/promises.html

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1/test');

var connection = mongoose.connection;

connection.on('connected', function () {
	console.log('Mongoose connect succeed');
})

connection.on('error', function (err) {
	console.log('Mongoose connection error: ' + err);
});

connection.on('disconnected', function () {
	console.log('Mongoose connect disconnected');
});

module.exports = mongoose;