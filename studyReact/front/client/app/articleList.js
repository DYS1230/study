import React from 'react';

import styles from './css/article.css';

import LoadingItem from './component/loading';

import ArticleItem from './component/articleItem';

import Pagination from './component/pagination';

import { browserHistory, Link } from 'react-router';

//console.log(browserHistory);

//browserHistory.push('/about');;

export default class ArticleList extends React.Component {
	constructor(props, context) {
		super(props, context);
		var pageNumber = this.props.params.number ? parseInt(this.props.params.number) : 1; //页码
		var totalNumber = 1; //页数
		var loading = true; //表示加载中
		this.state = {
			article: [],
			totalNumber: totalNumber,
			activeNumber: pageNumber,
			loading: loading
		};

		console.log(this.props.route);
	}

	componentWillMount() {
	}

	routerLeaveInformation() {
		return 'You have unsaved information, are you sure you want to leave this page?';
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
				//console.log(Object.prototype.toString.call(data));
				//console.log(data);
				this.setState({
					article: data,
					loading: false
				});
			}
		);		
	}

	handlePageChange(pageNumber) {
		browserHistory.push('/articlelist/' + pageNumber); // 此处改变了context.router
		this.setState({
			loading: true,
			//activeNumber: parseInt(newNumber)
		});
		// this.fetchArticleData(pageNumber);
		// 当在articleList页面点击article按钮时，会出现bug，页面不会调到第一页
		// 原因为nav组件用的link是用history.pushstate，不会强制刷新页面，当然用replace同样不会
		// 则将改变页面方法调到componentWillReceiveProps里面
		// 因为context.router会改变，componentWillReceiveProps，shouldComponentUpdate
		// componentWillUpdate，render，componentDidUpdate都会被依次调用，则在willReceive中改变数据
	}

	listenUrl() {
		// 不可行的方法！！因为是单页面应用，会在所有页面都添加了改监视
		// var _this = this;
		// 监听url的变化，由于没有升到react-router4，nav有个bug，
		// 点击article按钮非跳转，而是history.pushstate，
		// 这样如果在articleList页面里点击，则不会发起内容请求，内容不变
		// console.log(this.context.router);
		// this.context.router.listen( (location) => {
		// 	var locationArr = location.pathname.split('/');
		// 	var param = locationArr[locationArr.length - 1];
		// 	_this.fetchArticleData(param);
		// });
	}

	componentWillReceiveProps() {
		var oldNumber = this.props.params.number;
		var newNumber = this.props.router.params.number;
		if (oldNumber != newNumber) {
			this.setState({
				activeNumber: parseInt(newNumber)
			});
			this.fetchArticleData(newNumber);
		}
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

ArticleList.contextTypes = {
	router: React.PropTypes.object.isRequired
};