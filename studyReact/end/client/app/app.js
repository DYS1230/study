import React from 'react';
import {render} from 'react-dom';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import SignIn from './signIn';

import Container from './container';

import Home from './home';

import ArticleControl from './articleControl';

import ArticleAdd from './articleAdd';

import ArticleUpdate from './articleUpdate';

import auth from '../controller/auth';

class NoPage extends React.Component {
	render() {
		return (
			<div>nopage</div>
		)
	}
}

var loaded = false; //记录是否已经登陆页面

//If callback is listed as a 3rd argument, this hook will run asynchronously, and the transition will block until callback is called.
function requireAuth(nextState, replace, cb) {
	if (!loaded) {
		var promise = auth.checkLogin();
		promise.then(function (response) {
			if (response == 'success') {
				loaded = true;
			} else if (response == 'error') {
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
		<Route path="/backstage/sign" component={SignIn} onEnter={isLogin} />
		<Route path="/backstage" component={Container} onEnter={requireAuth}>
			<IndexRoute component={Home} />
			<Route path="articlecontrol" component={ArticleControl} />
			<Route path="article/add" component={ArticleAdd} />
			<Route path="article/update/:id" component={ArticleUpdate} />
		</Route>
		<Route path="*" component={NoPage} />
	</Router>
), document.querySelector('#container'));