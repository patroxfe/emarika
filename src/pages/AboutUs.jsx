import { useState } from 'react';
import Arrow from '../assets/arrow.svg';

export default function AboutUs() {
	const [openQuestion, setOpenQuestion] = useState(null);

	const toggleQuestion = (index) => {
		setOpenQuestion(openQuestion === index ? null : index);
	};

	const questions = [
		{ question: 'Kim jesteśmy?', answer: 'Odpowiedz 1' },
		{ question: 'Nasze podejście do pracy', answer: 'Odpowiedz 2' },
		{ question: 'Dlaczego jesteśmy warci zaufania?', answer: 'Odpowiedz 3' },
		{ question: 'Doświadczenie i możliwości', answer: 'Odpowiedz 4' },
	];

	return (
		<section className='bg-customGray m-auto py-8'>
			<h2 className='text-mainText font-bold text-4xl text-center'>O nas</h2>
			<div className='my-14 max-w-2xl m-auto'>
				{questions.map((item, index) => (
					<div key={index} className='border-b-[1px] border-borderCol quotes'>
						<div 
							className=' py-3 flex justify-between items-center cursor-pointer'
							onClick={() => toggleQuestion(index)}
						>
							<p className='text-mainText font-semibold text-xl max-w-[75%]'>{item.question}</p>
							<img
								src={Arrow}
								alt='Strzałka rozwijająca odpowiedź'
								className={`transform transition-transform ${openQuestion === index ? 'rotate-180' : ''}`}
							/>
						</div>
						{openQuestion === index && (
							<div className='pb-2'>
								<p className='text-mainText'>{item.answer}</p>
							</div>
						)}
					</div>
				))}
			</div>
		</section>
	);
}
