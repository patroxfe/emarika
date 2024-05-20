export default function Pricing() {
	const pricingOptions = [
		{
			category: 'onePage',
			options: [
				{
					title: 'Strona wizytówka',
					heading: 'Idealna na początek oraz do podstawowej prezentacji oferty firmy w internecie.',
					description: 'Cała treść na stronie głównej (5 sekcji)',
					leadTime: '3-6 dni',
					price: '1100 PLN',
					subpoints: [
						'Responsywna na wszystkie urządzenia',
						'Optymalizacja pod kątem SEO',
						'Integracja z mediami społecznościowymi',
					],
				},
			],
		},
		{
			category: 'multiPage',
			options: [
				{
					title: 'Strona firmowa',
					heading: 'Najczęściej wybierany wariant strony internetowej, standardowa prezentacja firmy w internecie.',
					description: 'Strona główna + do 5 podstron',
					leadTime: '5-8 dni',
					price: '1500 PLN',
					subpoints: ['Indywidualny projekt graficzny', 'Wiele podstron', 'Formularz kontaktowy', 'Galeria zdjęć'],
				},
			],
		},
		{
			category: 'blogPage',
			options: [
				{
					title: 'Strona z blogiem',
					heading:
						'Idealne rozwiązanie do prezentacji oferty firmy i budowania wizerunku oraz widoczności w Google za pomocą bloga.',
					description: 'Strona główna + do 5 podstron + blog',
					leadTime: '7-11 dni',
					price: '1900 PLN',
					subpoints: [
						'System zarządzania treścią (CMS)',
						'Możliwość dodawania wpisów blogowych',
						'Integracja z newsletterem',
					],
				},
			],
		},
	]

	return (
		<>
			<section className='bg-white m-auto py-8 pb-20'>
				<h2 className='text-mainText font-bold text-3xl text-center'>Cennik i oferty</h2>
				<div className='mt-8 flex flex-col lg:flex-row gap-10 lg:justify-center md:gap-30 wrapper items-center lg:items-stretch'>
					{pricingOptions.map(category =>
						category.options.map((option, index) => (
							<div
								key={index}
								className='bg-gray-100 p-4 rounded-lg [box-shadow:_0px_4px_33px_rgb(0_0_0_/_25%)] mb-6 md:min-w-[30%] max-w-sm'>
								<h4 className='text-xl font-semibold text-mainText'>{option.title}</h4>
								<p className='text-md text-secondText mt-2'>{option.heading}</p>
								<p className='text-md text-thirdText mt-2'>{option.description}</p>
								<p className='text-md text-thirdText mt-2'>Czas realizacji: {option.leadTime}</p>
								<ul className='list-disc list-inside mt-2'>
									{option.subpoints.map((subpoint, subIndex) => (
										<li key={subIndex} className='text-md text-thirdText'>
											{subpoint}
										</li>
									))}
								</ul>
								<p className='text-md text-thirdText mt-2'>Cena: {option.price}</p>
							</div>
						))
					)}
				</div>
			</section>
		</>
	)
}
