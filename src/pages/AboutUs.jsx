import Arrow from '../assets/arrow.svg'

export default function AboutUs() {
	return (
		<section className='bg-customGray m-auto py-8'>
			<h2 className='text-mainText font-bold text-4xl text-center'>O nas</h2>
			<div className='my-14 max-w-2xl m-auto'>
				<div className='border-y-[1px] border-borderCol py-3 flex justify-between'>
					<p className='text-mainText font-medium text-xl max-w-[75%]'>Kim jesteśmy?</p>
					<img src={Arrow} alt='Strzałka rozwijająca odpowiedź' className='cursor-pointer'/>
				</div>
				<div className='hidden'>
					<p className='text-mainText'>Odpowiedz</p>
				</div>

				<div className='border-b-[1px] border-borderCol py-3 flex justify-between'>
					<p className='text-mainText font-medium text-xl max-w-[75%]'>Nasze podejście do pracy</p>
					<img src={Arrow} alt='Strzałka rozwijająca odpowiedź' className='cursor-pointer'/>
				</div>
				<div className='hidden'>
					<p className='text-mainText'>Odpowiedz</p>
				</div>

				<div className='border-b-[1px] border-borderCol py-3 flex justify-between'>
					<p className='text-mainText font-medium text-xl max-w-[75%]'>Dlaczego jesteśmy warci zaufania?</p>
					<img src={Arrow} alt='Strzałka rozwijająca odpowiedź' className='cursor-pointer'/>
				</div>
				<div className='hidden'>
					<p className='text-mainText'>Odpowiedz</p>
				</div>

				<div className='border-b-[1px] border-borderCol py-3 flex justify-between'>
					<p className='text-mainText font-medium text-xl max-w-[75%]'>Doświadczenie i możliwości</p>
					<img src={Arrow} alt='Strzałka rozwijająca odpowiedź' className='cursor-pointer'/>
				</div>
				<div className='hidden'>
					<p className='text-mainText'>Odpowiedz</p>
				</div>
			</div>
		</section>
	)
}