import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './styles.module.scss'

const Header = () => {
	const handleNavActive = ({ isActive }) => (isActive ? styles.active : null)
	return (
		<div className={styles.wrapper}>
			<header className={styles.header}>
				<div className={styles.logo}>LOGO</div>
				<nav className={styles.navbar}>
					<NavLink to="/" className={handleNavActive}>
						Home
					</NavLink>
					<NavLink to="/products" className={handleNavActive}>
						Products
					</NavLink>
					<NavLink to="/About" className={handleNavActive}>
						About Us
					</NavLink>
				</nav>
				<div className={styles.user}>USER</div>
			</header>
		</div>
	)
}

export default Header
