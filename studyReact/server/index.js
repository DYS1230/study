var express = require('express');

var app = express();

var path = require('path');
app.set('port', process.env.PORT || 3001);

app.use(express.static(path.join(__dirname, '..')));
//app.use(express.static(path.join(__dirname, '../front/public')));
app.use(require('body-parser').urlencoded({ extended: true }));

require('./route/route.js')(app);

app.listen(app.get('port'), function () {
	console.log('listening: ', app.get('port'));
	console.log('start working');
});