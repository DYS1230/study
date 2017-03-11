import React from 'react';

import styles from './css/home.css';

import SideBar from './sideBar';

import Pagination from './component/pagination';

import { browserHistory, Link } from 'react-router';

export default class Home extends React.Component {
	constructor(props) {
		super(props);

		var pageNumber = this.props.params.number ? this.props.params.number : 1;
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

	handleClick(event) {

	}

	handlePageChange(pageNumber) {
		this.setState({
			activeNumber: pageNumber
		})
		this.fetchArticleData(pageNumber);
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
					<Link className={styles.read} to={{pathname: '/article/' + item._id}}>阅读全文 »</Link>
				</li>
			)
		} )
		return (
			<div className={styles.articleContainer}>
				<ul className={styles.articleList} onClick={(event) => this.handleClick(event)}>
					{node}
				</ul>
				<Pagination 
					onChange={(pageNumber) => this.handlePageChange(pageNumber)}
					activeNumber={this.state.activeNumber}
					totalNumber="2" />
			</div>
		)
	}
}

