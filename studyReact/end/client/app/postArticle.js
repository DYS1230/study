import React from 'react';

import styles from './css/article.css';

export default class PostAriticle extends React.Component {
	render() {
		return (
			<div>
				{/*<h1 className={styles.title}>发表文章</h1>*/}
				<div className={styles.inputGroup}>
					{/*<label>Title</label>*/}
					<input type="text" className={styles.inputTitle} placeholder="标题"/>
				</div>
				<div className={styles.inputGroup}>
					<input type="text" placeholder="时间"/>
					<input type="text" placeholder="标签"/>
				</div>
				<div className={styles.inputGroup}>
					<input type="text" placeholder="内容"/>
				</div>
				<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
			</div>
		)
	}
}