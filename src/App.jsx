import './App.css'
import Nav from './components/Nav'
import AboutUs from './pages/AboutUs'
import Summary from './pages/Summary'
import Services from './pages/Services'
import Header from './components/Header'
import Implementation from './pages/Implementation'
import Pricing from './pages/Pricing'
import QnA from './pages/QnA'
import Contact from './pages/Contact'
import Brief from './pages/Brief'
import Terms from './pages/Terms'

import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path='/emarika/'
						element={
							<div>
								<Nav />
								<Header />
								<Summary />
								<AboutUs />
								<Services />
								<Implementation />
								<Pricing />
								<QnA />
								<Contact />
							</div>
						}
					/>

					<Route
						path='/emarika/brief'
						element={
							<>
								<Nav />
								<Brief />
								<Contact />
							</>
						}
					/>
					<Route
						path='/emarika/regulamin'
						element={
							<>
								<Nav />
								<Terms />
								<Contact />
							</>
						}
					/>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
