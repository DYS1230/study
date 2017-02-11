import React from 'react';

import {Router, Link, IndexLink} from 'react-router';

import styles from './nav.css';

import img from './../img/7.png';

export default class Nav extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			index: 0
		}
	}
	componentDidMount() {

	}
	//onClick={() => this.handleClick()} 时，传了三个参数
	handleClick(event, index) {
		console.log(this.context);
		
		console.log('click');
		this.setState({
			index: index
		})
	}
	render() {

		let navData = [
			{
				'text': 'Home',
				'link': '/'
			},
			{
				'text': 'Artical',
				'link': '/test'
			},
			{
				'text': 'About',
				'link': '/about'
			},
		];
		const _this = this;
		let node = navData.map(function (item, index) {
			var display = 'block';
			//判断路由是否匹配，若匹配，下划线的display为none
			if (_this.context.router.isActive(item.link, true)) {
				display = 'none';
			}
			return (
				<li className={styles.navbarItem} key={index} onClick={(event, index) => _this.handleClick(event, index)}>
					<Link to={item.link} activeClassName={styles.active} onlyActiveOnIndex>{item.text}</Link>
					<div className={styles.bottomBorder} style={{display: display}}></div>
				</li>
			)
		})
		return (
			<header>
				<nav className={styles.navbar}>
					<h1 className={styles.navbarTitle}>BLOG</h1> 
					<ul className={styles.navbarList}> 
						{node}
					</ul>
				</nav>
				{/*<img src={require('./../img/2.png')} style={{ height: 200, width: 200, objectFit: 'cover'}}/>*/}
				<img src={img} className={styles.navImg} />
			</header>
		)
	}
}

Nav.contextTypes = {
	router: React.PropTypes.object.isRequired
}