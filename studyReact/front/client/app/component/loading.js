import React from 'react';

import styles from './loading.css';

export default class Loading extends React.Component {
	render() {
		return (
			<div className={styles.spinner}>
				<div className={styles.dot1}></div>
				<div className={styles.dot2}></div>
			</div>
		)
	}
} 