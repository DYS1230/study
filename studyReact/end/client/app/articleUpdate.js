import React from 'react';

import ArticleForm from './component/articleForm';

import LoadingItem from './component/loading';

import styles from './css/article.css';

export default class PostAriticle extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			article: {},
			loading: true
		};
	}
	componentDidMount() {
		var id = this.props.params.id;
		fetch('/api/article/' + id, {
			method: 'GET',
			Accept: 'application/json'
		}).then(
			res => res.json()
		).then(
			data => {
				var article = data[0];
				this.setState({
					article: article,
					loading: false
				});
			}
		);
	}
	handleSubmit(article) {
		fetch('/api/backstage/updatearticle', {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				article: article,
				id: this.props.params.id
			})
		}).then(
			res => res.text()
		).then(
			data => {
				
			}
		);
	}
	render() {
		console.log(this.state.article);
		var component = this.state.loading ?
			(<LoadingItem />) :
			<ArticleForm article={this.state.article} postArticle={(article) => this.handleSubmit(article)} />
		return (
			<div>
				{component}
			</div>
		)
	}
}