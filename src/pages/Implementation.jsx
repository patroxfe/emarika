import Check from '../assets/checkmark.svg'

export default function Implementation() {
	const info = [
		{ feature: 'Użycie najnowszych technologii' },
		{ feature: 'Responsywne strony na wszystkie urządzenia' },
		{ feature: 'Niskie ceny' },
		{ feature: 'Bardzo krótki czas oczekiwania na realizację' },
		{ feature: 'Indywidualne podejście do klienta i projektu' },
		{ feature: 'Stały kontakt z klientem na każdym etapie' },
	]

	return (
		<section className='bg-customGray m-auto py-8'>
			<h2 className='text-mainText font-bold text-3xl text-center'>Proces realizacji</h2>

			<div className='my-12'>
				<p className='text-xl text-mainText font-semibold'>Zobacz co Cię czeka!</p>
				<div className='my-2 space-y-3'>
					{info.map((item, index) => (
						<div key={index} className='flex items-start mt-4'>
							<img src={Check} alt='icon' className='w-6 h-6 mr-2' />
							<p className='text-thirdText text-lg font-medium'>{item.feature}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
