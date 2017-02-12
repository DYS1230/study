var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var path = require('path');
app.set('port', process.env.PORT || 3001);

app.use(express.static(path.join(__dirname, '..')));
//app.use(express.static(path.join(__dirname, '../front/public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text({ type: 'text/plain' }))



require('./route/route.js')(app);

app.listen(app.get('port'), function () {
	console.log('listening: ', app.get('port'));
	console.log('start working');
});