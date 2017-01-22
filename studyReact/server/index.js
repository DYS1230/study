var express = require('express');

var app = express();

var path = require('path');
app.set('port', process.env.PORT || 3001);

app.use(express.static(path.join(__dirname, '..')));
//app.use(express.static(path.join(__dirname, '../front/public')));
app.use(require('body-parser').urlencoded({ extended: true }));

//require('./route/route.js')(app);


// app.get('/', function (req, res) {
// 	res.sendFile(path.resolve(__dirname, 'client/hello.html'));
// });

app.get('/test', function (req, res) {
	res.send('hello dys test')
})

app.get('/api', function (req, res) {
	res.send('hello dys api')
})

app.get('/api/test', function (req, res) {
	console.log('api test')
	res.send('hello dys api test')
})


var router = express.Router();
router.route('/*').get(function (req, res) {
	res.sendFile(path.resolve(__dirname, '../end/public', 'main.html'));
});
app.use("/control_back", router);

/*app.get(/^\/control_back(\/.*)?/, function (req, res){
	console.log('get controlback');
	res.sendFile(path.resolve(__dirname, '../end/public', 'main.html'))
});
*/

// 为了适应react-router
app.get('*', function (req, res){
	console.log('get *');
	res.sendFile(path.resolve(__dirname, '../front/public', 'b.html'));
});

app.listen(app.get('port'), function () {
	console.log('listening: ', app.get('port'));
	console.log('start working');
});