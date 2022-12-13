import React from 'react'

const RegisterForm = () => {
	return (
		<form>
			<label for="username">User name:</label>
			<br />
			<input type="text" name="username" id="username" />
			<br />
			<br />
			<label for="password">Password:</label>
			<br />
			<input type="password" name="password" id="password" />
			<br />
			<br />
			<label for="confirmPassword">Confirm Password:</label>
			<br />
			<input type="password" name="confirmPassword" id="confirmPassword" />
			<button type="submit">Register</button>
		</form>
	)
}

export default RegisterForm
