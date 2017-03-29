import React from 'react';

import { Link } from 'react-router';

import Nav from './component/nav';

import SideBar from './component/sideBar';

import styles from './css/container.css';

export default  class Container extends React.Component {
	constructor(props) {
		super(props);
	}
	render () {
		return (
			<div className={styles.allContainer}>
				<header className={styles.headerContainer}>
					<Nav />
				</header>
				<section className={styles.contentContainer}>
					<div className={styles.sideBar}>
						<SideBar />
					</div>
					<div className={styles.content}>
						{this.props.children}
					</div>
				</section>
			</div>
		);
	}
}