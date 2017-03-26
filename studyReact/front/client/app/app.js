import React from 'react';
import {render} from 'react-dom';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Container from './container';

import Home from './home';

import ArticleList from './articleList';

import About from './about';

import Article from './article';

import NoPage from './noPage';

render((
	<Router history={browserHistory}>
		<Route path="/" component={Container}>
			<IndexRoute component={Home} />
			<Route path="articlelist/:number" component={ArticleList} />
			<Route path="about" component={About}>
				<Route path="x" /> {/*？？？忘了这是干什么的了*/}
			</Route>
			<Route path="article/:id" component={Article} />
		</Route>
		<Route path='*' component={NoPage} />
	</Router>
), document.querySelector('#container'));