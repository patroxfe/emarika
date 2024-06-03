import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import RingLoader from 'react-spinners/RingLoader';

export default function Brief() {
	const [firstName, setFirstName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [description, setDescription] = useState('');
	const [socialMedia, setSocialMedia] = useState('');
	const [content, setContent] = useState('');
	const [logo, setLogo] = useState('');
	const [language, setLanguage] = useState('');
	const [competitors, setCompetitors] = useState('');
	const [notes, setNotes] = useState('');
	const [hosting, setHosting] = useState('');
	const [showPopup, setShowPopup] = useState({ show: false, message: '' });
	const [recap, setRecap] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const SITEKEY = '6Ldu8O8pAAAAAAz4sR4SS5K0ouTe_kl27O9dI1zp';

	const handleSubmit = async (e) => {
		e.preventDefault();
		window.scrollTo({ top: 0, behavior: 'smooth' });

		if (!validateName(firstName)) {
			setShowPopup({ show: true, message: 'Nieprawidłowe imię i nazwisko.' });
			return;
		}
		if (!validateEmail(email)) {
			setShowPopup({
				show: true,
				message: 'Nieprawidłowy adres e-mail. Spróbuj ponownie.',
			});
			return;
		}
		if (!validatePhone(phone)) {
			setShowPopup({
				show: true,
				message:
					'Nieprawidłowy numer telefonu (prosimy wpisywać bez kierunkowego :) ). Spróbuj ponownie.',
			});
			return;
		}
		if (!validateDescription(description)) {
			setShowPopup({
				show: true,
				message: 'Krótki opis... Prosimy chociaż w 3 słowach... :c',
			});
			return;
		}
		if (!validateCheckbox()) {
			setShowPopup({
				show: true,
				message: 'Proszę zaznaczyć wszystkie pytania.',
			});
			return;
		}
		if (!validateLanguage()) {
			setShowPopup({ show: true, message: 'Co z wersjami językowymi?' });
			return;
		}

		try {
			setIsLoading(true);
			const formData = new FormData();
			formData.append('firstName', firstName);
			formData.append('email', email);
			formData.append('phone', phone);
			formData.append('description', description);
			formData.append('socialMedia', socialMedia);
			formData.append('content', content);
			formData.append('logo', logo);
			formData.append('language', language);
			formData.append('hosting', hosting);
			formData.append('competitors', competitors);
			formData.append('notes', notes);

			await axios.post('/form-handler.php', formData);
			setIsLoading(false);
			setShowPopup({ show: true, message: 'Dane zostały wysłane pomyślnie!' });

			// Resetowanie stanu
			setFirstName('');
			setEmail('');
			setPhone('');
			setDescription('');
			setSocialMedia('');
			setContent('');
			setLogo('');
			setLanguage('');
			setHosting('');
			setCompetitors('');
			setNotes('');
			setRecap(null);

			// Resetowanie reCAPTCHA
			if (window.grecaptcha) {
				window.grecaptcha.reset();
			}
		} catch (error) {
			setIsLoading(false);
			setShowPopup({
				show: true,
				message:
					'Wystąpił błąd podczas wysyłania danych. Spróbuj ponownie później.',
			});
		}
	};

	const validateName = (name) => /[a-zA-Z]/.test(name);
	const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
	const validatePhone = (phone) => /^[0-9]{9}$/.test(phone.replace(/\s+/g, ''));
	const validateDescription = (text) => text.length >= 10;
	const validateCheckbox = () => {
		const socialMediaChecked =
			document.querySelectorAll('input[name=media]:checked').length > 0;
		const contentChecked =
			document.querySelectorAll('input[name=material]:checked').length > 0;
		const logoChecked =
			document.querySelectorAll('input[name=logo]:checked').length > 0;
		const hostingChecked =
			document.querySelectorAll('input[name=hosting]:checked').length > 0;
		return (
			socialMediaChecked && contentChecked && logoChecked && hostingChecked
		);
	};
	const validateLanguage = () => language.length >= 3;

	return (
		<div className='max-w-4xl mx-0 sm:mx-5 md:mx-20 lg:mx-auto p-4 relative flex flex-col items-center'>
			<h3 className='text-3xl text-mainText font-bold mt-32'>
				Wypełnij formularz i uzyskaj wycenę
			</h3>
			<div className='mb-32 mt-24 relative'>
				<Link
					to='/'
					className='text-blueMain absolute right-0 -top-10 font-bold text-lg '
				>
					Wróć do strony głównej
				</Link>
				<form
					onSubmit={handleSubmit}
					className='relative space-y-6 text-black [box-shadow:_0px_0px_13px_rgb(0_0_0_/_15%)] rounded p-5 lg:p-10 '
					noValidate
				>
					<div className='grid lg:grid-cols-2 gap-4 text-xl'>
						<div>
							<label className='block font-medium'>Imię i nazwisko:</label>
							<input
								value={firstName}
								onChange={(e) => setFirstName(e.target.value)}
								required
								type='text'
								name='name'
								className='block w-full rounded-md border-[1px] border-borderForm mt-2 sm:text-sm bg-transparent py-2 px-5 focus:ring-2 focus:ring-offset-2 focus:ring-mainText'
							/>
						</div>
						<div>
							<label className='block font-medium'>Adres e-mail:</label>
							<input
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
								type='email'
								name='email'
								title='Wprowadź poprawny adres e-mail'
								placeholder='(upewnij się, inaczej nie dostaniemy zgłoszenia)'
								className='block w-full rounded-md border-[1px] border-borderForm mt-2 sm:text-sm bg-transparent py-2 px-5 focus:ring-2 focus:ring-offset-2 focus:ring-mainText'
							/>
						</div>
					</div>

					<div className='grid lg:grid-cols-2 gap-4'>
						<div>
							<label className='block text-xl font-medium'>
								Numer telefonu:
							</label>
							<input
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
								type='tel'
								name='phone'
								className='block w-full rounded-md border-[1px] border-borderForm mt-2 sm:text-sm bg-transparent py-2 px-5 focus:ring-2 focus:ring-offset-2 focus:ring-mainText'
								maxLength='15'
								required
							/>
						</div>
						<div>
							<label className='block text-xl font-medium'>
								Adres obecnej strony internetowej:
							</label>
							<input
								type='url'
								name='actualpage'
								className='block w-full rounded-md border-[1px] border-borderForm mt-2 sm:text-sm bg-transparent py-2 px-5 focus:ring-2 focus:ring-offset-2 focus:ring-mainText'
								placeholder='(Jeśli posiadasz)'
							/>
						</div>
					</div>

					<div>
						<label className='block text-xl font-medium'>
							Krótki opis prowadzonej działalności i oczekiwania wobec nowej
							strony internetowej:
						</label>
						<textarea
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							name='description'
							className='block w-full rounded-md border-[1px] border-borderForm mt-2 sm:text-sm bg-transparent py-2 px-5 focus:ring-2 focus:ring-offset-2 focus:ring-mainText'
							rows='4'
							required
						></textarea>
					</div>

					<div>
						<label className='block text-xl font-medium'>
							Wskaż strony konkurencji oraz inne strony, które Ci się podobają:
						</label>
						<textarea
							value={competitors}
							onChange={(e) => setCompetitors(e.target.value)}
							className='block w-full rounded-md border-[1px] border-borderForm mt-2 sm:text-sm bg-transparent py-2 px-5 focus:ring-2 focus:ring-offset-2 focus:ring-mainText'
							rows='4'
							name='competitors'
						></textarea>
					</div>

					<div>
						<label className='block text-xl font-medium mb-2'>
							Czy posiadasz konta firmowe w social media?
						</label>
						<div className='space-y-2'>
							<div>
								<label className='inline-flex items-center text-black'>
									<input
										checked={socialMedia === 'Tak'}
										onChange={(e) => setSocialMedia(e.target.value)}
										type='radio'
										name='media'
										value='Tak'
										className='form-radio h-5 w-5 text-mainText bg-mainText focus:ring-offset-2 focus:ring-mainText'
									/>
									<span className='ml-2'>Tak</span>
								</label>
							</div>
							<div>
								<label className='inline-flex items-center text-black'>
									<input
										checked={socialMedia === 'Nie, nie potrzebuję'}
										onChange={(e) => setSocialMedia(e.target.value)}
										type='radio'
										name='media'
										value='Nie, nie potrzebuję'
										className='form-radio h-5 w-5 text-mainText focus:ring-2 focus:ring-offset-2 focus:ring-mainText'
									/>
									<span className='ml-2'>Nie, nie potrzebuję</span>
								</label>
							</div>
							<div>
								<label className='inline-flex items-center text-black'>
									<input
										checked={socialMedia === 'Nie, ale planuję założyć'}
										onChange={(e) => setSocialMedia(e.target.value)}
										type='radio'
										name='media'
										value='Nie, ale planuję założyć'
										className='form-radio h-5 w-5 text-mainText focus:ring-2 focus:ring-offset-2 focus:ring-mainText'
									/>
									<span className='ml-2'>Nie, ale planuję założyć</span>
								</label>
							</div>
						</div>
					</div>

					<div>
						<label className='block text-xl font-medium mb-2'>
							Czy posiadasz treści (tekst, zdjęcia) na stronę?
						</label>
						<div className='space-y-2'>
							<div>
								<label className='inline-flex items-center text-black'>
									<input
										checked={content === 'Tak, posiadam'}
										onChange={(e) => setContent(e.target.value)}
										type='radio'
										name='material'
										value='Tak, posiadam'
										className='form-radio h-5 w-5 text-black focus:ring-offset-2 focus:ring-mainText'
									/>
									<span className='ml-2'>Tak, posiadam</span>
								</label>
							</div>
							<div>
								<label className='inline-flex items-center text-black'>
									<input
										checked={content === 'Nie, potrzebuję pomocy'}
										onChange={(e) => setContent(e.target.value)}
										type='radio'
										name='material'
										value='Nie, potrzebuję pomocy'
										className='form-radio h-5 w-5 focus:ring-offset-2 focus:ring-mainText'
									/>
									<span className='ml-2'>
										Nie, potrzebuję pomocy w zorganizowaniu
									</span>
								</label>
							</div>
						</div>
					</div>

					<div>
						<label className='block text-xl font-medium mb-2'>
							Czy posiadasz logo firmy?
						</label>
						<div className='space-y-2'>
							<div>
								<label className='inline-flex items-center text-black'>
									<input
										checked={logo === 'Tak'}
										onChange={(e) => setLogo(e.target.value)}
										type='radio'
										name='logo'
										value='Tak'
										className='form-radio h-5 w-5 text-indigo-600 focus:ring-offset-2 focus:ring-mainText'
									/>
									<span className='ml-2'>Tak</span>
								</label>
							</div>
							<div>
								<label className='inline-flex items-center text-black'>
									<input
										checked={logo === 'Nie, chciałbym abyście mi je stworzyli'}
										onChange={(e) => setLogo(e.target.value)}
										type='radio'
										name='logo'
										value='Nie, chciałbym abyście mi je stworzyli'
										className='form-radio h-5 w-5 text-indigo-600 focus:ring-offset-2 focus:ring-mainText'
									/>
									<span className='ml-2'>
										Nie, chciałbym abyście mi je stworzyli
									</span>
								</label>
							</div>
							<div>
								<label className='inline-flex items-center text-black'>
									<input
										checked={logo === 'Nie potrzebuję'}
										onChange={(e) => setLogo(e.target.value)}
										type='radio'
										name='logo'
										value='Nie potrzebuję'
										className='form-radio h-5 w-5 text-indigo-600 focus:ring-offset-2 focus:ring-mainText'
									/>
									<span className='ml-2'>Nie potrzebuję</span>
								</label>
							</div>
						</div>
					</div>

					{/* ========================== Kasa =================== */}

					<div>
						<label className='block text-xl font-medium mb-2'>
							Czy posiadasz własny hosting i domenę?
						</label>
						<div className='space-y-2'>
							<div>
								<label className='inline-flex items-center text-black'>
									<input
										checked={hosting === 'Tak'}
										onChange={(e) => setHosting(e.target.value)}
										type='radio'
										name='hosting'
										value='Tak'
										className='form-radio h-5 w-5 text-indigo-600 focus:ring-offset-2 focus:ring-mainText'
									/>
									<span className='ml-2'>Tak</span>
								</label>
							</div>
							<div>
								<label className='inline-flex items-center text-black'>
									<input
										checked={
											hosting === 'Nie, ale załatwię to we własnym zakresie'
										}
										onChange={(e) => setHosting(e.target.value)}
										type='radio'
										name='hosting'
										value='Nie, ale załatwię to we własnym zakresie'
										className='form-radio h-5 w-5 text-indigo-600 focus:ring-offset-2 focus:ring-mainText'
									/>
									<span className='ml-2'>
										Nie, ale załatwię to we własnym zakresie
									</span>
								</label>
							</div>
							<div>
								<label className='inline-flex items-center text-black'>
									<input
										checked={
											hosting ===
											'Nie, chcę abyście uwzględnili to w moim projekcie'
										}
										onChange={(e) => setHosting(e.target.value)}
										type='radio'
										name='hosting'
										value='Nie, chcę abyście uwzględnili to w moim projekcie'
										className='form-radio h-5 w-5 text-indigo-600 focus:ring-offset-2 focus:ring-mainText'
									/>
									<span className='ml-2'>
										Nie, chcę abyście uwzględnili to w moim projekcie
									</span>
								</label>
							</div>
						</div>
					</div>

					<div>
						<label className='block text-xl font-medium'>
							Czy potrzebujesz dodatkowych wersji językowych?:
						</label>
						<input
							value={language}
							type='text'
							onChange={(e) => setLanguage(e.target.value)}
							name='language'
							className='block w-full rounded-md border-[1px] border-borderForm mt-2 sm:text-sm bg-transparent py-2 px-5 focus:ring-2 focus:ring-offset-2 focus:ring-mainText'
							placeholder='(Jeśli tak to jakich?)'
						/>
					</div>
					<div>
						<label className='block text-xl font-medium'>
							Czy masz dodatkowe uwagi, propozycje, które mogą być przydatne
							przy wycenie?:
						</label>
						<input
							value={notes}
							type='text'
							onChange={(e) => setNotes(e.target.value)}
							name='notes'
							placeholder='(Chciałbym mapę google, potrzebuję około 10 podstron. Według mnie strona wyglądałaby ciekawie z gradientem!, lubie pieski)'
							className='block w-full rounded-md border-[1px] border-borderForm mt-2 sm:text-sm bg-transparent py-2 px-5 focus:ring-2 focus:ring-offset-2 focus:ring-mainText'
						/>
					</div>

					<div className='flex items-center flex-col space-y-5'>
						<ReCAPTCHA sitekey={SITEKEY} onChange={(val) => setRecap(val)} />
						<button
							disabled={!recap}
							type='submit'
							className='mx-auto flex justify-center items-center w-40 h-14 rounded py-2 px-4 bg-blueMain font-medium text-xl hover:bg-mainText duration-300 text-white focus:ring-2 focus:ring-offset-2 focus:ring-mainText'
						>
							Wyślij
						</button>
					</div>
				</form>
				{isLoading ? (
					<div className='fixed top-0 left-0 bg-black bg-opacity-50 w-screen h-screen flex items-center justify-center'>
						<RingLoader
							color='#00b2ff'
							loading
							size={200}
							speedMultiplier={1}
						/>
					</div>
				) : (
					''
				)}
				{showPopup.show && (
					<div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center'>
						<div className='bg-white p-6 rounded-lg shadow-lg text-center'>
							<p className='mb-4 text-black'>{showPopup.message}</p>
							<button
								onClick={() => setShowPopup({ show: false, message: '' })}
								className='mt-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded text-white bg-blueMain hover:bg-mainText focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mainText'
							>
								Zamknij
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
