import React from 'react';

import styles from './css/article.css';

export default class PostAriticle extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			time: '',
			tag: '',
			content: ''
		};
	}
	handleClick() {
		console.log('click');
	}
	handleClic(event) {
		console.log('yes');
	}
	handleChange(event, key) {
		this.setState({[key]: event.target.value});
	}
	handleSubmit(event) {
		event.preventDefault();

		console.log('submit');

		fetch('/api/backstage/postarticle', {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				title: this.state.title,
				time: this.state.time,
				tag: this.state.tag,
				content: this.state.content
			})
		}).then(
			res => res.text()
		).then(
			data => {
				console.log(data);
			}
		);


	}
	render() {
		return (
			<div>
				<h1 className={styles.title}>文章</h1>
				
					{/*<label>Title</label>*/}
				<form onSubmit={(event) => this.handleSubmit(event)}>
					<input type="text"
						className={`${styles.inputContainer} ${styles.inputTitle}`}
						placeholder="标题"
						onChange={(event, name) => this.handleChange(event, 'title')}
						value={this.state.title} />
					
					<div className={styles.inputGroup} onClick={(event) => {this.handleClic(event)}}>
						<input type="text"
							className={`${styles.inputContainer} ${styles.inputTime}`}
							placeholder="时间"
							onChange={(event, name) => this.handleChange(event, 'time')}
							value={this.state.time} />
						<input type="text"
							onFocus={(event) => this.handleClick(event)}
							className={`${styles.inputContainer} ${styles.inputTag}`}
							placeholder="标签"
							onChange={(event, name) => this.handleChange(event, 'tag')}
							value={this.state.tag} />
					</div>
					
					<textarea type="text"
						className={`${styles.inputContainer} ${styles.inputContent}`}
						placeholder="内容"
						onChange={(event, name) => this.handleChange(event, 'content')}
						value={this.state.content} />
					
					<button className={styles.postButton}>发表</button>
				</form>

				<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
			</div>
		)
	}
}