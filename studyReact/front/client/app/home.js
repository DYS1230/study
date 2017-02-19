import React from 'react';

import styles from './css/home.css';

import SideBar from './sideBar';

import { browserHistory } from 'react-router';

export default class Home extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		
	}
	handleClick(event) {
		//console.log(1212);
		fetch('/bb', {
			method: 'POST'
		}).then( (data) => {
			data.text().then(function(data) {console.log(data)});
		})

		// fetch('/aaaa/login', {
		// 	method: 'POST',
		// 	headers:{
		// 		'Content-Type': 'application/json'
		// 	},
		// 	body: JSON.stringify({
		// 		login_username: 'a',
		// 		login_password: 'a'
		// 	})
		// }).then( (data) => {
		// 	console.log(data.text().then(function(data) {console.log(data); browserHistory.push('/test')}));
		// })
	}
	render() {
		return (
			<div className={styles.homePage}>
				<div className={styles.articleContainer} onClick={(event) => this.handleClick(event)}>
					Article
					{/*<form method="POST" action="/aaaa/login">
						<label>name</label>
						<input type="text" name="login_username" />
						<input type="password" name="login_password" />
						<input type="submit" value="login" />
					</form>*/}

					<form method="POST" action="/bb">
						<label>name</label>
						<input type="submit" value="login" />
					</form>

				</div>
				<SideBar />
			</div>
		)
	}
}



