import { useState, useRef, useEffect } from 'react'
import Arrow from '../assets/arrow.svg'

export default function QnA() {
	const [openQuestion, setOpenQuestion] = useState(null)
	const answerRefs = useRef([])

	const toggleQuestion = index => {
		setOpenQuestion(openQuestion === index ? '' : index)
	}

	const questions = [
		{
			question: 'Ile trwa stworzenie strony internetowej?',
			answer:
				'Czas stworzenia strony internetowej jest w głównym stopniu zależny od "wielkości Twojej witryny" jak i również Twoich oczekiwań względem niej. W krótszym czasie przygotujemy dla Ciebie stronę wizytówkę, niż tą rozbudowaną, zawierająca kilka lub nawet kilkanaście podstron z najważniejszymi informacjami. Czas realizacji podany wyżej w cenniku jest uśredniony, dlatego też może być krótszy lub nieco dłuższy. Zdajemy sobie jednak sprawę, że wielu klientom zależy na czasie, dlatego chcemy sprostać ich oczekiwaniom.',
		},
		{
			question: 'Czy wystawiamy fakturę VAT?',
			answer: 'Tak, wystawiamy fakturę VAT 23%.',
		},
		{
			question: 'Czy nasze strony internetowe są zabezpieczone?',
			answer:
				'Tak, nasze strony internetowe są zabezpieczone. Wybieramy tylko dobrze wyselekcjonowane hostingi, posiadające m.in ochronę przed atakami typu DDoS.',
		},
		{
			question: 'Czy po zakupie otrzymam prawa autorskie do stworzonej strony internetowej? ',
			answer:
				'Tak, zgodnie z umową, którą zawieramy na samym początku, w momencie płatności otrzymasz prawa autorskie do swojej strony internetowej.',
		},
		{
			question: 'Nie posiadam żadnych zdjęć na stronę internetową. Czy przygotujecie je za mnie?',
			answer:
				'Tak, przygotujemy je za Ciebie, wliczając je w koszty wykonania. Kupimy je z legalnego źródła, aby oszczędzić nam jak i potencjalnemu klientowi problemów prawnych w przyszłości.',
		},
		{
			question: 'Dlaczego oferujecie tak niskie ceny?',
			answer:
				'Oferujemy niskie ceny m.in dlatego, że dopiero wchodzimy na komercyjną ścieżkę i w tym czasie chcemy zbudować solidne zaufanie jak i reputację. Warto jednak zaznaczyć, że ceny podane w sekcji powyżej (Cennik i oferty) to ceny minimalne za pakiet. Końcowa wycena projektu będzie zależna od tego jakie masz oczekiwania wobec swojej strony jak i od posiadanych przez Ciebie zasobów (logo, hosting, domena, zdjęcia itd.). ',
		},
		{
			question: 'Czy będę mógł śledzić cały proces powstawania mojej strony internetowej?',
			answer:
				'Tak. Stawiamy na transparentność. W związku z tym, zostaniesz poinformowany o każdej zmianie statusu wykonywania zlecenia drogą mailową. ',
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
			<section className='bg-customGray m-auto pt-8'>
				<h2 className='text-mainText font-bold text-3xl text-center lg:text-4xl'>Q&A</h2>
				<div className='py-14  m-auto px-6 sm:px-10 wrapper 2xl:px-0'>
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
