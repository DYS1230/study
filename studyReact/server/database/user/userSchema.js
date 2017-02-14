var mongoose = require('../main/mongo.js');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	name: {type: String},
	password: {type: String}
});

var userModel = mongoose.model('users', UserSchema);

module.exports = userModel;