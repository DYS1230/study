var mongoose = require('./mongo.js');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
	title: {type: String},
	time: {type: String},
	tag: {type: String},
	content: {type: String}
});

var articleModel = mongoose.model('article', ArticleSchema);

module.exports = articleModel;