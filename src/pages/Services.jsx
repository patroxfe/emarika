export default function Services() {
	const services = [
		{ serviceName: 'Strony One Page', fade: 'from-firstViolet to-secondViolet' },
		{ serviceName: 'Strony Multi Page', fade: 'from-firstViolet to-secondViolet' },
		{ serviceName: 'Strony z Blogiem', fade: 'from-firstViolet to-secondViolet' },
		{ serviceName: 'Logo dla firmy', fade: 'from-firstBlue to-secondBlue' },
		{ serviceName: 'Banery i wizytówki', fade: 'from-firstRed to-secondRed' },
		{ serviceName: 'Pomoc techniczna', fade: 'from-firstGreen to-secondGreen' },
	]

	return (
		<section className='bg-white m-auto py-8'>
			<h2 className='text-mainText font-bold text-4xl text-center'>Oferowane usługi</h2>

			<div className='flex flex-col space-y-16 my-20'>
				{services.map((item, index) => (
					<div
						key={index}
						className='[box-shadow:_0px_4px_33px_rgb(0_0_0_/_25%)] text-center py-10 rounded cursor-pointer relative'>
						<div
							className={`w-14 h-14 rounded-full absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-gradient-to-r ${item.fade}`}></div>
						<h4 className='text-mainText text-xl font-semibold'>{item.serviceName}</h4>
					</div>
				))}
			</div>
		</section>
	)
}
