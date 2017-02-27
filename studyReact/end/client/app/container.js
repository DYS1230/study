import React from 'react';

import { Link } from 'react-router';

import Header from './header.js';

import SideBar from './sideBar.js';

import styles from './css/container.css';

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
	render () {
		return (
			<div className={styles.contentContainer}>
				<Header />
				<SideBar />
				<section className={styles.wrapContainer}>
					{this.props.children}
				</section>
			</div>
		);
	}
}