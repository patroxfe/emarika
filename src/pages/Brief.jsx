import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Brief() {
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')
	// NIE ZROBIONE ALBO ROBIE ALBO ROBIŁEM I NIE DOKOŃCZYŁEM BO MNIE POJEBAŁO GODZINA 20:55 KURWA PRZED CHWILA BYŁA 19:12
	const [socialMedia, setSocialMedia] = useState('')
	const [content, setContent] = useState('')
	const [logo, setLogo] = useState('')
	const [description, setDescription] = useState('')
	// const [competitors, setCompetitors] = useState('');          TO KEST CHYBA NIEPOTRZEBNE
	// ====================================================================================================================
	const [showInvalidNamePopup, setShowInvalidNamePopup] = useState(false)
	const [showInvalidEmailPopup, setShowInvalidEmailPopup] = useState(false)
	const [showInvalidPhonePopup, setShowInvalidPhonePopup] = useState(false)
	// ====================================================================================================================
	const [showInvalidDescriptionPopup, setShowInvalidDescriptionPopup] = useState(false)
	const [showInvalidCheckboxPopup, setShowInvalidCheckboxPopup] = useState(false)

	const handleSubmit = async e => {
		e.preventDefault()
		window.scrollTo({ top: 0, behavior: 'smooth' })
		if (!validateName(firstName)) {
			setShowInvalidNamePopup(true)
			return
		}
		if (!validateEmail(email)) {
			setShowInvalidEmailPopup(true)
			return
		}
		if (!validatePhone(phone)) {
			setShowInvalidPhonePopup(true)
			return
		}
		if (!validateDescription(content)) {
			setShowInvalidDescriptionPopup(true)
			return
		}
		if (!validateCheckbox()) {
			setShowInvalidCheckboxPopup(true)
			return
		}

		// Przygotowanie danych formularza
		const formData = new FormData()
		formData.append('firstName', firstName)
		formData.append('lastName', lastName)
		formData.append('email', email)
		formData.append('phone', phone)
		formData.append('socialMedia', socialMedia)
		formData.append('content', content)
		formData.append('logo', logo)

		try {
			// Wywołanie fetch, aby przesłać dane do pliku PHP
			const response = await fetch('form.php', {
				method: 'POST',
				body: formData,
			})

			// Obsługa odpowiedzi
			if (response.ok) {
				console.log('Dane zostały pomyślnie przesłane do PHP')
				console.log('Wysłano formularz z danymi:', {
					firstName,
					lastName,
					email,
					phone,
					socialMedia,
					content,
					logo,
					description,
				})
			} else {
				console.error('Wystąpił problem podczas przesyłania danych do PHP')
			}
		} catch (error) {
			console.error('Wystąpił błąd:', error)
		}
	}

	const validateName = name => {
		// Walidacja, że imię i nazwisko zawiera co najmniej jedną literę
		return /[a-zA-Z]/.test(name)
	}

	const validateEmail = email => {
		// Prosta walidacja adresu e-mail za pomocą wyrażenia regularnego
		const re = /\S+@\S+\.\S+/
		return re.test(email)
	}

	const validatePhone = phone => {
		// Walidacja, że numer telefonu zawiera tylko cyfry, opcjonalnie oddzielone spacjami, i ma co najmniej 9 cyfr
		return /^[0-9\s]{9,}$/.test(phone)
	}
	// ====================================================================  TO NIE DZIAŁA NIE WIEM CZEMU NAPRAW NIE POPSUJ BARDZIEJ
	const validateDescription = text => {
		// Sprawdź, czy tekst ma co najmniej 10 znaków
		return text.length >= 10
	}

	const validateCheckbox = () => {
		// Sprawdź, czy każda grupa checkboxów ma co najmniej jeden zaznaczony
		const socialMediaChecked = document.querySelectorAll('input[name=social_media]:checked').length > 0
		const contentChecked = document.querySelectorAll('input[name=content]:checked').length > 0
		const logoChecked = document.querySelectorAll('input[name=logo]:checked').length > 0

		// Zwróć true, jeśli wszystkie grupy mają co najmniej jeden zaznaczony checkbox
		return socialMediaChecked && contentChecked && logoChecked
	}

	return (
		<div className='max-w-4xl mx-0 sm:mx-5 md:mx-20 lg:mx-auto p-4  relative flex flex-col items-center'>
			<h3 className='text-3xl text-mainText font-bold mt-32'>Wypełnij formularz i uzyskaj wycenę</h3>
			<div className='mb-32 mt-24 relative'>
				<Link to='/emarika/' className='text-blueMain absolute right-0 -top-10 font-medium text-lg '>
					Wróć do strony głównej
				</Link>
				<form
					onSubmit={handleSubmit}
					action='form.php'
					className='space-y-6 text-black [box-shadow:_0px_4px_33px_rgb(0_0_0_/_25%)] rounded-2xl p-5 lg:p-10 '
					noValidate>
					{/* Imie i nazwisko oraz Adres e-mail */}

					<div className='grid lg:grid-cols-2 gap-4 text-xl'>
						<div>
							<label className='block font-medium '>Imię i nazwisko:</label>
							<input
								onChange={e => setFirstName(e.target.value)}
								required
								type='text'
								name='imie_nazwisko'
								className=' block w-full rounded-md border-[1px] border-borderForm mt-2  sm:text-sm bg-transparent py-2 px-5 focus:border-blueMain'
							/>
						</div>
						<div>
							<label className='block font-medium'>Adres e-mail:</label>
							<input
								onChange={e => setEmail(e.target.value)}
								required
								type='email'
								name='email'
								title='Wprowadź poprawny adres e-mail'
								className=' block w-full rounded-md border-[1px] border-borderForm mt-2  sm:text-sm bg-transparent py-2 px-5 focus:border-blueMain'
							/>
						</div>
					</div>

					{/* Numer telefonu */}
					<div className='grid lg:grid-cols-2 gap-4'>
						<div>
							<label className='block text-xl font-medium'>Numer telefonu:</label>
							<input
								onChange={e => setPhone(e.target.value)}
								type='tel'
								name='phone'
								className=' block w-full rounded-md border-[1px] border-borderForm mt-2  sm:text-sm bg-transparent py-2 px-5 focus:border-blueMain'
								maxLength='15'
								required
							/>
						</div>
						{/* Adres strony którą posiadasz albo nie posiadasz */}
						<div>
							<label className='block text-xl font-medium'>Adres obecnej strony internetowej:</label>
							<input
								type='url'
								className=' block w-full rounded-md border-[1px] border-borderForm mt-2  sm:text-sm bg-transparent py-2 px-5 focus:border-blueMain'
								placeholder='(Jeśli posiadasz)'
							/>
						</div>
					</div>

					{/* Krótki opis prowadzonej działalności i oczekiwania wobec nowej strony internetowej */}
					<div>
						<label className='block text-xl font-medium'>
							Krótki opis prowadzonej działalności i oczekiwania wobec nowej strony internetowej:
						</label>
						<textarea
							onChange={e => setDescription(e.target.value)}
							name='description'
							className=' block w-full rounded-md border-[1px] border-borderForm mt-2  sm:text-sm bg-transparent py-2 px-5 focus:border-blueMain '
							rows='4'
							required></textarea>
					</div>

					{/* Wskaż strony konkurencji oraz inne strony, które Ci się podobają */}
					<div>
						<label className='block text-xl font-medium'>
							Wskaż strony konkurencji oraz inne strony, które Ci się podobają:
						</label>
						<textarea
							className=' block w-full rounded-md border-[1px] border-borderForm mt-2  sm:text-sm bg-transparent py-2 px-5 focus:border-blueMain'
							rows='4'
							name='konkurencja'></textarea>
					</div>

					{/* Czy posiadasz konto firmowe w social media? */}
					<div>
						<label className='block text-xl font-medium mb-2'>Czy posiadasz konta firmowe w social media?</label>
						<div className='space-y-2'>
							<div>
								<label className='inline-flex items-center text-black'>
									<input
										onChange={e => setSocialMedia(e.target.value)}
										type='radio'
										name='social_media'
										className='form-radio h-5 w-5 text-indigo-600'
									/>
									<span className='ml-2'>Tak</span>
								</label>
							</div>
							<div>
								<label className='inline-flex items-center text-black'>
									<input
										onChange={e => setSocialMedia(e.target.value)}
										type='radio'
										name='social_media'
										className='form-radio h-5 w-5 text-indigo-600'
									/>
									<span className='ml-2'>Nie, nie potrzebuję</span>
								</label>
							</div>
							<div>
								<label className='inline-flex items-center text-black'>
									<input
										onChange={e => setSocialMedia(e.target.value)}
										type='radio'
										name='social_media'
										className='form-radio h-5 w-5 text-indigo-600'
									/>
									<span className='ml-2'>Nie, chciałbym żebyście założyli mi je w ramach nowej strony</span>
								</label>
							</div>
						</div>
					</div>

					{/* Czy dostarczysz content - teksty i zdjęcia na stronę? */}
					<div>
						<label className='block text-xl font-medium mb-2'>
							Czy dostarczysz content - teksty i zdjęcia na stronę?
						</label>
						<div className='space-y-2'>
							<div>
								<label className='inline-flex items-center text-black'>
									<input
										onChange={e => setContent(e.target.value)}
										type='radio'
										name='content'
										className='form-radio h-5 w-5 text-indigo-600'
										required
									/>
									<span className='ml-2'>Tak, mam przygotowane albo przygotuję!</span>
								</label>
							</div>
							<div>
								<label className='inline-flex items-center text-black'>
									<input
										onChange={e => setContent(e.target.value)}
										type='radio'
										name='content'
										className='form-radio h-5 w-5 text-indigo-600'
									/>
									<span className='ml-2'>Nie, chcę żebyście zrobili to za mnie</span>
								</label>
							</div>
						</div>
					</div>

					{/* Czy posiadasz logo? */}
					<div>
						<label className='block text-xl font-medium mb-2'>Czy posiadasz logo?</label>
						<div className='space-y-2'>
							<div>
								<label className='inline-flex items-center text-black'>
									<input
										onChange={e => setLogo(e.target.value)}
										type='radio'
										name='logo'
										className='form-radio h-5 w-5 text-indigo-600'
										required
									/>
									<span className='ml-2'>Tak</span>
								</label>
							</div>
							<div>
								<label className='inline-flex items-center text-black'>
									<input
										onChange={e => setLogo(e.target.value)}
										type='radio'
										name='logo'
										className='form-radio h-5 w-5 text-indigo-600'
									/>
									<span className='ml-2'>Nie, chce żebyście je zrobili</span>
								</label>
							</div>
							<div>
								<label className='inline-flex items-center text-black'>
									<input
										onChange={e => setLogo(e.target.value)}
										type='radio'
										name='logo'
										className='form-radio h-5 w-5 text-indigo-600'
									/>
									<span className='ml-2'>Nie</span>
								</label>
							</div>
						</div>
					</div>

					<div>
						<label className='block text-xl font-medium'>Czy potrzebujesz dodatkowych wersji językowych?:</label>
						<input
							type='url'
							className=' block w-full rounded-md border-[1px] border-borderForm mt-2  sm:text-sm bg-transparent py-2 px-5 focus:border-blueMain'
							placeholder='(Jeśli tak to jakich?)'
						/>
					</div>
					<div>
						<label className='block text-xl font-medium'>
							Czy masz dodatkowe uwagi, propozycje, które mogą być przydatne przy wycenie?:
						</label>
						<input
							type='url'
							className=' block w-full rounded-md border-[1px] border-borderForm mt-2  sm:text-sm bg-transparent py-2 px-5 focus:border-blueMain'
						/>
					</div>

					<div className='flex items-center justify-center'>
						<button
							type='submit'
							className='inline-flex justify-center py-2 px-4 my-4 border border-transparent shadow-sm  rounded-md text-white bg-blueMain hover:bg-indigo-700 w-1/2 text-2xl font-bold  duration-300'>
							Wyślij
						</button>
					</div>
				</form>


				{/* POPUPPY */}
				{showInvalidNamePopup && (
					<div
						className='absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white p-10'
						onClick={() => setShowInvalidNamePopup(false)}>
						<p>Nieprawidłowe imię i nazwisko.</p>
						<p className='pt-5'>Kliknij mnie!</p>
					</div>
				)}
				{showInvalidEmailPopup && (
					<div
						className='absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white p-10'
						onClick={() => setShowInvalidEmailPopup(false)}>
						<p>Nieprawidłowy adres e-mail. Spróbuj ponownie.</p>
						<p className='pt-5'>Kliknij mnie!</p>
					</div>
				)}
				{showInvalidPhonePopup && (
					<div
						className='absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white p-10'
						onClick={() => setShowInvalidPhonePopup(false)}>
						<p>Nieprawidłowy numer telefonu. Spróbuj ponownie.</p>
						<p className='pt-5'>Kliknij mnie!</p>
					</div>
				)}
				{showInvalidCheckboxPopup && (
					<div
						className='absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white p-10'
						onClick={() => setShowInvalidCheckboxPopup(false)}>
						<p>Proszę zaznaczyć wszystkie pytania.</p>
						<p className='pt-5'>Kliknij mnie!</p>
					</div>
				)}
				{showInvalidDescriptionPopup && (
					<div
						className='absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white p-10'
						onClick={() => setShowInvalidDescriptionPopup(false)}>
						<p>Krótki opis... Prosimy chociaż w 3 słowach... :c</p>
						<p className='pt-5'>Kliknij mnie!</p>
					</div>
				)}
			</div>
		</div>
	)
}
