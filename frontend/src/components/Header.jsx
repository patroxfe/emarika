import { motion } from 'framer-motion';
import { scrollToSection } from '../utils/scrollUtils';

export default function Header() {
	const handleSprawdzOferteClick = () => {
		scrollToSection('cennik-i-oferty');
	};

	const containerVariants = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.3,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
	};

	return (
		<motion.section
			className='text-center lg:text-left lg:flex bg-[#1b2841ff] relative overflow-hidden py-24 px-0 h-screen flex justify-center items-center'
			id='header'
			initial='hidden'
			animate='visible'
			variants={containerVariants}
		>
			<div className='wrapper flex items-center justify-center text-center lg:gap-x-12 z-10 relative px-6 sm:px-10 md:px-14'>
				<div className='lg:min-w-[30%] lg:max-w-[50%]'>
					<motion.h1
						className='font-bold text-3xl pt-[130px] leading-10 max-w-3xl md:text-4xl lg:text-5xl'
						variants={itemVariants}
					>
						Stworzymy Ci wymarzoną stronę internetową
					</motion.h1>
					<motion.div className='py-10 space-y-1' variants={itemVariants}>
						<p className='text-lg md:text-xl leading-6 font-light text-white'>Szybko zrealizujemy twoje zlecenie</p>
						<p className='text-lg md:text-xl leading-6 font-light text-white'>Użyjemy najnowszych narzędzi</p>
					</motion.div>
					<motion.button
						className='bg-white drop-shadow-lg text-[#1b2841] text-lg font-semibold py-2 px-5 rounded mb-[100px] hover:bg-blueMain transition duration-300'
						onClick={handleSprawdzOferteClick}
						variants={itemVariants}
					>
						Sprawdź ofertę!
					</motion.button>
				</div>
			</div>
			<div className='hero-img hero-img-desktop hidden md:block'></div>
			<div className='hero-img hero-img-mobile block md:hidden'></div>
		</motion.section>
	);
}
