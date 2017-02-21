var auth = {};

//目前改变量是没有用到，想着后面转练用redux用到
auth.isLogin = false;

auth.checkLogin = function () {
	return fetch('/api/backstage/checklogin', {
			method: 'GET',
			credentials: 'include'
		}).then( response => response.text());
}


module.exports = auth;