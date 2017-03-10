import React from 'react';

export default class Article extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			title: '',
			tag: '',
			time: '',
			introduction: '',
			content: ''
		}
	}
	componentDidMount() {
		console.log(this.props);
		console.log(this.context);
		//this.context.router.replace('/')
		var id = this.props.params.id;
		fetch('/api/article/' + id, {
			method: 'GET',
			Accept: 'application/json'
		}).then(
			res => res.json()
		).then(
			data => {
				console.log(Object.prototype.toString.call(data));
				console.log(data);
				var article = data[0];
				this.setState({
					title: article.title,
					tag: article.tag,
					time: article.time,
					introduction: article.introduction,
					content: article.content
				});
			}
		);	
	}
	render() {
		
		return (
			<div>
				{this.state.content}
			</div>
		)
	}
}

// this.context.router
Article.contextTypes = {
	router: React.PropTypes.object.isRequired
}