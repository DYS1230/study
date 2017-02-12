import React from 'react';

import styles from './sign.css';

import $ from 'jquery';

export default class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			password: ''
		}
	}
	componentWillMount() {
		console.log(this.state.name)
		//this.setState({name: ''});
	}
	handleClick(event) {
		event.preventDefault();
		event.stopPropagation();
		console.log(123);
	//	console.log(event.stopPropagation);
	//	console.log(event.preventDefault);
		console.log(arguments);

		console.log(this.state.password);
		return false;
	}
	handleSubmit(event) {
		event.preventDefault();


		//目前就jquery ajax可行
		$.ajax({
			type:"POST",
			url:"/api/control_back/sign_in",
			data: {aaaa: 2222}
		});

/*		
		var xhr = new XMLHttpRequest();
		xhr.open('POST', '/api/control_back/sign_in', true);
		xhr.onreadystatechange = function () {
			if (xhr.readyState == 4 && xhr.status == 200) {
				console.log(xhr.responseText);
			}
		}
		xhr.send('bbbb=1111');
*/
/*		
		fetch('/api/control_back/sign_in', {
			method: 'POST',
			headers:{
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: this.state.name,
				password: this.state.password
			})
		});
*/
		fetch('/api/control_back/sign_in', {
		      method: 'POST',
		      headers: {
		        'Accept': 'application/json',
		        'Content-Type': 'application/json'
		      },
		      body: JSON.stringify({ password: 'aaaa' })
		    });


		fetch("/api/control_back/sign_in", {
		  method: "POST",
		  headers: {
		    "Content-Type": "application/x-www-form-urlencoded"
		  },
		  body: "firstName=Nikhil&favColor=blue&password=easytoguess"
		})

		fetch("/api/control_back/sign_in", {
		  method: "POST",
		  headers: {
		    "Content-Type": "application/x-www-form-urlencoded"
		  },
		  body: "a=2"
		})



		fetch('/api/control_back/sign_in',{
			method: 'POST',

			body: 'c=ggg'
		});

	}
	// handleChange(key, event) {
	// 	console.log(event);
	// 	this.setState({[key]: event.target.value})
	// }
	hanleChange(event, key) {
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
					<div onClick={(event) => this.handleClick(event)}>123</div>
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