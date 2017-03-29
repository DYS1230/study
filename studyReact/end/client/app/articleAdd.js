import React from 'react';

import ArticleForm from './component/articleForm';

import styles from './css/article.css';

export default class PostAriticle extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			article: {}
		};
	}
	handleSubmit(article) {
		fetch('/api/backstage/postarticle', {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(article)
		}).then(
			res => res.text()
		).then(
			data => {
				
			}
		);
	}
	render() {
		return (
			<ArticleForm article={this.state.article} postArticle={(article) => this.handleSubmit(article)} />
		)
	}
}