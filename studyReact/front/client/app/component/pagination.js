import React from 'react';

import styles from './pagination.css';

export default class Pagination extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			targetNumber: ''
		};
	}

	handleChange(event) {
		this.setState({
			targetNumber: event.target.value
		});
	}

	skipPage(pageNumber) {
		var {
			onChange,
			activeNumber,
			totalNumber
		} = this.props;

		pageNumber = parseInt(pageNumber);
		activeNumber = parseInt(activeNumber);
		totalNumber = parseInt(totalNumber);

		if (pageNumber > 0 && pageNumber <= totalNumber) {
			onChange(pageNumber);
			this.setState({
				targetNumber: ''
			})
		}
	}

	buildPage() {
		var {
			onChange,
			activeNumber,
			totalNumber
		} = this.props;

		activeNumber = parseInt(activeNumber);
		totalNumber = parseInt(totalNumber);

		var pages = [];

		var prevOpacity = (activeNumber > 1) ? '1' : '0';
		pages.push(
			<div
				style={{opacity: prevOpacity}}
				className={styles.arrowContainer}
				key="prev"
				onClick={(pageNumber) => onChange(activeNumber -1)}
			><i className={`${styles.arrow} ${styles.arrowLeft}`} /></div>
		)

		pages.push(
			<div 
				key="number"
				className={styles.textContainer}>
				{activeNumber} / {totalNumber}
			</div>
		);

		var nextOpacity = (activeNumber < totalNumber) ? '1' : '0';
		pages.push(
			<div
				style={{opacity: nextOpacity}}
				className={styles.arrowContainer}
				key="next"
				onClick={(pageNumber) => onChange(activeNumber + 1)}
			><i className={`${styles.arrow} ${styles.arrowRight}`} /></div>
		)

		return pages;
	}

	render() {
		var pages = this.buildPage();
		return (
			<div className={styles.paginationContainer}>
				<div className={styles.limitContainer}>
					{pages}
				</div>
				<div>
					<input
						type="text"
						className={styles.input}
						onChange={(event) => this.handleChange(event)}
						value={this.state.targetNumber} />
					<button className={styles.button} onClick={(pageNumber) => this.skipPage(this.state.targetNumber)}>Go</button>
				</div>
			</div>
		)
	}
}