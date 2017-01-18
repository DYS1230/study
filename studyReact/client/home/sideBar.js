import React from 'react';

import styles from './sideBar.css'

export default class SideBar extends React.Component {
	render() {
		return (
			<div className={styles.sideBar}>
				<div className={styles.sideUnit}>
					<div className={styles.sideUnitHeader}>
						<strong>简介</strong>
						<span>introduction</span>
					</div>
					<div className={styles.sideUnitContent}>
						recode
					</div>
				</div>
				<div className={styles.sideUnit}>
					<div className={styles.sideUnitHeader}>
						<strong>Article</strong>
						<span>Article</span>
					</div>
					<div className={styles.sideUnitContent}>
						Article
					</div>
				</div>
				<div className={styles.sideUnit}>
					<div className={styles.sideUnitHeader}>
						<strong>author</strong>
						<span>author</span>
					</div>
					<div className={styles.sideUnitContent}>
						author
					</div>
				</div>
			</div>
		)
	}
}