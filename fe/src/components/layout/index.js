import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import styles from './styles.module.scss'

const Layout = () => {
	return (
		<Navigate to="/login" />
		// <div className={styles.wrapper}>
		// 	<Header />
		// 	<div className={styles.content}>
		// 		<Outlet />
		// 	</div>
		// 	<Footer />
		// </div>
	)
}

export default Layout
