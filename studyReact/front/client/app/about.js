import React from 'react';

import styles from './css/about.css'

export default class About extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className={styles.aboutContent}>
				<h1 className={styles.firstTitle}>About Me</h1>
				<p>胸怀大志，心怀平常。</p>
				<p>我是董业森，潮汕人，东北大学2017届毕业生。</p>
				<p>会点机械，做点后端，主事前端。</p>
				<h1>About Blog</h1>
				<p>博客主要记录自己的成长，记录自己的知识，与他人分享，找到志同道合的朋友。</p>
				<p>该博客使用React，Express，Mongoose搭建，打包工具为Webpack。</p>
				<p>源码：<a target="_blank" href="https://github.com/DYS1230/study/tree/master/studyReact">https://github.com/DYS1230/study/tree/master/studyReact</a></p>
				<p>欢迎star</p>
				<h1>Social Links</h1>
				<p>Github：<a target="_blank" href="https://github.com/DYS1230">DYS1230</a></p>
				<p>E-mail：<a target="_blank" href="mailto:dys_jingdai@163.com">dys_jingdai@163.com</a></p>
			</div>
		)
	}
}
