var express = require('express');

var app = express();

var path = require('path');

app.set('port', process.env.PORT || 3001);

app.use(express.static(__dirname + '/public'));
app.use(require('body-parser').urlencoded({ extended: true }));

//require('./route/route.js')(app);

app.get('/', function (req, res) {
	res.sendFile(path.resolve(__dirname, 'client/hello.html'));
})


app.listen(app.get('port'), function () {
	console.log('start working');
});