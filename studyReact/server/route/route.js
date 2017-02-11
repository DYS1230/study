module.exports = function (app) {

	app.get('/test', function (req, res) {
		res.send('hello dys test')
	});

	app.get('/api', function (req, res) {
		res.send('hello dys api')
	});

	app.get('/api/test', function (req, res) {
		console.log('api test')
		res.send('hello dys api test')
	});

	app.post('/api/control_back/sign_in', function (req, res) {
		console.log(req);
		console.log(req.body);
		res.send('get');
	});

	// 管理后台页面
	app.get(/^\/control_back(\/.*)?/, function (req, res) {
		console.log('get controlback');
		res.sendFile(path.resolve(__dirname, '../end/public', 'main.html'))
	});
	// 另一种方法，访问x页面及x下所有子页面
	/*
		var router = express.Router();
			res.sendFile(path.resolve(__dirname, '../end/public', 'main.html'));
		});
		app.use("/control_back", router);
	*/
	// 为了适应react-router
	app.get('*', function (req, res){
		console.log('get *');
		res.sendFile(path.resolve(__dirname, '../front/public', 'b.html'));
	});
}