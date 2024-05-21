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
			question: 'Kim jesteśmy?',
			answer:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		},
		{
			question: 'Nasze podejście do pracy i klienta',
			answer:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.',
		},
		{
			question: 'Dlaczego jesteśmy warci zaufania?',
			answer:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
		},
		{
			question: 'Doświadczenie i możliwości',
			answer:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
		},
		{
			question: 'Kim jesteśmy?',
			answer:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		},
		{
			question: 'Nasze podejście do pracy i klienta',
			answer:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.',
		},
		{
			question: 'Dlaczego jesteśmy warci zaufania?',
			answer:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
		},
		{
			question: 'Doświadczenie i możliwości',
			answer:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
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
				<div className='my-14 max-w-2xl m-auto px-6 sm:px-10'>
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
