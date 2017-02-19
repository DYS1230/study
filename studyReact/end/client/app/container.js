import React from 'react';

import { Link } from 'react-router';

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
			<div>
				{this.props.children}
			</div>
		);
	}
}