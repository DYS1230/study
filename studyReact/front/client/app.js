import React from 'react';
import {render} from 'react-dom';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Container from './main/container';

import Home from './home/home';

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
			<IndexRoute component={Home}/>
			<Route path="about" component={About}>
				<Route path="x" />
			</Route>
			<Route path="test" component={Test}/>
		</Route>
		<Route path="/dys" component={DYS} />
	</Router>
), document.querySelector('#container'));