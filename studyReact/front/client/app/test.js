var isLogin = false;

var auth = {};

auth.authorized = function () {
	return isLogin;
}

auth.setAuth = function () {
	isLogin = true;
}


module.exports = auth;