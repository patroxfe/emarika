export default function Contanct() {
	return (
		<>
			<section className='flex flex-col text-center pt-10 pb-10 tracking-wider md:grid md:grid-cols-4 md:grid-rows-2 md:grid-flow-col bg-gradient-to-r from-leftFade to-rightFade'>
				<div>
					<h5 className='text-xl font-bold py-2'>E-mail</h5>
					<p className='tracking-wider'>emarika@gmail.com</p>
					<p className='tracking-wider'>rafaldruzba@op.pl</p>
					<p className='tracking-wider'>patryksulich@wp.pl</p>
				</div>
				<div className='pt-3'>
					<h5 className='text-xl font-bold py-2'>Telefon</h5>
					<p>+48 791 445 104</p>
					<p>+48 825 786 339</p>
				</div>
				<div>
					<h5 className='text-xl font-bold py-2'>Lokalizacja</h5>
					<p>Warszawa, Polska</p>
					<p>07-130 Łochów, Sadowa 9</p>
				</div>
				<div className='pt-3'>
					<h5 className='text-xl font-bold py-2'>Social Media</h5>
					<i>insta</i>
					<i>fb</i>
					<i>coś</i>
				</div>
				<div className='flex flex-col'>
					<h5 className='text-xl font-bold py-2'>Prawne</h5>
					<a>Polityka prywatności</a>
					<a className='tracking-wider'>Polityka plików cookies</a>
				</div>
				<div>
					<h5 className='text-xl font-bold py-2'>Lokalne usługi</h5>
					<p className='pb-10'>Projektowanie Stron WWW</p>
				</div>
				<div className='flex flex-col text-center col-start-1 row-span-2'>
					<h3 className='text-5xl font-bold pt-10 pb-3'>eMarika.pl</h3>
					<p className='pb-8'>
						Jesteśmy na rynku od{' '}
						<span className='text-amber-200 font-semibold'>ponad 20 lat</span>!
					</p>
				</div>
			</section>
			<footer className='bg-[#000000] flex flex-col text-center'>
				<p className=''>eMarika.pl | 2024 C</p>
			</footer>
		</>
	);
}
