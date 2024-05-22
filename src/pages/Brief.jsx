// export default function Brief() {
// 	return (
// 		<section>
// 			<div className='bg-customGray px-6 pt-24'>
// 				<div className='bg-white [box-shadow:_0px_4px_33px_rgb(0_0_0_/_25%)] rounded p-5 wrapper '>
// 					<div className='flex flex-col md:flex-row md:space-x-8'>
// 						<div className='md:w-1/2'>
// 							<label htmlFor='name' className='text-lg '>
// 								Imię i nazwisko: <span>*</span>
// 							</label>
// 							<input type='text' id='name' className='bg-transparent text-lg p-2' />
// 						</div>
// 						<div className='md:w-1/2'>
// 							<label htmlFor='mail' className='text-lg'>
// 								Adres e-mail: <span>*</span>
// 							</label>
// 							<input type='text' id='mail' className='bg-transparent text-lg p-2' />
// 						</div>
// 					</div>

// 					<div className='flex flex-col md:flex-row md:space-x-8'>
// 						<div className='md:w-1/2'>
// 							<label htmlFor='phone' className='text-lg'>
// 								Numer telefonu: <span>*</span>
// 							</label>
// 							<input type='text' id='phone' className='bg-transparent text-lg p-2' />
// 						</div>
// 						<div className='md:w-1/2'>
// 							<label htmlFor='link' className='text-lg'>
// 								Adres obecnej strony internetowej (jeśli masz):
// 							</label>
// 							<input type='text' id='link' className='bg-transparent text-lg p-2' />
// 						</div>
// 					</div>
// 					<div>
// 						<label htmlFor='description' className='text-lg'>
// 							Krótki opis prowadzonej działalności i oczekiwania wobec nowej strony internetowej:
// 						</label>
// 						<textarea className='bg-transparent text-lg p-2 min-h-24 w-full max-h-full' />
// 					</div>
// 					<div>
// 						<label htmlFor='inspiration' className='text-lg'>
// 							Wskaż strony konkurencji oraz inne strony, które Ci się podobają:
// 						</label>
// 						<textarea className='bg-transparent text-lg p-2 min-h-24 w-full max-h-full' />
// 					</div>
// 					<div className='mb-8'>
// 						<label className='text-lg'>Czy posiadasz konto firmowe w social media?</label>
// 						<div className='mt-2'>
// 							<div>
// 								<input type='radio' id='social-yes' name='social' value='yes' />
// 								<label htmlFor='social-yes' className='text-lg'>
// 									Tak, posiadam konta
// 								</label>
// 							</div>
// 							<div className='py-2'>
// 								<input type='radio' id='social-no' name='social' value='no' />
// 								<label htmlFor='social-no' className='text-lg'>
// 									Nie posiadam kont i ich nie potrzebuje
// 								</label>
// 							</div>
// 							<div>
// 								<input type='radio' id='social-help' name='social' value='help' />
// 								<label htmlFor='social-help' className='text-lg'>
// 									Nie posiadam kont, ale chcę żebyście założyli je w ramach tworzonej strony
// 								</label>
// 							</div>
// 						</div>
// 					</div>
// 					<div className='mb-8'>
// 						<label className='text-lg'>Czy dostarczysz content - teksty i zdjęcia na stronę?</label>
// 						<div className='mt-2'>
// 							<div>
// 								<input type='radio' id='social-yes' name='social' value='yes' />
// 								<label htmlFor='social-yes' className='text-lg'>
// 									Tak, dostarczę wszystkie potrzebne materiały
// 								</label>
// 							</div>
// 							<div className='py-2'>
// 								<input type='radio' id='social-no' name='social' value='no' />
// 								<label htmlFor='social-no' className='text-lg'>
// 									Nie, potrzebuję pomocy w zorganizowaniu materiałów
// 								</label>
// 							</div>
// 						</div>
// 					</div>
// 					<div className='mb-8'>
// 						<label className='text-lg'>Czy posiadasz logo?</label>
// 						<div className='mt-2'>
// 							<div>
// 								<input type='radio' id='logo-yes' name='social' />
// 								<label htmlFor='logo-yes' className='text-lg'>
// 									Tak, posiadam logo lub zorganizuje je we własnym zakresie
// 								</label>
// 							</div>
// 							<div className='py-2'>
// 								<input type='radio' id='logo-no' name='social' />
// 								<label htmlFor='logo-no' className='text-lg'>
// 									Nie, nie posiadam logo i chcę, żebyście mi je zaprojektowali
// 								</label>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	)
// }
