import './App.css'
import Nav from './components/Nav'
import AboutUs from './pages/AboutUs'
import Summary from './pages/Summary'
import Services from './pages/Services'
import Header from './components/Header'
import Implementation from './pages/Implementation'
import Pricing from './pages/Pricing'

function App() {
	return (
		<>
			<Nav />
			<Header />
			<Summary />
			<AboutUs />
			<Services />
			<Implementation />
			<Pricing />
		</>
	)
}

export default App
