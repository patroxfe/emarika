import PhoneLaptop from '../assets/doheadera.png'
import Circles from '../assets/circles.png'

export default function Header() {
	return (
		<>
			<img className='absolute top-0 left-0 z-0' src={Circles} alt='Background circles' />
			<section className=' text-center z-30 wrapper'>
				<h1 className='font-extrabold text-3xl pt-[140px] leading-10 [text-shadow:_5px_5px_10px_rgb(0_0_0_/_25%)]'>
					Tworzymy nowoczesne strony internetowe na zamówienie
				</h1>
				<img src={PhoneLaptop} alt='Projekt na monitorze oraz na telefonie, wizualizuje naszą cudowną pracę' />
				<p className='pt-6 text-lg leading-6 font-'>
					Jesteśmy zespołem pasjonatów dla których tworzenie stron internetowych to sztuka. Nasza misja to
					przekształcanie Twoich pomysłów w witrualną rzeczywistość, która zachwyca i przyciąga uwagę!
				</p>
				<button className='bg-white text-fuchsia-400 text-lg font-semibold m-8 py-1 px-5 rounded '>
					Sprawdź ofertę!
				</button>
			</section>
			<div className=' h-0 w-7/12 border-b-[50px] border-b-white border-r-[70px] border-r-[#c877cb]'></div>
		</>
	)
}