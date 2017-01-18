import React from 'react';

import styles from './home.css';

import SideBar from './sideBar.js';

export default class Nav extends React.Component {
	render() {
		return (
			<div className={styles.homePage}>
				<div className={styles.articleContainer}>Article</div>
				<SideBar />
			</div>
		)
	}
}