import React from 'react';
import {render} from 'react-dom';

import { Router, Route, Link, hashHistory, browserHistory } from 'react-router'

let a = 101;

console.log(a);

class Hello extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: ''
		};
	}
	componentWillMount() {
		console.log('componentWillMount');
	}
	componentDidMount() {
		console.log('componentDidMount');
		this.fetchData();
	}
	fetchData() {
		var url = "/api/test";
		fetch(url)
			.then( response => response.text() )
			.then((responseData) => {
				console.log(responseData);
				this.setState({
					data: responseData
				});
			});
	}
	render () {
		let data = this.state.data;
		return (
			<h1>
				<span>{data}</span>
				<img src="favicon.ico" />
				<Link to="/about">About</Link>
			</h1>
	  
		);
	}
}

class First extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>I am First</div>
		)
	}
}

class Third extends React.Component {
	constructor(props) {
		super(props);
		document.title = "Third";
	}
	render() {
		return (
			<h1>I am Third</h1>
		)
	}
};

render((
	<Router history={browserHistory}>
		<Route path="/" component={Hello}/>
		<Route path="/about" component={First}/>
	</Router>
), document.querySelector('#container'));