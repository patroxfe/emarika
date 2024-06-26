import { useState, useEffect } from 'react'
import { Squeeze as Hamburger } from 'hamburger-react'
import { useLocation, useNavigate, Link } from 'react-router-dom'

function NavLinks({ isOpen, setIsOpen, scrollToSection, isBriefOrTermsOrPrivacy }) {
	return (
		<div
			className={`items-center absolute left-0 top-0 transform bg-[#222222f0] lg:relative lg:top-0 lg:transform-none lg:bg-transparent p-5 w-full lg:h-auto h-screen transition-all duration-300 ease-in-out ${
				isOpen ? 'translate-y-0' : 'translate-y-[-100%]'
			}`}>
			<ul className='absolute top-1/2 left-1/2 translate-y-[-50%] lg:translate-y-0 translate-x-[-50%] lg:translate-x-0 lg:left-0 lg:relative text-2xl font-bold text-center space-y-20 lg:font-normal lg:flex lg:space-x-10 xl:space-x-12 2xl:space-x-14 lg:space-y-0 lg:justify-center'>
				{!isBriefOrTermsOrPrivacy && (
					<>
						<li
							className='cursor-pointer font-regular lg:text-lg hover:text-blueMain transition duration-300'
							onClick={() => scrollToSection('o-nas')}>
							O nas
						</li>
						<li
							className='cursor-pointer font-regular lg:text-lg hover:text-blueMain transition duration-300'
							onClick={() => scrollToSection('realizacja', 'realizacja2')}>
							Realizacja
						</li>
						<li
							className='cursor-pointer font-regular lg:text-lg hover:text-blueMain transition duration-300'
							onClick={() => scrollToSection('cennik-i-oferty')}>
							Cennik i oferty
						</li>
					</>
				)}
				<li className='lg:hidden text-2xl text-center hover:text-blueMain transition duration-300'>
					<button className='mt-4' onClick={() => scrollToSection('kontakt')}>
						Kontakt
					</button>
				</li>
			</ul>
		</div>
	)
}

export default function Nav() {
	const [isOpen, setIsOpen] = useState(false)
	const [scrollPosition, setScrollPosition] = useState(0)
	const [isOpenBurger, setOpenBurger] = useState(false)
	const [isDarkNav, setIsDarkNav] = useState(false)
	const location = useLocation()
	const navigate = useNavigate()

	const toggleNavbar = () => {
		setIsOpen(!isOpen)
		setOpenBurger(!isOpen) // Aktualizujemy również stan isOpenBurger
	}

	const handleScroll = () => {
		const position = window.scrollY
		setScrollPosition(position)
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	useEffect(() => {
		if (
			location.pathname.includes('brief') ||
			location.pathname.includes('regulamin') ||
			location.pathname.includes('polityka')
		) {
			setIsDarkNav(true)
		} else {
			setIsDarkNav(false)
		}
	}, [location])

	const getNavbarColor = () => {
		if (isOpen || isDarkNav) {
			return `rgba(34, 34, 34, 0.85)`
		}
		const maxScroll = 200
		const opacity = Math.min(scrollPosition / maxScroll, 0.85)
		return `rgba(34, 34, 34, ${opacity})`
	}

	const scrollToSection = (idMobile, idDesktop = idMobile) => {
		const element = window.innerWidth >= 1024 ? document.getElementById(idDesktop) : document.getElementById(idMobile)
		if (element) {
			const navBarHeight = document.querySelector('nav').offsetHeight
			const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
			const offsetPosition = elementPosition - navBarHeight

			window.scrollTo({
				top: offsetPosition,
				behavior: 'smooth',
			})
			setIsOpen(false)
			setOpenBurger(false) // Zamykamy hamburger menu po kliknięciu w link
		}
	}

	const isBriefOrTermsOrPrivacy =
		location.pathname === '/brief' || location.pathname === '/regulamin' || location.pathname === '/politykaprywatnosci'

	return (
		<nav
			style={{ backgroundColor: getNavbarColor() }}
			className='py-4 fixed w-full z-50 transition-colors duration-300 px-6 sm:px-10 md:px-14 bg-[#222222d9] lg:bg-none'>
			<div className='wrapper flex justify-between items-center'>
				{isBriefOrTermsOrPrivacy ? (
					<Link to='/' className='text-xl font-semibold z-50 cursor-pointer'>
						<span className='text-blueMain'>e</span>Marika.pl
					</Link>
				) : (
					<h1 className='text-xl font-semibold z-50 cursor-pointer' onClick={() => scrollToSection('header')}>
						<span className='text-blueMain'>e</span>Marika.pl
					</h1>
				)}
				<NavLinks
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					scrollToSection={scrollToSection}
					isBriefOrTermsOrPrivacy={isBriefOrTermsOrPrivacy}
				/>
				<div className='hidden lg:block'>
					<button
						className='bg-white py-2 px-4 text-[#1b2841] font-semibold rounded font-regular lg:text-lg hover:bg-blueMain transition duration-300'
						onClick={() => scrollToSection('kontakt')}>
						Kontakt
					</button>
				</div>

				<button className='lg:hidden' onClick={toggleNavbar} aria-label={isOpenBurger ? 'Close menu' : 'Open menu'}>
					<Hamburger toggled={isOpenBurger} toggle={setOpenBurger} />
				</button>
			</div>
		</nav>
	)
}
