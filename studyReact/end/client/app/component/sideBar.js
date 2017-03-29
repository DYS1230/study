import React from 'react';

import styles from './sideBar.css';

import {Link} from 'react-router';

export default class SideBar extends React.Component {


	render() {
		
		var sidebarData = [
			{
				'text': 'User',
				'link': '/backstage'
			},
			{
				'text': 'Artical',
				'link': '/backstage/article/add'
			},
			{
				'text': 'ArticalControl',
				'link': '/backstage/articlecontrol'
			}
		];

		var _this = this;
		var node = sidebarData.map(function (item, index) {
			return (
				<li className={styles.sidebarItem} key={index}>
					<Link to={item.link} activeClassName={styles.active} onlyActiveOnIndex>{item.text}</Link>
				</li>
			)
		});

		return (
			<div>
				<div className={styles.avatar}></div>
				<ul>
					{node}
				</ul>
			</div>
		)
	}
}