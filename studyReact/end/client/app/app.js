/*import React from 'react';
import {render} from 'react-dom';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Container from './container';

import SignIn from './signIn';

import PostArtical from './postArticle';

import auth from '../controller/auth.js';


function requireAuth(nextState, replace, cb) {
	console.log(arguments);
console.log(cb);
// replace('/backstage/sign');
// replace({
// 	pathname: '/backstage/sign',
// 	state: {nextPathname: nextState.location.pathname}
// })
	// var promise = auth.checkLogin();
	// promise.then(function (response) {
	// 	console.log('login');
	// 	cb();
	// }).catch(function (err) {
	// 	console.log('noLogin');
	// 	replace('/backstage/sign');
	// })

	if (1 == 1) {
		replace({
			pathname: '/backstage/sign',
			state: {nextPathname: nextState.location.pathname}
		})
	}
}


render((
	<Router history={browserHistory}>
		<Route path="/backstage/sign" component={SignIn} />
		<Route path="/backstage" component={Container} onEnter={requireAuth}>
			<IndexRoute component={PostArtical} />
			
		</Route>
	</Router>
), document.querySelector('#container'));*/



import React from 'react';
import {render} from 'react-dom';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Container from './container';

import SignIn from './signIn';

import PostArtical from './postArticle';

import auth from '../controller/auth.js';

var loaded = false; //记录是否已经登陆页面

//If callback is listed as a 3rd argument, this hook will run asynchronously, and the transition will block until callback is called.
function requireAuth(nextState, replace, cb) {
	if (!loaded) {
		var promise = auth.checkLogin();
		promise.then(function (response) {
			if (response == 'success') {
				console.log(loaded);
				loaded = true;
				console.log(loaded);
			} else if (response == 'error'){
				replace({
					pathname: '/backstage/sign',
					state: {nextPathname: nextState.location.pathname}
				})
			}
		 	cb();
		}).catch(function (err) {
			console.log(err);
			replace('/backstage/sign');
			cb();
		});
	}
}

function isLogin(nextState, replace, cb) {
	//若已经登陆，不可再进登陆页面
	var promise = auth.checkLogin();
	promise.then(function (response) {
		if (response == 'success') {
			replace({
				pathname: '/backstage',
				state: {nextPathname: nextState.location.pathname}
			})
		}
	 	cb();
	});

}


render((
	<Router history={browserHistory}>
		<Route path="/backstage/sign" component={SignIn} onEnter={isLogin}/>
		<Route path="/backstage" component={Container} onEnter={requireAuth}>
			<IndexRoute component={PostArtical} />
			{/*<Route path="sign_in" component={SignIn} />*/}
		</Route>
	</Router>
), document.querySelector('#container'));