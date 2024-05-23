import { Link } from 'react-router-dom'

export default function Pricing() {
	const pricingOptions = [
		{
			category: 'onePage',
			options: [
				{
					title: 'Strona Wizytówka',
					heading: 'Idealna na początek oraz do podstawowej prezentacji oferty firmy w internecie.',
					description: 'Cała treść na stronie głównej',
					leadTime: '3-6 dni',
					price: '1300',
					subpoints: [
						'Koncepcja budowy strony',
						'Szkic strony głównej',
						'Indywidualny projekt graficzny',
						'Dostosowanie do urządzeń mobilnych (RWD)',
						'Zakładki (tylko strona główna)',
						'Pisanie treści na stronę',
						'Testy na różnych urządzeniach',
						'Hosting i domena',
						'Publikacja strony',
						'Własność bez abonamentów',
						'Gwarancja na 12 miesięcy',
					],
				},
			],
		},
		{
			category: 'multiPage',
			options: [
				{
					title: 'Strona Firmowa',
					heading: 'Najczęściej wybierany wariant strony internetowej, standardowa prezentacja firmy w internecie.',
					description: 'Strona główna + do 5 podstron',
					leadTime: '5-8 dni',
					price: '1800',
					subpoints: [
						'Koncepcja budowy strony',
						'Szkic strony głównej i podstron',
						'Indywidualny projekt graficzny',
						'Dostosowanie do urządzeń mobilnych (RWD)',
						'Zakładki (strona główna + do 5 podstron)',
						'Pisanie treści na stronę',
						'Testy na różnych urządzeniach',
						'Hosting i domena',
						'Publikacja strony',
						'Własność bez abonamentów',
						'Gwarancja na 12 miesięcy',
						'Formularz kontaktowy',
					],
				},
			],
		},
		{
			category: 'blogPage',
			options: [
				{
					title: 'Strona Premium',
					heading:
						'Idealne rozwiązanie do prezentacji oferty i budowania wizerunku oraz widoczności w Google Twojej firmy.',
					description: 'Strona główna + do 5 podstron + blog',
					leadTime: '7-11 dni',
					price: '2200',
					subpoints: [
						'Koncepcja budowy strony',
						'Szkic strony głównej, podstron, listy artykułów, pojedyńczego artykułu',
						'Indywidualny projekt graficzny',
						'Dostosowanie do urządzeń mobilnych (RWD)',
						'Zakładki (strona główna + do 5 podstron + blog)',
						'Pisanie treści na stronę',
						'Testy na różnych urządzeniach',
						'Hosting i domena',
						'Publikacja strony',
						'Własność bez abonamentów',
						'Gwarancja na 12 miesięcy',
						'Formularz kontaktowy',
						'Blog (aktualności)',
						'Wizytówka i logo (opcjonalnie)',
					],
				},
			],
		},
	]

	return (
		<>
			<section className='bg-white m-auto py-8 pb-20' id='cennik-i-oferty'>
				<h2 className='text-mainText font-bold text-3xl text-center lg:text-4xl'>Cennik i oferty</h2>
				<div className='flex flex-col items-center'>
					<div className='mt-8 flex flex-col lg:flex-row gap-10 lg:justify-center md:gap-30 wrapper items-center lg:items-start px-6 sm:px-10 md:px-14 2xl:px-0 2xl:justify-start'>
						{pricingOptions.map(category =>
							category.options.map((option, index) => (
								<div
									key={index}
									className='bg-white p-8 rounded-lg [box-shadow:_0px_4px_33px_rgb(0_0_0_/_25%)] mb-6 md:min-w-[30%] max-w-sm cursor-pointer '>
									<Link to='/emarika/brief'>
										<div className='text-center'>
											<h4 className='text-2xl font-semibold text-mainText'>{option.title}</h4>
											<p className='text-md text-secondText mt-2'>{option.heading}</p>
										</div>
										<div className='border-y-[1px] border-stone-300 py-2 my-4'>
											<p className='text-md text-secondText font-semibold'>{option.description}</p>
											<p className='text-md text-secondText'>
												Czas realizacji: ok. <span className='font-semibold'>{option.leadTime}</span>
											</p>
										</div>
										<ul className='list-disc list-inside mt-2'>
											{option.subpoints.map((subpoint, subIndex) => (
												<li key={subIndex} className='text-md text-thirdText'>
													{subpoint}
												</li>
											))}
										</ul>
										<div className='text-center mt-10'>
											<p className='text-lg text-mainText mt-2 font-medium'>
												Od <span className='text-4xl font-bold'>{option.price}zł</span>
											</p>
											<p className='text-lg text-mainText font-medium'>+ VAT 23%</p>
										</div>
									</Link>
								</div>
							))
						)}
					</div>
					<Link
						to='/emarika/brief'
						className='text-white text-center text-2xl bg-gradient-to-r from-firstBlue to-secondBlue font-semibold rounded px-6 py-3 mt-10'>
						Uzyskaj wycenę
					</Link>
				</div>
			</section>
		</>
	)
}
