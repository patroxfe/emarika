import './App.css'
import Nav from './components/Nav'
import AboutUs from './pages/AboutUs'
import Summary from './pages/Summary'
import Services from './pages/Services'
import Header from './components/Header'

function App() {
	return (
		<>
			<Nav />
			<Header />
			<Summary />
			<AboutUs />
			<Services />
		</>
	)
}

export default App
