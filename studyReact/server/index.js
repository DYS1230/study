var express = require('express');

var bodyParser = require('body-parser');

var cookieParser = require('cookie-parser');

var path = require('path');

var redis   = require('redis');
var client  = redis.createClient();
var session = require('express-session');
var redisStore = require('connect-redis')(session);

var app = express();

var x = 'aaa';
app.use(require('cookie-parser')(x));	//cookie

app.use(session({
    secret: 'ssshhhhh',
    store: new redisStore({ host: 'localhost', port: 6379, client: client, ttl :  260, logErrors: true}),
    saveUninitialized: false,
    resave: false
}));




app.set('port', process.env.PORT || 3001);

app.use(express.static(path.join(__dirname, '..')));
//app.use(express.static(path.join(__dirname, '../front/public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text({ type: 'text/plain' }))





var webRoute = require('./route.js'); 

app.use('/', webRoute);
//require('./route/route.js')(app);


app.listen(app.get('port'), function () {
	console.log('listening: ', app.get('port'));
	console.log('start working');
});