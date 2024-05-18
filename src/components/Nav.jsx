import { useState, useEffect } from 'react'
import HamburgerMenu from '../assets/mdi_hamburger-menu.svg'

const NavLinks = ({ isOpen }) => {
	return (
		<div
			className={`absolute top-[90px] left-1/2 transform -translate-x-1/2 bg-neutral-800 md:relative md:top-0 md:transform-none md:left-0 md:bg-transparent p-5 w-full ${
				isOpen ? 'block' : 'hidden'
			} md:block`}>
			<ul className='md:flex md:space-x-6 lg:space-x-12 space-y-4 text-center px-9'>
				<li className='cursor-pointer'>O nas</li>
				<li className='cursor-pointer'>Realizacje</li>
				<li className='cursor-pointer'>Cennik i oferty</li>
				<li className='cursor-pointer'>Portfolio</li>
			</ul>
			<div className='md:hidden text-center'>
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
			className='py-4 fixed w-full z-50 transition-colors duration-300'>
			<div className='wrapper flex justify-between items-center'>
				<h1 className='text-xl font-semibold'>eMarika.pl</h1>
				<NavLinks isOpen={isOpen} />
				<div className='hidden md:block'>
					<button>Kontakt</button>
				</div>
				<button className='md:hidden' onClick={toggleNavbar}>
					<img src={HamburgerMenu} alt='menu' className='cursor-pointer z-50' />
				</button>
			</div>
		</nav>
	)
}
