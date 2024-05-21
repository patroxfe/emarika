import { useState, useEffect } from 'react'
import HamburgerMenu from '../assets/mdi_hamburger-menu.svg'

const NavLinks = ({ isOpen }) => {
	return (
		<div
			className={`absolute top-[90px] left-1/2 transform -translate-x-1/2 bg-neutral-800 lg:relative lg:top-0 lg:transform-none lg:left-0 lg:bg-transparent p-5 w-full ${
				isOpen ? 'block' : 'hidden'
			} lg:block`}>
			<ul className='lg:flex lg:space-x-10 xl:space-x-12 2xl:space-x-14 space-y-4 lg:space-y-0 text-center lg:justify-center'>
				<li className='cursor-pointer font-regular lg:text-lg hover:text-blueMain transition duration-300'>O nas</li>
				<li className='cursor-pointer font-regular lg:text-lg hover:text-blueMain transition duration-300'>
					Realizacje
				</li>
				<li className='cursor-pointer font-regular lg:text-lg hover:text-blueMain transition duration-300'>
					Cennik i oferty
				</li>
				<li className='cursor-pointer font-regular lg:text-lg hover:text-blueMain transition duration-300'>
					Portfolio
				</li>
			</ul>
			<div className='lg:hidden text-center'>
				<button className='mt-4'>Kontakt</button>
			</div>
		</div>
	)
}

export default function Nav() {
	const [isOpen, setIsOpen] = useState(false)
	const [scrollPosition, setScrollPosition] = useState(0)

	const toggleNavbar = () => {
		setIsOpen(!isOpen)
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

	const getNavbarColor = () => {
		const maxScroll = 200
		const opacity = Math.min(scrollPosition / maxScroll, 0.85)
		return `rgba(34, 34, 34, ${opacity})`
	}

	return (
		<nav
			style={{ backgroundColor: getNavbarColor() }}
			className='py-4 fixed w-full z-50 transition-colors duration-300 px-6 sm:px-10 md:px-14'>
			<div className='wrapper flex justify-between items-center'>
				<h1 className='text-xl font-semibold'>eMarika.pl</h1>
				<NavLinks isOpen={isOpen} />
				<div className='hidden lg:block'>
					<button className='bg-white py-2 px-4 text-[#1b2841] font-semibold rounded font-regular lg:text-lg hover:bg-blueMain transition duration-300'>
						Kontakt
					</button>
				</div>
				<button className='lg:hidden' onClick={toggleNavbar}>
					<img src={HamburgerMenu} alt='menu' className='cursor-pointer z-50' />
				</button>
			</div>
		</nav>
	)
}
