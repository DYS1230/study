import React from 'react';

import styles from './css/home.css';

import ArticleItem from './component/articleItem';

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			article: [],
		};
	}
	
	componentDidMount() {
		this.fetchArticleData();
	}

	fetchArticleData() {
		fetch('/api/articleList/1', {
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

	render() {
		var data = this.state.article; // 此处为引用，非直接赋值，当this.state.article变化时，data也会变，后期使用redux
		var node = data.map( (item, index) => {
			return (
				<ArticleItem key={index} article={item} />
			)
		} );
		return (
			<div className={styles.articleListContainer}>
				<ul className={styles.articleList} onClick={(event) => this.handleClick(event)}>
					{node}
				</ul>
				<div className={styles.textCenter}>
					<a className={styles.readMore} href="/articlelist/1">查看更多...</a>
				</div>
			</div>
		)
	}
}