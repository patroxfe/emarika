import SummaryImg from '../assets/summary-img.png';

export default function Summary() {
	return (
		<>
			<section className='bg-white pt-5 pb-10 lg:flex lg:flex-row-reverse'>
				{/* BOX */}
				<div className=''>
					<div className='[box-shadow:_5px_5px_10px_rgb(0_0_0_/_25%)] rounded-xl flex mt-10'>
						{/* KOlkO */}
						<div className='bg-gradient-to-r from-firstViolet to-secondViolet w-16 h-16 m-3 rounded-full p-auto'></div>

						{/* TESKT */}
						<div className='flex flex-col p-3 w-[60%]'>
							<h1 className='text-mainText font-medium text-xl'>
								Responsywność
							</h1>
							<p className='text-stone-800 text-xs'>
								Nasze strony internetowe są responsywne i kompatybilne z każdym
								urządzeniem. W związku z tym twoi potencjalni klienci nie będą
								mieli problemu z odwiedzaniem twojej witryny!
							</p>
						</div>
					</div>
					<div className='[box-shadow:_5px_5px_10px_rgb(0_0_0_/_25%)] rounded-xl flex mt-10 lg:min-w-50'>
						{/* KOlkO */}
						<div className='bg-gradient-to-r from-firstBlue to-secondBlue w-16 h-16 m-3 rounded-full p-auto'></div>

						{/* TESKT */}
						<div className='flex flex-col p-3 w-[60%]'>
							<h1 className='text-mainText font-medium text-xl'>Niskie ceny</h1>
							<p className='text-stone-800 text-xs'>
								Nasze strony internetowe są responsywne i kompatybilne z każdym
								urządzeniem. W związku z tym twoi potencjalni klienci nie będą
								mieli problemu z odwiedzaniem twojej witryny!
							</p>
						</div>
					</div>
					<div className='[box-shadow:_5px_5px_10px_rgb(0_0_0_/_25%)] rounded-xl flex mt-10'>
						{/* KOlkO */}
						<div className='bg-gradient-to-r from-firstRed to-secondRed w-16 h-16 m-3 rounded-full p-auto'></div>

						{/* TESKT */}
						<div className='flex flex-col p-3 w-[60%]'>
							<h1 className='text-mainText font-medium text-xl'>
								Szybkie terminy
							</h1>
							<p className='text-stone-800 text-xs'>
								Nasze strony internetowe są responsywne i kompatybilne z każdym
								urządzeniem. W związku z tym twoi potencjalni klienci nie będą
								mieli problemu z odwiedzaniem twojej witryny!
							</p>
						</div>
					</div>
					<div className='[box-shadow:_5px_5px_10px_rgb(0_0_0_/_25%)] rounded-xl flex mt-10'>
						{/* KOlkO */}
						<div className='bg-gradient-to-r from-firstGreen to-secondGreen w-16 h-16 m-3 rounded-full p-auto'></div>

						{/* TESKT */}
						<div className='flex flex-col p-3 w-[60%]'>
							<h1 className='text-mainText font-medium text-xl'>Gwarancja</h1>
							<p className='text-stone-800 text-xs'>
								Nasze strony internetowe są responsywne i kompatybilne z każdym
								urządzeniem. W związku z tym twoi potencjalni klienci nie będą
								mieli problemu z odwiedzaniem twojej witryny!
							</p>
						</div>
					</div>
				</div>
				<img
					className='scale-1 md:scale-75 lg:scale-50'
					src={SummaryImg}
					alt='Obrazek pomagający zilustrować opisane podpunkty, pomaga w wyglądzie strony'
				/>
			</section>
			<div className='relative'>
				<div className=' h-0 w-7/12 border-b-[50px] border-b-[#f8f8f8] border-r-[70px] border-r-white absolute top-[-50px]'></div>
			</div>
		</>
	);
}
