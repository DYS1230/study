import React from 'react';

import styles from './sign.css';

export default class SignIn extends React.Component {
	handleClick(event) {
		event.preventDefault();
		event.stopPropagation();
		console.log(123);
		event.cancelBubble = true;
		console.log(event.stopPropagation);
		console.log(event.preventDefault);
		console.log(arguments);
		return false;
	}
	handleSubmit(event) {
		console.log('fuck submit');
		event.preventDefault();
		return false;
	}
	render() {
		return (
			<div className={styles.signContainer}>
				<form className={styles.signForm} onSubmit={(event) => this.handleSubmit(event)}>
					<h1 className={styles.signTitle}>登录</h1>
					<div className={styles.formGroup}>
						<input type="text" placeholder="用户名" className={styles.inputControl} autoComplete="off" />
					</div>
					<div className={styles.formGroup}>
						<input type="password" placeholder="密码" className={styles.inputControl} />
					</div>
					<div onClick={() => this.handleClick(event)}>123</div>
					<div className={styles.formGroup}>
						<input type="submit" className={`${styles.success} ${styles.btn}`} onClick={() => this.handleClick(event)} value="登录" />
						{/*<button className={`${styles.success} ${styles.btn}`} onClick={() => this.handleClick(event)}>登录</button>*/}
					</div>
				</form>
			</div>
		)
	}
}