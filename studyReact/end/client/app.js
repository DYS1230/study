import React from 'react';
import {render} from 'react-dom';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Container from './main/container';

import SignIn from './sign/signIn';

import PostArtical from './article/postArticle';

render((
	<Router history={browserHistory}>
		<Route path="/control_back" component={Container}>
			<IndexRoute component={PostArtical} />
			<Route path="a" component={SignIn} />
		</Route>
	</Router>
), document.querySelector('#container'));