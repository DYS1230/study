import React from 'react';

import styles from './css/noPage.css';

export default class NoPage extends React.Component {
	render() {
		return (
			<div className={styles.starContainer}>
				<div className={styles.warnText}>
					<p>你陷入了一个未知的世界</p>
					<p>404 not found</p>
				</div>
				<div className={styles.stars}></div>
				<div className={styles.stars2}></div>
				<div className={styles.stars3}></div>			
			</div>
		)
	}
}