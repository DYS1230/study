import React from 'react';

import styles from './css/home.css';

import SideBar from './sideBar';

import { browserHistory } from 'react-router';

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			article: []
		};
	}
	componentDidMount() {
		fetch('/api/allarticle', {
			method: 'GET',
			Accept: 'application/json'
		}).then(
			res => res.json()
		).then(
			data => {
				console.log(Object.prototype.toString.call(data));
				console.log(data);
				this.setState({
					article: data
				});
			}
		);		
	}
	handleClick(event) {

	}
	render() {
		var data = this.state.article; // 此处为引用，非直接赋值，当this.state.article变化时，data也会变，后期使用redux
		var node = data.map( (item, index) => {
			return (
				<li key={index} className={styles.articleItem}>
					<div>
						<span className={styles.tag}>
							{item.tag}
							<i className={styles.arrow}></i>
						</span>
						<span className={styles.title}>{item.title}</span>
					</div>
					<div className={styles.message}>
						<span>时间：{item.time}</span>
					</div>
					<div className={styles.introduction}>
						<span>{item.introduction}</span>
					</div>
					<a className={styles.read}>阅读全文 »</a>
				</li>
			)
		} )
		return (
			<div className={styles.homePage}>
				<ul className={styles.articleList} onClick={(event) => this.handleClick(event)}>
					{node}
				</ul>
				<SideBar />
			</div>
		)
	}
}

