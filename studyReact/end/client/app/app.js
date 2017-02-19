import React from 'react';
import {render} from 'react-dom';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Container from './container';

import SignIn from './signIn';

import PostArtical from './postArticle';

function requireAuth(nextState, replace) {
	console.log(arguments);
	if (1 == 1) {
		replace({
			pathname: '/control_back/sign_in',
			state: {nextPathname: nextState.location.pathname}
		})
	}
}


render((
	<Router history={browserHistory}>
		<Route path="/control_back/sign_in" component={SignIn} />
		<Route path="/control_back" component={Container} onEnter={requireAuth}>
			<IndexRoute component={PostArtical} />
			{/*<Route path="sign_in" component={SignIn} />*/}
		</Route>
	</Router>
), document.querySelector('#container'));