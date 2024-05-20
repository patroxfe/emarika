import SummaryImg from '../assets/summary-img.png'
import CrownImg from '../assets/mdi_crown.svg'
import MobileImg from '../assets/circum_mobile.svg'
import PriceImg from '../assets/circum_price.svg'
import TimeImg from '../assets/circum_time.svg'

export default function Summary() {
	const questions = [
		{
			title: 'Responsywność',
			description:
				'Nasze strony internetowe są responsywne i kompatybilne z każdym urządzeniem. W związku z tym twoi potencjalni klienci nie będą mieli problemu z odwiedzaniem twojej witryny!',
			fade: 'from-firstViolet to-secondViolet',
			icon: MobileImg,
		},
		{
			title: 'Niskie ceny',
			description:
				'Staramy się połączyć jakość z kosztem wykonania. Jesteśmy jedną z najlepszych opcji na polskim rynku! Nasze ceny są nieporównywalnie niższe niż u konkurencji.',
			fade: 'from-firstBlue to-secondBlue',
			icon: PriceImg,
		},
		{
			title: 'Szybkie terminy',
			description:
				'Zależy ci na czasie? Jesteśmy w stanie sprostać twoim oczekiwaniom. Z nami nie martwisz się o długi czas oczekiwania na stronę...',
			fade: 'from-firstRed to-secondRed',
			icon: TimeImg,
		},
		{
			title: 'Gwarancja',
			description:
				'Gwarantujemy bezproblemowość i możliwości ewentualnych bezpłatnych zmian w razie różnorodnych problemów. Nie musisz się martwić o przyszłość, załatwimy to!',
			fade: 'from-firstGreen to-secondGreen',
			icon: CrownImg,
		},
	]

	return (
		<>
			<section className='bg-white pt-5 pb-10 lg:flex lg:flex-row-reverse lg:mb-16'>
				<div className='wrapper lg:flex lg:gap-x-20 lg:items-center'>
					<div className='lg:order-2 xl:w-1/2'>
						{questions.map((item, index) => (
							<div key={index}>
								<div className={`[box-shadow:_0px_4px_33px_rgb(0_0_0_/_25%)] rounded-xl flex mt-10 p-5 ${item.fade}`}>
									<div className='flex items-center justify-center bg-gradient-to-r w-14 h-14 mr-3 rounded-full flex-shrink-0'>
										<img src={item.icon} alt='icon' className='w-9 h-9' />
									</div>
									<div className='flex flex-col'>
										<h2 className='text-mainText font-semibold text-lg'>{item.title}</h2>
										<p className='text-sm text-secondText'>{item.description}</p>
									</div>
								</div>
							</div>
						))}
					</div>
					<div className='xl:w-1/2'>
						<img
							className='scale-1 md:scale-75 lg:scale-[1] '
							src={SummaryImg}
							alt='Obrazek pomagający zilustrować opisane podpunkty, pomaga w wyglądzie strony'
						/>
					</div>
				</div>
			</section>

		</>
	)
}
