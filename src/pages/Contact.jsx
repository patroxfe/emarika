export default function Contanct() {
	return (
		<>
			<section className='pt-10 pb-10 bg-[#1b2841]'>
				<div className='gap-5 wrapper flex flex-col text-center md:text-left tracking-wider md:grid md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-2'>
					<div className='px-10'>
						<h5 className='text-xl font-bold'>E-mail</h5>
						<p className='tracking-wider'>emarika@gmail.com</p>
						<p className='tracking-wider'>patryksulich@wp.pl</p>
						<p className='tracking-wider'>rafaldruzba@op.pl</p>
					</div>
					<div className='px-10'>
						<h5 className='text-xl font-bold'>Telefon</h5>
						<p>+48 791 445 104</p>
						<p>+48 825 786 339</p>
					</div>
					<div className='px-10'>
						<h5 className='text-xl font-bold'>Lokalizacja</h5>
						<p>Warszawa, Polska</p>
						<p>07-130 Łochów, Sadowa 9</p>
					</div>
					<div className='px-10'>
						<h5 className='text-xl font-bold'>Social Media</h5>
						<i>insta</i>
						<i>fb</i>
						<i>coś</i>
					</div>
					<div className='flex flex-col px-10'>
						<h5 className='text-xl font-bold'>Prawne</h5>
						<a className='cursor-pointer'>Polityka prywatności</a>
						<a className='tracking-wider cursor-pointer'>Polityka plików cookies</a>
					</div>
					<div className='px-10'>
						<h5 className='text-xl font-bold'>Lokalne usługi</h5>
						<p className='pb-10'>Projektowanie Stron WWW</p>
					</div>
					<div className='flex flex-col text-center lg:text-left col-span-2 px-10'>
						<h3 className='text-5xl lg:text-4xl font-bold pb-3'>eMarika.pl</h3>
						<p className='pb-8'>
							Jesteśmy na rynku od <span className='text-amber-200 font-semibold'>ponad 20 lat</span>!
						</p>
					</div>
				</div>
			</section>
			<footer className='bg-[#000000] flex flex-col text-center'>
				<p className=''>eMarika.pl | 2024 C</p>
			</footer>
		</>
	)
}
