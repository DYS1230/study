import React from 'react';

import { Link } from 'react-router';

import Nav from './nav.js';

import styles from './container.css';

export default  class Container extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		//console.log('componentWillMount');
	}
	componentDidMount() {
		//console.log('componentDidMount');
		// this.fetchData();
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
		return (
			<div className={styles.content}>
				<Nav />
				<section>
					{this.props.children}
				</section>
				<footer className={styles.footerContainer}>
					<p>author: DYS</p>
					<p>Hello, Welcome</p>
				</footer>
			</div>
		);
	}
}