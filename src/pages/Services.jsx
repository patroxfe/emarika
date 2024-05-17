export default function Services() {
	const services = [
		{ serviceName: 'Strony One Page' },
		{ serviceName: 'Strony Multi Page' },
		{ serviceName: 'Strony z Blogiem' },
		{ serviceName: 'Logo dla firmy' },
		{ serviceName: 'Banery i wizytówki' },
		{ serviceName: 'Pomoc techniczna' },
	]

	return (
		<section className='bg-white m-auto py-8'>
			<h2 className='text-mainText font-bold text-4xl text-center'>Oferowane usługi</h2>

			<div className='flex flex-col space-y-12 my-14'>
				{services.map((item, index) => (
					<div key={index} className='[box-shadow:_5px_5px_10px_rgb(0_0_0_/_25%)] text-center py-6 rounded cursor-pointer'>
						<h4 className='text-mainText text-xl font-medium'>{item.serviceName}</h4>
					</div>
				))}
			</div>
		</section>
	)
}
