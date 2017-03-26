import React from 'react';

import styles from './css/home.css';

import LoadingItem from './component/loading';

import ArticleItem from './component/articleItem';

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		var loading = true; //表示加载中
		this.state = {
			article: [],
			loading: loading
		};
console.log( this.props);

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
				this.setState({
					article: data,
					loading: false
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

		var component = this.state.loading ? 
			(<LoadingItem />) : 
			(<ul className={styles.articleList} onClick={(event) => this.handleClick(event)}>
				{node}
				<div className={styles.textCenter}>
					<a className={styles.readMore} href="/articlelist/1">查看更多...</a>
				</div>
			</ul>);

		return (
			<div className={styles.articleListContainer}>
				{component}
			</div>
		)
	}
}