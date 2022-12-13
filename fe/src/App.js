import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components'
import { About, Auth, Home, Posts } from './pages'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="posts" element={<Posts />} />
					<Route path="about" element={<About />} />
				</Route>
				<Route path="login" element={<Auth auth="login" />} />
				<Route path="register" element={<Auth auth="register" />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
