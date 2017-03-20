import React from 'react';

import styles from './css/article.css';

import LoadingItem from './component/loading';

import ArticleItem from './component/articleItem';

import Pagination from './component/pagination';

import { browserHistory, Link } from 'react-router';

//console.log(browserHistory);

//browserHistory.push('/about');;

export default class ArticleList extends React.Component {
	constructor(props) {
		super(props);
		var pageNumber = this.props.params.number ? parseInt(this.props.params.number) : 1; //页码
		console.log(this.props.params.number);
		var totalNumber = 1; //页数
		var loading = true; //表示加载中
		this.state = {
			article: [],
			totalNumber: totalNumber,
			activeNumber: pageNumber,
			loading: loading
		};
	}

	componentDidMount() {
		//默认页码为1
		var pageNumber = this.state.activeNumber;
		this.fetchArticleData(pageNumber);
		this.fetchTotalNumber();
	}

	fetchTotalNumber() {
		fetch('/api/totalpagenumber/', {
			method: 'GET',
		}).then(
			res => res.text()
		).then(
			data => {
				this.setState({
					totalNumber: data
				});
			}
		);		
	}

	fetchArticleData(pageNumber) {
		fetch('/api/articlelist/' + pageNumber, {
			method: 'GET',
			Accept: 'application/json'
		}).then(
			res => res.json()
		).then(
			data => {
				console.log(Object.prototype.toString.call(data));
				console.log(data);
				this.setState({
					article: data,
					loading: false
				});
			}
		);		
	}

	handlePageChange(pageNumber) {
		this.setState({
			activeNumber: pageNumber
		});
		browserHistory.push('/articlelist/' + pageNumber);
		this.setState({
			loading: true
		});
		this.fetchArticleData(pageNumber);
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
			(<ul className={styles.articleList}>
				{node}
				<Pagination 
					onChange={(pageNumber) => this.handlePageChange(pageNumber)}
					activeNumber={this.state.activeNumber}
					totalNumber={this.state.totalNumber} />

			</ul>);

		return (
			<div className={styles.articleListContainer}>
				{component}
			</div>
		)
	}
}