import React from 'react';

import styles from './css/article.css';

import {markdown} from 'markdown';

export default class Article extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			title: '',
			tag: '',
			time: '',
			introduction: '',
			content: ''
		}
	}
	componentDidMount() {
		console.log(this.props);
		console.log(this.context);
		//this.context.router.replace('/')
		var id = this.props.params.id;
		fetch('/api/article/' + id, {
			method: 'GET',
			Accept: 'application/json'
		}).then(
			res => res.json()
		).then(
			data => {
				console.log(Object.prototype.toString.call(data));
				console.log(data);
				var article = data[0];
				this.setState({
					title: article.title,
					tag: article.tag,
					time: article.time,
					introduction: article.introduction,
					content: markdown.toHTML(article.content)
				});
			}
		);	
	}
	render() {
		
		return (
			<div className={styles.articleContainer}>
				<h1 className={styles.title}>{this.state.title}</h1>
				<div className={styles.message}>时间：{this.state.time}&nbsp;&nbsp;&nbsp;&nbsp;标签：{this.state.tag}</div>
				<div className={styles.content} dangerouslySetInnerHTML={{__html: this.state.content}}></div>
			</div>
		)
	}
}

// this.context.router
Article.contextTypes = {
	router: React.PropTypes.object.isRequired
}