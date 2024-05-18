import PhoneLaptop from '../assets/doheadera.png';
import Circles from '../assets/circles.png';

export default function Header() {
	return (
		<>
			<img
				className='absolute top-0 left-0 z-0'
				src={Circles}
				alt='Background circles'
			/>
			<section className=' text-center z-30 lg:flex'>
				<div className='lg:min-w-[30%] lg:max-w-[50%]'>
					<h1 className='font-extrabold text-3xl pt-[130px] leading-10 [text-shadow:_5px_5px_10px_rgb(0_0_0_/_25%)]'>
						Tworzymy nowoczesne strony internetowe na zamówienie
					</h1>
					<img
						className='scale-1 lg:hidden'
						src={PhoneLaptop}
						alt='Projekt na monitorze oraz na telefonie, wizualizuje naszą cudowną pracę'
					/>
					<p className='pt-6 text-lg leading-6 font-light text-white'>
						Jesteśmy zespołem pasjonatów, dla których tworzenie stron
						internetowych to sztuka. Nasza misja to przekształcenie Twoich
						pomysłów w wirtualną rzeczywistość, która zachwyca i przyciąga
						uwagę!
					</p>
					<button className='bg-white drop-shadow-lg text-buttonText text-lg font-semibold m-8 py-2 px-5 rounded mb-[100px]'>
						Sprawdź ofertę!
					</button>
				</div>
				<img
					className='hidden lg:scale-50 lg:block'
					src={PhoneLaptop}
					alt='Projekt na monitorze oraz na telefonie, wizualizuje naszą cudowną pracę'
				/>
			</section>
			<div className='relative'>
				<div className=' h-0 w-7/12 border-b-[50px] border-b-white border-r-[70px] border-r-[#d475c1] absolute top-[-50px]'></div>
			</div>
		</>
	);
}
