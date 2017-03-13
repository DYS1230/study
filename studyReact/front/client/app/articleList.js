import React from 'react';

import styles from './css/article.css';

import ArticleItem from './component/articleItem';

import Pagination from './component/pagination';

import { browserHistory, Link } from 'react-router';

//console.log(browserHistory);

//browserHistory.push('/about');;

export default class ArticleList extends React.Component {
	constructor(props) {
		super(props);
		console.log(this.props.history);
		var pageNumber = this.props.params.number ? parseInt(this.props.params.number) : 1;
		this.state = {
			article: [],
			activeNumber: pageNumber
		};
	}
	componentDidMount() {
		//默认页数为1
		var pageNumber = this.state.activeNumber;
		this.fetchArticleData(pageNumber);
	}

	fetchArticleData(pageNumber) {
		fetch('/api/articleList/' + pageNumber, {
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

	handlePageChange(pageNumber) {
		this.setState({
			activeNumber: pageNumber
		});
		browserHistory.push('/articlelist/' + pageNumber);
		this.fetchArticleData(pageNumber);
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
				<Pagination 
					onChange={(pageNumber) => this.handlePageChange(pageNumber)}
					activeNumber={this.state.activeNumber}
					totalNumber="3" />
			</div>
		)
	}
}