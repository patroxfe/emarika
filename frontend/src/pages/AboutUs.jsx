import { useState, useRef, useEffect } from 'react'
import Arrow from '../assets/arrow.svg'

export default function AboutUs() {
	const [openQuestion, setOpenQuestion] = useState('')
	const answerRefs = useRef([])

	const toggleQuestion = index => {
		setOpenQuestion(openQuestion === index ? null : index)
	}

	const questions = [
		{
			question: 'Kim jesteśmy?',
			answer:
				'Jesteśmy młodym, pełnym pasji zespołem, który ciągle się rozwija w obszarze technologii internetowych. Jesteśmy kreatywni i zaangażowani w każdy projekt. Pracujemy nad budowaniem solidnej reputacji poprzez wysoką jakość naszych produktów. Naszym celem jest nie tylko tworzenie innowacyjnych stron internetowych, ale także budowanie trwałych relacji opartych na zaufaniu i profesjonalizmie.',
		},
		{
			question: 'Nasze podejście do pracy i klienta',
			answer:
				'Jako deweloperzy stron internetowych rozumiemy, że każdy klient ma unikalne cele i potrzeby dotyczące swojej witryny. Dlatego też stawiamy za cel nie tylko zrozumienie tych potrzeb, ale także dostosowanie naszych usług i rozwiązań do indywidualnych wymagań każdego klienta. Nasz zespół jest gotowy do słuchania, doradzania i współpracy na każdym etapie projektu, aby zapewnić optymalne rezultaty. Dzięki temu podejściu możemy zagwarantować, że każda strona internetowa, którą tworzymy, jest nie tylko funkcjonalna i atrakcyjna wizualnie, ale również idealnie dopasowana do potrzeb i celów naszych klientów.',
		},
		{
			question: 'Dlaczego jesteśmy warci zaufania?',
			answer:
				'Jesteśmy pasjonatami, którzy nie tylko tworzą strony internetowe, ale też budują zaufanie. Nasza praca opiera się na solidnych fundamentach kodu i kreatywnym podejściu do projektowania. Każdy z naszych klientów może polegać na naszym doświadczeniu i zaangażowaniu w każdym etapie procesu tworzenia strony. Wiemy, że zaufanie jest kluczowe, dlatego stawiamy na transparentność, komunikację i rzetelność w każdym projekcie. Jesteśmy gotowi udowodnić naszą wiarygodność poprzez nasze działania i rezultaty.',
		},
		{
			question: 'Doświadczenie i możliwości',
			answer:
				'Posiadamy bogate doświadczenie w branży stron internetowych, które wynika z wielu lat pracy nad różnorodnymi projektami. Dzięki temu możemy zaoferować szeroki zakres możliwości, od prostych stron wizytówek po zaawansowane platformy e-commerce i aplikacje internetowe. Nasze umiejętności obejmują projektowanie responsywnych i funkcjonalnych interfejsów użytkownika oraz optymalizację pod kątem SEO. Niezależnie od wielkości projektu, jesteśmy gotowi sprostać Twoim oczekiwaniom i stworzyć profesjonalną stronę internetową, która wyróżni się na tle konkurencji.',
		},
	]

	useEffect(() => {
		answerRefs.current.forEach((ref, index) => {
			if (ref) {
				ref.style.maxHeight = openQuestion === index ? `${ref.scrollHeight}px` : '0px'
			}
		})
	}, [openQuestion])

	return (
		<>
			<section className='bg-customGray m-auto py-8 px-6 sm:px-10' id='o-nas'>
				<h2 className='text-mainText font-bold text-3xl text-center lg:text-4xl'>O nas</h2>
				<div className='my-14 max-w-2xl m-auto'>
					{questions.map((item, index) => (
						<div key={index} className='border-b border-stone-300'>
							<div
								className='py-3 flex justify-between items-center cursor-pointer'
								onClick={() => toggleQuestion(index)}>
								<p className='text-mainText font-semibold text-xl max-w-[75%] lg:text-2xl'>{item.question}</p>
								<img
									src={Arrow}
									alt='Strzałka rozwijająca odpowiedź'
									className={`transform transition-transform duration-300 ${
										openQuestion === index ? 'rotate-180' : ''
									}`}
								/>
							</div>
							<div
								ref={el => (answerRefs.current[index] = el)}
								className='overflow-hidden transition-all duration-300'
								style={{
									maxHeight: openQuestion === index ? `${answerRefs.current[index]?.scrollHeight}px` : '0px',
								}}>
								<p className='text-mainText py-2 lg:text-xl pb-4'>{item.answer}</p>
							</div>
						</div>
					))}
				</div>
			</section>
		</>
	)
}
