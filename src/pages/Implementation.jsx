import { useState } from 'react'
import Check from '../assets/checkmark.svg'
import ArrowPrevious from '../assets/arrowprevious.svg'
import ArrowNext from '../assets/arrownext.svg'
import PlanningImg from '../assets/planning-img.svg'
import CodingImg from '../assets/coding-img.svg'
import DesigningImg from '../assets/designing-img.svg'
import TestingImg from '../assets/testing-img.svg'
import FixingImg from '../assets/fixing-img.svg'
import StartImg from '../assets/start-img.svg'
import IntroductionImg from '../assets/introduction-img.svg'
import ImplementingImg from '../assets/implementing-img.svg'
import WebsiteImg from '../assets/website-img.svg'


export default function Implementation() {
	const info = [
		{ feature: 'Użycie najnowszych technologii' },
		{ feature: 'Responsywne strony na wszystkie urządzenia' },
		{ feature: 'Niskie ceny' },
		{ feature: 'Bardzo krótki czas oczekiwania na realizację' },
		{ feature: 'Indywidualne podejście do klienta i projektu' },
		{ feature: 'Stały kontakt z klientem na każdym etapie' },
	]

	const implementationProcess = [
		{
			title: 'Tutaj zaczynamy',
			description: 'Rozpoczynamy od szczegółowej rozmowy z klientem, aby dokładnie poznać jego potrzeby i oczekiwania.',
			fade: 'from-firstViolet to-secondViolet',
			img: StartImg,
		},
		{
			title: 'Zapoznanie',
			description:
				'Analizujemy branżę klienta, przeglądając konkurencję i trendy, co pozwala nam lepiej zrozumieć kontekst projektu.',
			fade: 'from-firstBlue to-secondBlue',
			img: IntroductionImg,
		},
		{
			title: 'Planowanie',
			description:
				'Tworzymy spersonalizowany plan projektu, uwzględniając cele, harmonogram prac oraz budżet, aby zapewnić efektywną realizację projektu.',
			fade: 'from-firstRed to-secondRed',
			img: PlanningImg,
		},
		{
			title: 'Projektowanie',
			description:
				'Projektujemy stronę internetową zgodnie z identyfikacją wizualną klienta, dbając o estetykę i użyteczność.',
			fade: 'from-firstBlue to-secondBlue',
			img: DesigningImg,
		},
		{
			title: 'Programowanie',
			description:
				'Implementujemy kod, wykorzystując najnowsze technologie i najlepsze praktyki programistyczne, aby zapewnić płynne działanie strony.',
			fade: 'from-firstGreen to-secondGreen',
			img: CodingImg,
		},
		{
			title: 'Testowanie',
			description:
				'Przeprowadzamy szczegółowe testy funkcjonalne i jakościowe, weryfikując responsywność, szybkość ładowania oraz funkcjonalność strony na różnych platformach.',
			fade: 'from-firstRed to-secondRed',
			img: TestingImg,
		},
		{
			title: 'Ostatnie poprawki',
			description:
				'Na podstawie wyników testów dokonujemy ostatnich poprawek i optymalizacji, usuwając ewentualne błędy i dostosowując stronę do ostatecznych wymagań klienta.',
			fade: 'from-firstBlue to-secondBlue',
			img: FixingImg,
		},
		{
			title: 'Wdrażanie',
			description:
				'Po zakończeniu testów i akceptacji przez klienta wdrażamy stronę na serwerze docelowym, zapewniając jej pełną dostępność dla użytkowników.',
			fade: 'from-firstViolet to-secondViolet',
			img: ImplementingImg,
		},
		{
			title: 'Twoja gotowa strona',
			description:
				'Po długim procesie Twój projekt stał się rzeczywistością. Teraz możesz cieszyć się profesjonalną i funkcjonalną stroną internetową, która w pełni odzwierciedla Twoje cele i potrzeby. Dzięki naszej współpracy, Twoja firma ma solidne fundamenty online, gotowe na podbicie sieci.',
			fade: 'from-firstGreen to-secondGreen',
			img: WebsiteImg,
		},
	]

	const [currentIndex, setCurrentIndex] = useState(0)

	const handleNext = () => {
		if (currentIndex < implementationProcess.length - 1) {
			setCurrentIndex(currentIndex + 1)
		}
	}

	const handlePrev = () => {
		if (currentIndex > 0) {
			setCurrentIndex(currentIndex - 1)
		}
	}

	return (
		<>
			<section className='bg-customGray m-auto py-8 pb-20 block xl:hidden' id='realizacja'>
				<h2 className='text-mainText font-bold text-3xl text-center '>Proces realizacji</h2>

				<div className='wrapper px-6 sm:px-10 max-w-2xl flex flex-col md:flex-row md:px-14 '>
					<div className='my-12 md:w-1/2'>
						<p className='text-xl text-mainText font-semibold md:text-left'>Zobacz co Cię czeka!</p>
						<div className='my-2 space-y-3'>
							{info.map((item, index) => (
								<div key={index} className='flex items-start mt-4'>
									<img src={Check} alt='icon' className='w-6 h-6 mr-2' />
									<p className='text-thirdText text-lg font-medium'>{item.feature}</p>
								</div>
							))}
						</div>
					</div>
					<div className='flex flex-col items-center justify-center space-x-2 m-auto md:mx-20 md:w-1/2 '>
						<div className='flex w-full justify-between pb-3 px-2'>
							<button
								onClick={handlePrev}
								disabled={currentIndex === 0}
								className={`flex justify-center items-center text-center space-x-2 ${
									currentIndex === 0 ? 'opacity-0' : 'opacity-1'
								}`}>
								<img src={ArrowPrevious} alt='back' className='w-3 -pl-2' />
								<p className='text-mainText text-xl'>Cofnij</p>
							</button>
							<button
								onClick={handleNext}
								disabled={currentIndex === implementationProcess.length - 1}
								className={`flex justify-center items-center text-center space-x-2 ${
									currentIndex === 8 ? 'opacity-0' : 'opacity-1'
								}`}>
								<p className='text-mainText text-xl'>Dalej</p>
								<img src={ArrowNext} alt='next' className='w-3 -pr-2' />
							</button>
						</div>

						<div className='relative p-6 bg-white [box-shadow:_0px_4px_33px_rgb(0_0_0_/_25%)] rounded-2xl '>
							<p className='absolute right-6 top-4 text-thirdText font-medium text-lg'>
								Krok: <span className='font-semibold'>{currentIndex + 1}</span>
								/9
							</p>
							<div
								className={`rounded-full w-20 h-20 bg-gradient-to-r ${implementationProcess[currentIndex].fade} flex items-center justify-center`}>
								<img src={implementationProcess[currentIndex].img} alt='icon' className='w-12 h-12' />
							</div>
							<h3 className='text-xl font-bold text-mainText my-3'>{implementationProcess[currentIndex].title}</h3>
							<p className='text-md text-secondText'>{implementationProcess[currentIndex].description}</p>
						</div>
					</div>
				</div>
			</section>
			{/* ===================================================== DESKTOP */}
			{/* ===================================================== DESKTOP */}
			{/* ===================================================== DESKTOP */}
			{/* ===================================================== DESKTOP */}
			{/* ===================================================== DESKTOP */}
			<section className='bg-customGray m-auto py-8 pb-20 hidden xl:block' id='realizacja2'>
				<h2 className='text-mainText pb-10 font-bold text-3xl text-center xl:text-4xl'>Proces realizacji</h2>

				<div className='wrapper px-16 2xl:px-0'>
					<div className='grid grid-cols-4 grid-rows-4 gap-10  m-auto'>
						<div className='my-12 col-span-2'>
							<p className='text-xl xl:text-3xl text-mainText font-semibold'>Zobacz co Cię czeka!</p>
							<div className='my-2 space-y-3'>
								{info.map((item, index) => (
									<div key={index} className='flex items-start mt-8'>
										<img src={Check} alt='icon' className='w-6 h-6 mr-2' />
										<p className='text-thirdText text-lg font-medium xl:text-xl'>{item.feature}</p>
									</div>
								))}
							</div>
						</div>
						<div className='relative overflow-hidden row-start-2 col-span-3 rounded-2xl bg-[#1b2841ff] [box-shadow:_0px_4px_33px_rgb(0_0_0_/_25%)]'>
							<div className='implementation-img '></div>
						</div>
						{implementationProcess.map((step, index) => (
							<div
								key={index}
								className={`relative p-6 bg-white [box-shadow:_0px_4px_33px_rgb(0_0_0_/_25%)] rounded-2xl  w-full auto-rows-auto ${
									(index === 3 && 'col-start-4 row-start-3') ||
									(index === 4 && 'col-start-3 row-start-3') ||
									(index === 5 && 'col-start-2 row-start-3') ||
									(index === 6 && 'col-start-1 row-start-3') ||
									(index === 8 && 'col-span-3')
								}`}>
								<p className='absolute right-6 top-4 text-thirdText font-medium text-lg'>
									Krok: <span className='font-semibold'>{index + 1}</span>/9
								</p>
								<div
									className={`rounded-full w-20 h-20 bg-gradient-to-r ${step.fade} flex items-center justify-center `}>
									<img src={step.img} alt='icon' className='w-12 h-12 ' />
								</div>
								<h3 className='text-xl font-bold text-mainText my-3'>{step.title}</h3>
								<p className='text-md text-secondText'>{step.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	)
}
