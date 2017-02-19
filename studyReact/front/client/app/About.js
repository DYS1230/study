import React from 'react';

import styles from './css/about.css'


//console.log(styles);

export default class About extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<h1 className={styles.test}>The About content</h1>
		)
	}
}
