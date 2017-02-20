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
			{/*<Route path="sign" component={SignIn} />*/}
		</Route>
	</Router>
), document.querySelector('#container'));