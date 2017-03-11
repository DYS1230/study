import React from 'react';

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
			<span
				key={activeNumber - 1}
				onClick={(pageNumber) => onChange(activeNumber -1)}
			>
				上
			</span>
		)

		pages.push(
			<span key={activeNumber}>{activeNumber}</span>
		);

		(activeNumber < totalNumber) && pages.push(
			<span
				key={activeNumber + 1}
				onClick={(pageNumber) => onChange(activeNumber + 1)}
			>
				下
			</span>
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
			<div>
				{pages}
			</div>
		)
	}
}