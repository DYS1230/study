import React from 'react';

import styles from './css/sideBar.css';

export default class SideBar extends React.Component {


	render() {
		
		var sidebarData = [
			{
				'text': 'User',
				'link': '/'
			},
			{
				'text': 'Artical',
				'link': '/'
			}
		];

		var _this = this;
		var node = sidebarData.map(function (item, index) {
			return (
				<li className={styles.sidebatItem} key={index}>
					123
				</li>
			)
		});

		return (
			<div className={styles.sideBar}>
				<ul>
					{node}
				</ul>
			</div>
		)
	}
}