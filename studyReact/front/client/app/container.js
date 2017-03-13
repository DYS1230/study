import React from 'react';

import { Link } from 'react-router';

import Nav from './component/nav';

import SideBar from './component/sideBar';

import styles from './css/container.css';

import img from '../images/7.png';

export default  class Container extends React.Component {
	constructor(props) {
		super(props);
	}
	render () {
		return (
			<div className={styles.allcontainer}>
				<header className={styles.headerContainer}>
					<Nav />
					<img src={img} className={styles.navImg} />
				</header>
				<section className={styles.contentContainer}>
					<div className={styles.content}>
						{this.props.children}
					</div>
					<div className={styles.sideBar}>
						<SideBar />
					</div>
				</section>
				<footer className={styles.footerContainer}>
					<p>author: DYS</p>
					<p>Hello, Welcome</p>
				</footer>
			</div>
		);
	}
}