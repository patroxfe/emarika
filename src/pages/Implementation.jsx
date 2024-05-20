import { useState } from 'react';
import Check from '../assets/checkmark.svg';
import ArrowPrevious from '../assets/arrowprevious.svg';
import ArrowNext from '../assets/arrownext.svg';
import CircumTime from '../assets/circum_time.svg';

export default function Implementation() {
	const info = [
		{ feature: 'Użycie najnowszych technologii' },
		{ feature: 'Responsywne strony na wszystkie urządzenia' },
		{ feature: 'Niskie ceny' },
		{ feature: 'Bardzo krótki czas oczekiwania na realizację' },
		{ feature: 'Indywidualne podejście do klienta i projektu' },
		{ feature: 'Stały kontakt z klientem na każdym etapie' },
	];

	const implementationProcess = [
		{
			title: 'Tutaj zaczynamy',
			description:
				'Rozpoczynamy od szczegółowej rozmowy z klientem, aby dokładnie poznać jego potrzeby i oczekiwania.',
			fade: 'from-firstViolet to-secondViolet',
			img: CircumTime,
		},
		{
			title: 'Zapoznanie',
			description:
				'Analizujemy branżę klienta, przeglądając konkurencję i trendy, co pozwala nam lepiej zrozumieć kontekst projektu.',
			fade: 'from-firstViolet to-secondViolet',
			img: CircumTime,
		},
		{
			title: 'Planowanie',
			description:
				'Tworzymy spersonalizowany plan projektu, uwzględniając cele, harmonogram prac oraz budżet, aby zapewnić efektywną realizację projektu.',
			fade: 'from-firstViolet to-secondViolet',
			img: CircumTime,
		},
		{
			title: 'Projektowanie',
			description:
				'Projektujemy stronę internetową zgodnie z identyfikacją wizualną klienta, dbając o estetykę i użyteczność.',
			fade: 'from-firstViolet to-secondViolet',
			img: CircumTime,
		},
		{
			title: 'Programowanie',
			description:
				'Implementujemy kod, wykorzystując najnowsze technologie i najlepsze praktyki programistyczne, aby zapewnić płynne działanie strony.',
			fade: 'from-firstViolet to-secondViolet',
			img: CircumTime,
		},
		{
			title: 'Testowanie',
			description:
				'Przeprowadzamy szczegółowe testy funkcjonalne i jakościowe, weryfikując responsywność, szybkość ładowania oraz funkcjonalność strony na różnych platformach.',
			fade: 'from-firstViolet to-secondViolet',
			img: CircumTime,
		},
		{
			title: 'Ostatnie poprawki',
			description:
				'Na podstawie wyników testów dokonujemy ostatnich poprawek i optymalizacji, usuwając ewentualne błędy i dostosowując stronę do ostatecznych wymagań klienta.',
			fade: 'from-firstViolet to-secondViolet',
			img: CircumTime,
		},
		{
			title: 'Wdrażanie',
			description:
				'Po zakończeniu testów i akceptacji przez klienta wdrażamy stronę na serwerze docelowym, zapewniając jej pełną dostępność dla użytkowników.',
			fade: 'from-firstViolet to-secondViolet',
			img: CircumTime,
		},
		{
			title: 'Twoja gotowa strona',
			description:
				'Po długim procesie Twój projekt stał się rzeczywistością. Teraz możesz cieszyć się profesjonalną i funkcjonalną stroną internetową, która w pełni odzwierciedla Twoje cele i potrzeby. Dzięki naszej współpracy, Twoja firma ma solidne fundamenty online, gotowe na podbicie sieci.',
			fade: 'from-firstViolet to-secondViolet',
			img: CircumTime,
		},
	];

	const [currentIndex, setCurrentIndex] = useState(0);

	const handleNext = () => {
		if (currentIndex < implementationProcess.length - 1) {
			setCurrentIndex(currentIndex + 1);
		}
	};

	const handlePrev = () => {
		if (currentIndex > 0) {
			setCurrentIndex(currentIndex - 1);
		}
	};

	return (
		<>
			<section className='bg-customGray m-auto py-8 pb-20 block lg:hidden'>
				<h2 className='text-mainText font-bold text-3xl text-center'>
					Proces realizacji
				</h2>

				<div className='wrapper'>
					<div className='my-12'>
						<p className='text-xl text-mainText font-semibold'>
							Zobacz co Cię czeka!
						</p>
						<div className='my-2 space-y-3'>
							{info.map((item, index) => (
								<div key={index} className='flex items-start mt-4'>
									<img src={Check} alt='icon' className='w-6 h-6 mr-2' />
									<p className='text-thirdText text-lg font-medium'>
										{item.feature}
									</p>
								</div>
							))}
						</div>
					</div>
					<div className='flex flex-col items-center justify-center space-x-2 m-auto md:mx-20'>
						<div className='flex w-full justify-between pb-3 px-2'>
							<button
								onClick={handlePrev}
								disabled={currentIndex === 0}
								className='flex justify-center items-center text-center space-x-2'
							>
								<img src={ArrowPrevious} alt='back' className='w-3 -pl-2' />
								<p className='text-mainText text-xl'>Cofnij</p>
							</button>
							<button
								onClick={handleNext}
								disabled={currentIndex === implementationProcess.length - 1}
								className='flex justify-center items-center text-center space-x-2'
							>
								<p className='text-mainText text-xl'>Dalej</p>
								<img src={ArrowNext} alt='next' className='w-3 -pr-2' />
							</button>
						</div>

						<div className='relative p-6 bg-white [box-shadow:_0px_4px_33px_rgb(0_0_0_/_25%)] rounded-2xl '>
							<p className='absolute right-6 top-4 text-thirdText font-medium text-lg'>
								Krok: <span className='font-semibold'>{currentIndex + 1}</span>
								/9
							</p>
							<div className='rounded-full w-20 h-20 bg-cyan-300 flex items-center justify-center'>
								<img
									src={implementationProcess[currentIndex].img}
									alt='icon'
									className='w-12 h-12'
								/>
							</div>
							<h3 className='text-xl font-bold text-mainText my-3'>
								{implementationProcess[currentIndex].title}
							</h3>
							<p className='text-md text-secondText'>
								{implementationProcess[currentIndex].description}
							</p>
						</div>
					</div>
				</div>
			</section>
			{/* ===================================================== DESKTOP */}
			{/* ===================================================== DESKTOP */}
			{/* ===================================================== DESKTOP */}
			{/* ===================================================== DESKTOP */}
			{/* ===================================================== DESKTOP */}
			<section className='bg-customGray m-auto py-8 pb-20 hidden lg:block'>
				<h2 className='text-mainText font-bold text-3xl text-center'>
					Proces realizacji
				</h2>

				<div className='wrapper'>
					<div className='grid grid-cols-4 grid-rows-4 gap-5 space-x-2 m-auto'>
						<div className='my-12 col-span-2'>
							<p className='text-xl text-mainText font-semibold'>
								Zobacz co Cię czeka!
							</p>
							<div className='my-2 space-y-3'>
								{info.map((item, index) => (
									<div key={index} className='flex items-start mt-4'>
										<img src={Check} alt='icon' className='w-6 h-6 mr-2' />
										<p className='text-thirdText text-lg font-medium'>
											{item.feature}
										</p>
									</div>
								))}
							</div>
						</div>
						<div className='row-start-2 col-span-3 bg-black'></div>
						{implementationProcess.map((step, index) => (
							<div
								key={index}
								className='relative p-6 bg-white shadow-md rounded-2xl mb-6 w-full max-w-md'
							>
								<p className='absolute right-6 top-4 text-thirdText font-medium text-lg'>
									Krok: <span className='font-semibold'>{index + 1}</span>/9
								</p>
								<div className='rounded-full w-20 h-20 bg-cyan-300 flex items-center justify-center'>
									<img src={step.img} alt='icon' className='w-12 h-12' />
								</div>
								<h3 className='text-xl font-bold text-mainText my-3'>
									{step.title}
								</h3>
								<p className='text-md text-secondText'>{step.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
