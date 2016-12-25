// import React from 'react';
// import {render} from 'react-dom';

// import { Router, Route, IndexRoute, Link, hashHistory, browserHistory } from 'react-router'

// import styles from './about.css';

// //import About from './About.js'

// let a = 101;

// console.log(a);

// class Container extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		// this.state = {
// 		// 	data: ''
// 		// };
// 	}
// 	componentWillMount() {
// 		console.log('componentWillMount');
// 	}
// 	componentDidMount() {
// 		console.log('componentDidMount');
// 		// this.fetchData();
// 	}
// 	fetchData() {
// 		var url = "/api/test";
// 		fetch(url)
// 			.then( response => response.text() )
// 			.then((responseData) => {
// 				console.log(responseData);
// 				this.setState({
// 					data: responseData
// 				});
// 			});
// 	}
// 	render () {
// 		return (
// 			<div className="content">
// 				<header>
// 					<div>no change content</div>
// 					<h1>title</h1>
// 					<nav>nav</nav>
// 					<div>img</div>
// 				</header>
// 				<div>
// 					<article>
// 						change content
// 						<Link to="/">home</Link>
// 						<Link to="/about">about</Link>
// 						<Link to="/test">test</Link>
// 						{this.props.children}
// 					</article>
// 					<aside>aside</aside>
// 				</div>
// 				<footer>
// 					<div>no change content</div>
// 				</footer>
// 			</div>
// 		);
// 	}
// }

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

// class Test extends React.Component {
// 	constructor(props) {
// 		super(props);
// 	}
// 	render() {
// 		return (
// 			<h1>The Test content</h1>
// 		)
// 	}
// }


// render((
// 	<Router history={browserHistory}>
// 		<Route path="/" component={Container}>
// 			<IndexRoute component={Home}/>
// 			<Route path="/about" component={About}/>
// 			<Route path="/test" component={Test}/>
// 		</Route>
// 	</Router>
// ), document.querySelector('#container'));



import React from 'react';
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

render(<Container />, document.querySelector('#container'));