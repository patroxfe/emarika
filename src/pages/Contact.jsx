import { Link } from 'react-router-dom'

export default function Contanct() {
	const getCurrentDate = () => {
		const today = new Date()
		const day = String(today.getDate()).padStart(2, '0')
		const month = String(today.getMonth() + 1).padStart(2, '0') // Styczeń jest miesiącem 0!
		const year = today.getFullYear()

		return `${day}-${month}-${year}`
	}

	return (
		<>
			<section className='pt-20 pb-10 lg:pb-0 bg-[#111111]' id='kontakt'>
				<div className='gap-5 wrapper flex flex-col text-center lg:text-left tracking-wider md:grid md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-2 text-[#dbdbdb] lg:space-x-8 px-10 xl:px-0'>
					<div className=' font-light'>
						<p className='py-1 text-2xl font-semibold mb-2'>E-mail</p>
						<p className='py-1  text-xl'>emarika@gmail.com</p>
						<p className='py-1  text-xl'>rafaldruzba@op.pl</p>
						<p className='py-1  text-xl'>patryksulich42@gmail.com</p>
					</div>
					<div className=' font-light flex flex-col '>
						<p className='text-2xl font-semibold mb-2'> Telefon</p>
						<a href='tel:+48791445104' className='cursor-pointer hover:text-blueMain text-xl py-1'>
							+48 791 445 104
						</a>
						<a href='tel:+48662131525' className='cursor-pointer hover:text-blueMain text-xl py-1'>
							+48 662 131 525
						</a>
					</div>
					<div className=' lg:px-5 font-light'>
						<p className='text-2xl font-semibold mb-2'>Lokalizacja</p>
						<p className='text-xl py-1'>07-130 Łochów,</p>
						<p className='text-xl py-1'> Sadowa 9</p>
					</div>
					<div className='flex flex-col  font-light'>
						<p className='text-2xl font-semibold mb-2'>Prawne</p>
						<Link to='/politykaprywatnosci' className='cursor-pointer hover:text-blueMain text-xl py-1'>
							Polityka prywatności
						</Link>
						<Link to='/regulamin' className=' cursor-pointer hover:text-blueMain text-xl py-1'>
							Regulamin
						</Link>
					</div>
					<div className='flex flex-col text-center col-span-2 lg:col-span-4 px-10 lg:mb-16'>
						<h3 className='text-5xl lg:text-4xl font-semibold pb-1 '> eMarika.pl</h3>
						<p className='text-[#dbdbdb]'>
							Jesteśmy na rynku od <span className=' font-medium'>ponad 20 lat</span>!
						</p>
					</div>
				</div>
			</section>
			<footer className='bg-[#000000] flex flex-col text-center text-[#dbdbdb]'>
				<p className=''>eMarika.pl &copy; | Projektowanie Stron WWW | {getCurrentDate()} </p>
			</footer>
		</>
	)
}
