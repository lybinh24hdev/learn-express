import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import authSlice, { login } from '../authSlice'

const LoginForm = () => {
	const dispatch = useDispatch()
	const username = useRef()
	const password = useRef()

	const handleSubmit = e => {
		e.preventDefault()

		dispatch(login({ username, password }))
	}
	return (
		<form onSubmit={handleSubmit}>
			<label for="username">User name:</label>
			<br />
			<input ref={username} type="text" name="username" id="username" />
			<br />
			<br />
			<label for="password">Password:</label>
			<br />
			<input ref={password} type="password" name="password" id="password" />
			<button type="submit">Login</button>
		</form>
	)
}

export default LoginForm
