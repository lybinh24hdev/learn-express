import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
	return (
		<header>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/products">Products</NavLink>
			<NavLink to="/About">About Us</NavLink>
		</header>
	)
}

export default Header
