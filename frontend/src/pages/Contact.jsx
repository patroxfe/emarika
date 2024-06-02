import { Link } from 'react-router-dom'
import Phone from '../assets/phone-contact.svg'
import Email from '../assets/email-contact.svg'
import Location from '../assets/location-contact.svg'

export default function Contact() {
	return (
		<>
			<section className='pt-20 pb-10 lg:pb-0 bg-[#151515]' id='kontakt'>
				<div className='gap-5 wrapper flex flex-col text-center lg:text-left tracking-wider md:grid md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-2 text-[#dbdbdb] lg:space-x-8 px-10 xl:px-0 space-y-6 md:space-y-0'>
					<div className='font-light text-center lg:text-left'>
						<div className='flex items-center justify-center lg:justify-start mb-2'>
							<img src={Email} alt='Email Icon' className='w-6 h-6 mr-3' />
							<p className='text-2xl font-semibold'>E-mail</p>
						</div>
						<p className='py-1 text-lg'>emarika@gmail.com</p>
						<p className='py-1 text-lg'>rafaldruzba@op.pl</p>
						<p className='py-1 text-lg'>patryksulich42@gmail.com</p>
					</div>
					<div className='font-light flex flex-col'>
						<div className='flex items-center justify-center lg:justify-start mb-2'>
							<img src={Phone} alt='Phone Icon' className='w-6 h-6 mr-3' />
							<p className='text-2xl font-semibold'>Telefon</p>
						</div>
						<a href='tel:+48791445104' className='cursor-pointer hover:text-blueMain text-lg py-1'>
							+48 791 445 104
						</a>
						<a href='tel:+48662131525' className='cursor-pointer hover:text-blueMain text-lg py-1'>
							+48 662 131 525
						</a>
					</div>
					<div className='lg:px-5 font-light'>
						<div className='flex items-center justify-center lg:justify-start mb-2'>
							<img src={Location} alt='Location Icon' className='w-6 h-6 mr-3' />
							<p className='text-2xl font-semibold'>Lokalizacja</p>
						</div>
						<p className='text-lg py-1'>07-130 Łochów,</p>
						<p className='text-lg py-1'>Sadowa 9</p>
					</div>
					<div className='flex flex-col font-light'>
						<p className='text-2xl font-semibold mb-2'>Prawne</p>
						<Link to='/politykaprywatnosci' className='cursor-pointer hover:text-blueMain text-lg py-2'>
							Polityka prywatności
						</Link>
						<Link to='/regulamin' className='cursor-pointer hover:text-blueMain text-lg py-2'>
							Regulamin
						</Link>
					</div>
					<div className='flex flex-col text-center col-span-2 lg:col-span-4 lg:mb-16'>
						<h3 className='text-4xl lg:text-4xl font-semibold pb-1'>
							<span className='text-secondBlue'>e</span>Marika.pl
						</h3>
						<p className='text-[#dbdbdb]'>
							Jesteśmy na rynku od <span className='font-medium'>ponad 20 lat</span>!
						</p>
					</div>
				</div>
			</section>
			<footer className='bg-[#000000e1] flex flex-col text-center text-[#dbdbdb] p-4'>
				<p>
					<span className='font-bold'>eMarika.pl &copy;</span> | Projektowanie Stron WWW
				</p>
			</footer>
		</>
	)
}
