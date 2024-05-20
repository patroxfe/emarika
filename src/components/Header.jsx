import PhoneLaptop from '../assets/doheadera.png'
import CirclesBG from '../assets/small-circles.svg'

export default function Header() {
	return (
		<>
			<section className='text-center lg:flex bg-gradient-to-r from-leftFade to-rightFade relative overflow-hidden'>
				<img
					className='absolute inset-0 scale-[150%] z-0 -left-[30%] -top-[30%] '
					src={CirclesBG}
					alt='Tło z małymi okręgami'
				/>
				<div className='wrapper flex items-center lg:gap-x-12 z-10 relative'>
					<div className='lg:min-w-[30%] lg:max-w-[50%]'>
						<h1 className='font-extrabold text-3xl pt-[130px] leading-10 [text-shadow:_5px_5px_10px_rgb(0_0_0_/_25%)] lg:text-start lg:text-5xl'>
							Tworzymy nowoczesne strony internetowe na zamówienie
						</h1>
						<img
							className='scale-1 lg:hidden z-10'
							src={PhoneLaptop}
							alt='Projekt na monitorze oraz na telefonie, wizualizuje naszą cudowną pracę'
						/>
						<p className='pt-6 text-lg leading-6 font-light text-white lg:text-start'>
							Jesteśmy zespołem pasjonatów, dla których tworzenie stron internetowych to sztuka. Nasza misja to
							przekształcenie Twoich pomysłów w wirtualną rzeczywistość, która zachwyca i przyciąga uwagę!
						</p>
						<button className='bg-white drop-shadow-lg text-buttonText text-lg font-semibold m-8 py-2 px-5 rounded mb-[100px]'>
							Sprawdź ofertę!
						</button>
					</div>
					<div>
						<img
							className='hidden lg:scale-150 lg:block'
							src={PhoneLaptop}
							alt='Projekt na monitorze oraz na telefonie, wizualizuje naszą cudowną pracę'
						/>
					</div>
				</div>
			</section>
		</>
	)
}
