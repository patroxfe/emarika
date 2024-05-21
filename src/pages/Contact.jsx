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
			<section className='pt-10 pb-10 bg-[#111111]'>
				<div className='gap-5 wrapper flex flex-col text-center lg:text-left tracking-wider md:grid md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-2 text-[#dbdbdb]'>
					<div className='px-10 font-light '>
						<h5 className='text-xl font-semibold'>E-mail</h5>
						<p className=''>emarika@gmail.com</p>
						<p className=''>rafaldruzba@op.pl</p>
					</div>
					<div className='px-10 font-light flex flex-col '>
						<h5 className='text-xl font-semibold'>Telefon</h5>
						<a className='cursor-pointer hover:text-blueMain'>+48 791 445 104</a>
						<a className='cursor-pointer hover:text-blueMain'>+48 662 131 525</a>
					</div>
					<div className='px-10 lg:px-5 font-light'>
						<h5 className='text-xl font-semibold'>Lokalizacja</h5>
						<p>07-130 Łochów,</p>
						<p> Sadowa 9</p>
					</div>
					<div className='flex flex-col px-10 font-light'>
						<h5 className='text-xl font-semibold'>Prawne</h5>
						<a className='cursor-pointer hover:text-blueMain'>Polityka prywatności</a>
						<a className='tracking-wider cursor-pointer hover:text-blueMain'>Polityka plików cookies</a>
					</div>
					<div className='flex flex-col text-center col-span-2 lg:col-span-4 px-10'>
						<h3 className='text-5xl lg:text-4xl font-semibold pb-1 text-blueMain'> eMarika.pl</h3>
						<p className=''>
							Jesteśmy na rynku od <span className='text-blueMain font-medium'>ponad 20 lat</span>!
						</p>
					</div>
				</div>
			</section>
			<footer className='bg-[#000000] flex flex-col text-center'>
				<p className=''>eMarika.pl &copy; | Projektowanie Stron WWW | {getCurrentDate()} </p>
			</footer>
		</>
	)
}
