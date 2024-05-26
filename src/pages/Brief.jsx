import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import categoryId from './Pricing';

export default function Brief() {
	const [firstName, setFirstName] = useState('');
	// const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [socialMedia, setSocialMedia] = useState('');
	const [content, setContent] = useState('');
	const [logo, setLogo] = useState('');
	const [description, setDescription] = useState('');
	const [language, setLanguage] = useState('');
	const [showPopup, setShowPopup] = useState({ show: false, message: '' });

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

		const formData = new FormData();
		formData.append('firstName', firstName);
		// formData.append('lastName', lastName)
		formData.append('email', email);
		formData.append('phone', phone);
		formData.append('socialMedia', socialMedia);
		formData.append('content', content);
		formData.append('logo', logo);
		formData.append('language', language);
		formData.append('category', categoryId);

		try {
			const response = await fetch('form.php', {
				method: 'POST',
				body: formData,
			});

			if (response.ok) {
				setShowPopup({
					show: true,
					message: 'Formularz został poprawnie wysłany!',
				});
				console.log('Dane zostały pomyślnie przesłane do PHP');
				console.log('Wysłano formularz z danymi:', {
					firstName,
					// lastName,
					email,
					phone,
					socialMedia,
					content,
					logo,
					description,
					language,
				});
			} else {
				setShowPopup({
					show: true,
					message:
						'Niestety nie udało się wysłać formularza, sprawdź adres email oraz inne dane, spróbuj jeszcze raz!',
				});
				console.error('Wystąpił problem podczas przesyłania danych do PHP');
			}
		} catch (error) {
			setShowPopup({
				show: true,
				message:
					' "Catch error" przykro nam nie udało się wysłać formularza. Skontaktuj się z nami bezpośrednio przez email, przepraszamy!',
			});
			console.error('Wystąpił błąd:', error);
		}
	};

	const validateName = (name) => {
		return /[a-zA-Z]/.test(name);
	};

	const validateEmail = (email) => {
		const re = /\S+@\S+\.\S+/;
		return re.test(email);
	};

	const validatePhone = (phone) => {
		// Usunięcie wszystkich spacji z ciągu
		const cleanedPhone = phone.replace(/\s+/g, '');
		// Sprawdzenie, czy ciąg zawiera dokładnie 9 cyfr
		return /^[0-9]{9}$/.test(cleanedPhone);
	};

	const validateDescription = (text) => {
		return text.length >= 10;
	};

	const validateCheckbox = () => {
		const socialMediaChecked =
			document.querySelectorAll('input[name=social_media]:checked').length > 0;
		const contentChecked =
			document.querySelectorAll('input[name=content]:checked').length > 0;
		const logoChecked =
			document.querySelectorAll('input[name=logo]:checked').length > 0;
		return socialMediaChecked && contentChecked && logoChecked;
	};

	const validateLanguage = () => {
		return language.length >= 3;
	};

	return (
		<div className='max-w-4xl mx-0 sm:mx-5 md:mx-20 lg:mx-auto p-4 relative flex flex-col items-center'>
			<h3 className='text-3xl text-mainText font-bold mt-32'>
				Wypełnij formularz i uzyskaj wycenę
			</h3>
			<div className='mb-32 mt-24 relative'>
				<Link
					to='/emarika/'
					className='text-blueMain absolute right-0 -top-10 font-medium text-lg '
				>
					Wróć do strony głównej
				</Link>
				<form
					onSubmit={handleSubmit}
					action='form.php'
					className='space-y-6 text-black [box-shadow:_0px_4px_33px_rgb(0_0_0_/_25%)] rounded-2xl p-5 lg:p-10 '
					noValidate
				>
					<div className='grid lg:grid-cols-2 gap-4 text-xl'>
						<div>
							<label className='block font-medium'>Imię i nazwisko:</label>
							<input
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
										onChange={(e) => setSocialMedia(e.target.value)}
										type='radio'
										name='social_media'
										value='Nie, nie potrzebuję'
										className='form-radio h-5 w-5 text-mainText	 focus:ring-2 focus:ring-offset-2 focus:ring-mainText'
									/>
									<span className='ml-2'>Nie, nie potrzebuję</span>
								</label>
							</div>
							<div>
								<label className='inline-flex items-center text-black'>
									<input
										onChange={(e) => setSocialMedia(e.target.value)}
										type='radio'
										name='social_media'
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
							Czy posiadasz treści na stronę?
						</label>
						<div className='space-y-2'>
							<div>
								<label className='inline-flex items-center text-black'>
									<input
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
										onChange={(e) => setContent(e.target.value)}
										type='radio'
										name='content'
										value='Nie, potrzebuję pomocy'
										className='form-radio h-5 w-5 focus:ring-offset-2 focus:ring-mainText'
									/>
									<span className='ml-2'>Nie, potrzebuję pomocy</span>
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
										onChange={(e) => setLogo(e.target.value)}
										type='radio'
										name='logo'
										value='Nie, chciałbym abyście stworzyli je dla mnie'
										className='form-radio h-5 w-5 text-indigo-600 focus:ring-offset-2 focus:ring-mainText'
									/>
									<span className='ml-2'>
										Nie, chciałbym abyście stworzyli je dla mnie
									</span>
								</label>
							</div>
							<div>
								<label className='inline-flex items-center text-black'>
									<input
										onChange={(e) => setLogo(e.target.value)}
										type='radio'
										name='logo'
										value='Nie'
										className='form-radio h-5 w-5 text-indigo-600 focus:ring-offset-2 focus:ring-mainText'
									/>
									<span className='ml-2'>Nie</span>
								</label>
							</div>
						</div>
					</div>

					<div>
						<label className='block text-xl font-medium'>
							Czy potrzebujesz dodatkowych wersji językowych?:
						</label>
						<input
							type='url'
							onChange={(e) => setLanguage(e.target.value)}
							name='language'
							className=' block w-full rounded-md border-[1px] border-borderForm mt-2  sm:text-sm bg-transparent py-2 px-5 focus:ring-2 focus:ring-offset-2 focus:ring-mainText'
							placeholder='(Jeśli tak to jakich?)'
						/>
					</div>
					<div>
						<label className='block text-xl font-medium'>
							Czy masz dodatkowe uwagi, propozycje, które mogą być przydatne
							przy wycenie?:
						</label>
						<input
							type='url'
							name='notes'
							placeholder='(Chciałbym mapę google, potrzebuję około 10 podstron. Według mnie strona wyglądałaby ciekawie z gradientem!, lubie pieski)'
							className=' block w-full rounded-md border-[1px] border-borderForm mt-2  sm:text-sm bg-transparent py-2 px-5 focus:ring-2 focus:ring-offset-2 focus:ring-mainText'
						/>
					</div>

					<div className='flex items-center'>
						<button
							type='submit'
							className='mx-auto flex justify-center items-center w-40 h-14 rounded py-2 px-4 bg-blueMain font-medium text-xl hover:bg-mainText duration-300 text-white focus:ring-2 focus:ring-offset-2 focus:ring-mainText'
						>
							Wyślij
						</button>
					</div>
				</form>
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
