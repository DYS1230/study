import React from 'react';
import {render} from 'react-dom';

import { Router, Route, IndexRoute, Link, hashHistory, browserHistory } from 'react-router'

import About from './About.js'

import Container from './home/container';

import Home from './home/home';

let a = 101;

console.log(a);

// class Home extends React.Component {
// 	constructor(props) {
// 		super(props);
// 	}
// 	render() {
// 		return (
// 			<h1>The Home content</h1>
// 		)
// 	}
// }

// class About extends React.Component {
// 	constructor(props) {
// 		super(props);
// 	}
// 	render() {
// 		return (
// 			<h1>The About content</h1>
// 		)
// 	}
// }

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


render((
	<Router history={browserHistory}>
		<Route path="/" component={Container}>
			<IndexRoute component={Home}/>
			<Route path="/about" component={About}/>
			<Route path="/test" component={Test}/>
		</Route>
	</Router>
), document.querySelector('#container'));



/*import React from 'react';
import {render} from 'react-dom';


import styles from './about.css'

console.log(styles);

class Container extends React.Component {
	render() {
		return (
			<div className={styles.test}>test</div>
		)
	}
}

render(<Container />, document.querySelector('#container'));*/