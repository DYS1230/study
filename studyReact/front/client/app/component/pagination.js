import React from 'react';

import styles from './pagination.css';

export default class Pagination extends React.Component {
	constructor(props) {
		super(props);
		//console.log(props);
	}
	buildPage() {

		var {
			onChange,
			activeNumber,
			totalNumber
		} = this.props;

		var pages = [];

		(activeNumber > 1) && pages.push(
			<div
				className={`${styles.arrowContainer} ${styles.flipPrev}`}
				key={activeNumber - 1}
				onClick={(pageNumber) => onChange(activeNumber -1)}
			><i className={`${styles.arrow} ${styles.arrowLeft}`} /></div>
		)

		pages.push(
			<div 
				key={activeNumber}
				className={styles.textContainer}>
				{activeNumber} / {totalNumber}
			</div>
		);

		(activeNumber < totalNumber) && pages.push(
			<div
				className={`${styles.arrowContainer} ${styles.flipNext}`}
				key={activeNumber + 1}
				onClick={(pageNumber) => onChange(activeNumber + 1)}
			><i className={`${styles.arrow} ${styles.arrowRight}`} /></div>
		)

		return pages;	
		// return (
		// 	<div>
		// 		<span>上</span>
		// 		<span>1</span>
		// 		<span onClick={(pageNumber) => onChange(activeNumber + 1)}>下</span>
		// 		<input type="text" />
		// 		<button>GO</button>
		// 	</div>
		// )
	}
	render() {
		var pages = this.buildPage();
		return (
			<div className={styles.paginationContainer}>
				{pages}
			</div>
		)
	}
}