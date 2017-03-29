import React from 'react';

import styles from './css/articleControl.css';

import {Link} from 'react-router';

export default class ArticleControl extends React.Component {
	constructor(props, context) {
		super(props, context);
		var pageNumber = this.props.params.number ? parseInt(this.props.params.number) : 1; //页码
		var totalNumber = 1; //页数
		var loading = true; //表示加载中
		this.state = {
			articles: [],
			totalNumber: totalNumber,
			activeNumber: pageNumber,
			loading: loading,
			searchText: ''
		}
	}

	handleChange(event) {
		this.setState({
			searchText: event.target.value
		});
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
				console.log(data);
				this.setState({
					articles: data,
					loading: false
				});
			}
		);		
	}

	render() {

		var data = this.state.articles;

		var node = data.map( (item, index) => {
			return (
				<tr key={index}>
					<td>{item.title}</td>
					<td>DYS</td>
					<td>{item.time}</td>
					<td><Link to={'/backstage/article/update/' + item._id}>更改</Link></td>
				</tr>
			)
		} );

		return (
			<div>
				<div className={styles.controlHeader}>
					<input type="text"
						className={styles.input}
						placeholder="search" 
						onChange={(event, name) => this.handleChange(event, 'title')}
						value={this.state.searchText}
					/>
					<Link className={styles.button} to="/backstage/article">newArticle</Link>
				</div>
				<table className={styles.articleTable}>
					<thead>
						<tr>
							<th>title</th>
							<th>author</th>
							<th>time</th>
							<th>operation</th>
						</tr>
					</thead>
					<tbody>
						{node}
					</tbody>
				</table>
			</div>
		)
	}
}

ArticleControl.contextTypes = {
	router: React.PropTypes.object.isRequired
};