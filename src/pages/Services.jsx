import BlogImg from '../assets/services_blog.svg'
import CardImg from '../assets/services_card.svg'
import HelpImg from '../assets/services_help.svg'
import LogoImg from '../assets/services_logo.svg'
import MultiPageImg from '../assets/services_multipage.svg'
import OnePageImg from '../assets/services_onepage.svg'

export default function Services() {
	const services = [
		{
			serviceName: 'Strony wizytówki',
			fade: 'from-firstViolet to-secondViolet',
			img: OnePageImg,
		},
		{
			serviceName: 'Strony dla firm',
			fade: 'from-firstViolet to-secondViolet',
			img: MultiPageImg,
		},
		{
			serviceName: 'Strony z blogiem',
			fade: 'from-firstViolet to-secondViolet',
			img: BlogImg,
		},
		{
			serviceName: 'Logo dla firmy',
			fade: 'from-firstBlue to-secondBlue',
			img: LogoImg,
		},
		{
			serviceName: 'Banery i wizytówki',
			fade: 'from-firstBlue to-secondBlue',
			img: CardImg,
		},
		{
			serviceName: 'Pomoc techniczna',
			fade: 'from-firstRed to-secondRed',
			img: HelpImg,
		},
	]

	return (
		<>
			<section className='bg-white m-auto py-8'>
				<h2 className='text-mainText font-bold text-3xl text-center lg:text-4xl'>Oferowane usługi</h2>

				<div className='wrapper md:flex-row md:flex-wrap md:justify-center md:items-center flex flex-col gap-y-16 md:gap-y-16 my-20 px-10  md:w-auto xl:px-0 '>
					{services.map((item, index) => (
						<div
							key={index}
							className='md:min-w-[40%] lg:min-w-[30%] [box-shadow:_0px_4px_33px_rgb(0_0_0_/_25%)] text-center py-10 md:mx-5 rounded cursor-pointer relative hover:scale-110 transition fix-block'>
							<div
								className={`flex justify-center items-center w-14 h-14 rounded-full absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-gradient-to-r ${item.fade}`}>
								<img src={item.img} alt='icon' className='w-8 h-8' />
							</div>
							<h4 className='text-mainText text-xl font-semibold'>{item.serviceName}</h4>
						</div>
					))}
				</div>
			</section>
		</>
	)
}
