import React from 'react'
import { Link } from 'react-router-dom'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import styles from './styles.module.scss'

const Auth = ({ auth }) => {
	let form = <LoginForm />
	if (auth === 'register') form = <RegisterForm />

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<h1 className={styles.title}>WELCOME</h1>
				{form}
				{auth === 'register' && (
					<p className={styles.desc}>
						Already have an account? <Link to="/login">Login</Link>
					</p>
				)}
				{auth === 'login' && (
					<p className={styles.desc}>
						Don’t you have an account? <Link to="/register">Register</Link>
					</p>
				)}
			</div>
		</div>
	)
}

export default Auth
