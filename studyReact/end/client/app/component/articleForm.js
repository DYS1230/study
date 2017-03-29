import React from 'react';

import styles from './articleForm.css';

export default class AriticleForm extends React.Component {
	constructor(props) {
		super(props);
		var article = this.props.article;
		this.state = {
			title: article.title || '',
			time: article.time || '',
			tag: article.tag || '',
			introduction: article.introduction || '',
			content: article.content || ''
		};
	}
	handleChange(event, key) {
		this.setState({[key]: event.target.value});
	}
	handleSubmit(event) {
		event.preventDefault();
		var article = {
			title: this.state.title,
			time: this.state.time,
			tag: this.state.tag,
			introduction: this.state.introduction,
			content: this.state.content		
		};
		this.props.postArticle(article);
	}
	render() {
		return (
			<div>
				<h1 className={styles.title}>文章</h1>
				<form onSubmit={(event) => this.handleSubmit(event)}>
					<input type="text"
						className={`${styles.inputContainer} ${styles.inputTitle}`}
						placeholder="标题"
						onChange={(event, name) => this.handleChange(event, 'title')}
						value={this.state.title} />
					
					<div className={styles.inputGroup}>
						<input type="text"
							className={`${styles.inputContainer} ${styles.inputTime}`}
							placeholder="时间"
							onChange={(event, name) => this.handleChange(event, 'time')}
							value={this.state.time} />
						<input type="text"
							className={`${styles.inputContainer} ${styles.inputTag}`}
							placeholder="标签"
							onChange={(event, name) => this.handleChange(event, 'tag')}
							value={this.state.tag} />
					</div>
					<textarea type="text"
						className={`${styles.inputContainer} ${styles.inputIntroduction}`}
						placeholder="引言"
						onChange={(event, name) => this.handleChange(event, 'introduction')}
						value={this.state.introduction} />
					<textarea type="text"
						className={`${styles.inputContainer} ${styles.inputContent}`}
						placeholder="内容"
						onChange={(event, name) => this.handleChange(event, 'content')}
						value={this.state.content} />
					
					<button className={styles.postButton}>发表</button>
				</form>
			</div>
		)
	}	
}