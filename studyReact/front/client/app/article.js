import React from 'react';

import LoadingItem from './component/loading';

import styles from './css/article.css';

import {markdown} from 'markdown';

export default class Article extends React.Component {
	constructor(props, context) {
		super(props, context);
		var loading = true; //表示加载中
		this.state = {
			title: '',
			tag: '',
			time: '',
			introduction: '',
			content: '',
			loading: loading
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
					content: markdown.toHTML(article.content),
					loading: false
				});
			}
		);	
	}
	render() {
		var component = this.state.loading ? 
			(<LoadingItem />) : 
			(Array.prototype.push.call([], 
					<h1 className={styles.title}>{this.state.title}</h1>,
					<div className={styles.message}>时间：{this.state.time}&nbsp;&nbsp;&nbsp;&nbsp;标签：{this.state.tag}</div>,
					<div className={styles.content} dangerouslySetInnerHTML={{__html: this.state.content}}></div>
			));

		return (
			<div className={styles.articleContainer}>
				{component}
			</div>
		)
	}
}

// this.context.router
Article.contextTypes = {
	router: React.PropTypes.object.isRequired
}