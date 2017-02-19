import React from 'react';

import styles from './css/sideBar.css';

export default class SideBar extends React.Component {
	render() {
		return (
			<div className={styles.sideBar}>
				<div className={styles.sideUnit}>
					<div className={styles.sideUnitHeader}>
						<i className={`${styles.mushroomIco} ${styles.ico}`}></i>
						<strong>简介</strong>
						<span>Introduction</span>
					</div>
					<div className={styles.sideUnitContent}>
						<p>
							我这个人比较静。
							<br />
							为什么？
							<br />
							因为夜深人静。
							<br />
						</p>
					</div>
				</div>
				<div className={styles.sideUnit}>
					<div className={styles.sideUnitHeader}>
						<i className={`${styles.pigIco} ${styles.ico}`}></i>
						<strong>文章</strong>
						<span>Article</span>
					</div>
					<div className={styles.sideUnitContent}>
						Article
					</div>
				</div>
				<div className={styles.sideUnit}>
					<div className={styles.sideUnitHeader}>
						<i className={`${styles.greenIco} ${styles.ico}`}></i>
						<strong>作者</strong>
						<span>Author</span>
					</div>
					<div className={styles.sideUnitContent}>
						<p>Name： DYS</p>
						<p>GitHub： DYS1230</p>

						<p>
							人如果不装逼，跟咸鱼有什么区别
						</p>
					</div>
				</div>
			</div>
		)
	}
}