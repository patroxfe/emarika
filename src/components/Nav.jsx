import { useState } from 'react';
import HamburgerMenu from '../assets/mdi_hamburger-menu.svg';

const NavLinks = ({ isOpen }) => {
	return (
		<div
			className={`absolute top-[100px] right-0 transform-translate-x-1/2 bg-[rgba(0,0,0,0.8)] md:relative md:top-0 md:transform-none md:left-0 md:bg-transparent ${
				isOpen ? 'block' : 'hidden'
			} md:block`}
		>
			<ul className='md:flex md:space-x-6 lg:space-x-12'>
				<li className='cursor-pointer'>O nas</li>
				<li className='cursor-pointer'>Realizacje</li>
				<li className='cursor-pointer'>Cennik i oferty</li>
				<li className='cursor-pointer'>Portfolio</li>
			</ul>
			<div className='md:hidden'>
				<button>Kontakt</button>
			</div>
		</div>
	);
};

export default function Nav() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleNavbar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className='py-4 fixed w-full z-50'>
			<div className='wrapper flex justify-between items-center'>
				<h1 className='text-xl font-semibold'>eMarika.pl</h1>
				<NavLinks isOpen={isOpen} />
				<div className='hidden md:block'>
					<button>Kontakt</button>
				</div>
				<button className='md:hidden' onClick={toggleNavbar}>
					<img src={HamburgerMenu} alt='menu' className='cursor-pointer' />
				</button>
			</div>
		</nav>
	);
}
