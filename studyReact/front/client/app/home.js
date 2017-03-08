import React from 'react';

import x from 'node-fetch';

import styles from './css/home.css';

import SideBar from './sideBar';

import { browserHistory } from 'react-router';

import auth from './test';


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
				this.setState({
					article: data
				});
			}
		);		
	}
	handleClick(event) {

	}
	test(event) {
		auth.setAuth();
	}
	render() {
		var data = this.state.article; // 此处为引用，非直接赋值，当this.state.article变化时，data也会变，后期使用redux
		var node = data.map( (item, index) => {
			console.log(item);
			return (
				<div key={index}>
					<h1>Article</h1>
					<p> title: {item.title}</p>
					<p> time: {item.time}</p>
					<p> tag: {item.tag}</p>
					<p> content: {item.content}</p>				
				</div>
			)
		} )
		console.log(node);
		return (
			<div className={styles.homePage}>
				<div className={styles.articleContainer} onClick={(event) => this.handleClick(event)}>
					{node}
				</div>
				<SideBar />
			</div>
		)
	}
}

