import React from 'react';

export default class Article extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			article: []
		};
	}
	componentWillMount() {
		console.log('componentWillMount');
		// fetch('/api/allarticle', {
		// 	method: 'GET',
		// 	'Content-Type': 'application/json',
  //      			'Accept': 'application/json'
		// }).then(
		// 	res => res.json()
		// ).then(
		// 	data => {
		// 		this.setState({
		// 			article: data
		// 		});
		// 	}
		// );

	}
	componentDidMount() {
		console.log('componentDidMount');
	}
	render () {
		return (
			<div>
				<h1>Article</h1>
				<p> title: {this.state.article.title}</p>
				<p> time: {this.state.article.time}</p>
				<p> tag: {this.state.article.tag}</p>
				<p> content: {this.state.article.content}</p>
			</div>
		)
	}
}