// import Newsletter from '../pages/Newsletter'

export default function Header() {
	return (
		<>
			<section className='text-center lg:text-left lg:flex bg-[#1b2841ff] relative overflow-hidden py-24 px-0'>
				<div className='wrapper flex items-center justify-center text-center lg:gap-x-12 z-10 relative px-6 sm:px-10 md:px-14'>
					<div className='lg:min-w-[30%] lg:max-w-[50%]'>
						<h1 className='font-bold text-3xl pt-[130px] leading-10 max-w-3xl md:text-4xl lg:text-5xl'>
							Stworzymy Ci wymarzoną stronę internetową
						</h1>
						<div className='py-10 space-y-1'>
							<p className='text-lg md:text-xl leading-6 font-light text-white'>Szybko zrealizujemy twoje zlecenie</p>
							<p className='text-lg md:text-xl leading-6 font-light text-white'>Użyjemy najnowszych narzędzi</p>
						</div>
						<button className='bg-white drop-shadow-lg text-[#1b2841] text-lg font-semibold py-2 px-5 rounded mb-[100px] hover:bg-blueMain transition duration-300'>
							Sprawdź ofertę!
						</button>
					</div>
				</div>
				<div className='hero-img'></div>
			</section>
		</>
	)
}
