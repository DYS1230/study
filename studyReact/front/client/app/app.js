import React from 'react';
import {render} from 'react-dom';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Container from './container';

import Home from './home';

import Article from './article';

import Demo from './demo';

class Test extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<h1>The Test content</h1>
		)
	}
}

class About extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<h1>The About content</h1>
		)
	}
}

class DYS extends React.Component {
	render() {
		return(
			<div>DYS</div>
		)
	}
}

render((
	<Router history={browserHistory}>
		<Route path="/" component={Container}>
			<IndexRoute component={Home} />
			<Route path="articlelist/:number" component={Home} />
			<Route path="about" component={About}>
				<Route path="x" /> {/*？？？忘了这是干什么的了*/}
			</Route>
			<Route path="article/:id" component={Article} />
			<Route path="test" component={Demo} />
		</Route>
		<Route path="/dys" component={DYS} />
	</Router>
), document.querySelector('#container'));