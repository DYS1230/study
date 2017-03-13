import React from 'react';

import styles from './articleItem.css';

export default class ArticleItem extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		var {
			title,
			tag,
			time,
			introduction,
			_id
		} = this.props.article;
		return (
			<li className={styles.articleItem}>
				<div>
					<span className={styles.tag}>
						{tag}
						<i className={styles.arrow}></i>
					</span>
					<span className={styles.title}>{title}</span>
				</div>
				<div className={styles.message}>
					<span>时间：{time}</span>
				</div>
				<div className={styles.introduction}>
					<span>{introduction}</span>
				</div>
				<a className={styles.read} href={'/article/' + _id}>阅读全文 »</a>
			</li>
		)
	}
}