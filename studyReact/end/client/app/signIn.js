import React from 'react';

import styles from './css/sign.css';

//import $ from 'jquery';

export default class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			password: ''
		}
	}
	handleSubmit(event) {
		event.preventDefault();	

		fetch('/api/backstage/sign', {
			method: 'POST',
			credentials: 'include',
			headers:{
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: this.state.name,
				password: this.state.password
			})
		}).then( 
			res => res.text()
		).then(
			data => {
				if (data == 'success') {
					
				}
			}
		);
	}
	// handleChange(key, event) {
	// 	console.log(event);
	// 	this.setState({[key]: event.target.value})
	// }
	hanleChange(event, key) {
		this.setState({[key]: event.target.value})
	}
	handleClick(event) {
		console.log(document.cookie);
		console.log(document.session);
	}
	render() {
		return (
			<div className={styles.signContainer}>
				<form className={styles.signForm} onSubmit={(event) => this.handleSubmit(event)}>
					<h1 className={styles.signTitle} onClick={(event) => this.handleClick(event)}>登录</h1>
					<div className={styles.formGroup}>
						<input type="text" 
							placeholder="用户名" 
							name="userName" 
							className={styles.inputControl} 
							autoComplete="off"
							//onChange={this.handleChange.bind(this, 'name')}
							onChange={(event, name) => this.hanleChange(event, 'name')}
							value={this.state.name} />
					</div>
					<div className={styles.formGroup}>
						<input type="password" 
							placeholder="密码"
							name="password"
							className={styles.inputControl}
							onChange={(event, password) => this.hanleChange(event, 'password')}
							value={this.state.password} />
					</div>
					<div className={styles.formGroup}>
						<input type="submit"
							className={`${styles.success} ${styles.btn}`}
							//onClick={(event) => this.handleClick(event)}
							value="登录" />
						{/*<button className={`${styles.success} ${styles.btn}`} onClick={() => this.handleClick(event)}>登录</button>*/}
					</div>
				</form>
			</div>
		)
	}
}