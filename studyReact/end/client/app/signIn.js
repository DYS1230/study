import React from 'react';

import styles from './css/sign.css';

//import $ from 'jquery';

export default class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			password: '',
			warnText: ''
		}
	}
	handleSubmit(event) {
		event.preventDefault();	

		//重置警告信息
		this.setState({warnText: ''});

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
				console.log(data);
				if (data == 'success') {
					this.props.router.replace('/backstage');
				} else {
					this.setState({warnText: data});
				}
			}
		);
	}
	handleChange(event, key) {
		this.setState({[key]: event.target.value})
	}
	render() {
		return (
			<div className={styles.signContainer}>
				<form className={styles.signForm} onSubmit={(event) => this.handleSubmit(event)}>
					<h1 className={styles.signTitle}>登录</h1>
					<div className={styles.formGroup}>
						<input type="text" 
							placeholder="用户名" 
							name="userName" 
							className={styles.inputControl} 
							autoComplete="off"
							onChange={(event, name) => this.handleChange(event, 'name')}
							value={this.state.name} />
					</div>
					<div className={styles.formGroup}>
						<input type="password" 
							placeholder="密码"
							name="password"
							className={styles.inputControl}
							onChange={(event, password) => this.handleChange(event, 'password')}
							value={this.state.password} />
					</div>
					<div className={styles.formGroup}>
						<input type="submit"
							className={`${styles.success} ${styles.btn}`}
							value="登录" />
					</div>
					<div className={styles.warnText} style={{display: this.state.warnText ? 'block' : 'none'}}>{this.state.warnText}</div>
				</form>
			</div>
		)
	}
}