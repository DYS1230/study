import React from 'react';

import styles from './home.css';

import SideBar from './sideBar.js';

export default class Home extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		
	}
	render() {
		return (
			<div className={styles.homePage}>
				<div className={styles.articleContainer}>
					Article
				</div>
				<SideBar />
			</div>
		)
	}
}



