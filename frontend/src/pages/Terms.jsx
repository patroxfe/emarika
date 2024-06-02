import { Link } from 'react-router-dom'
function Terms() {
	const NIP = 8241548034
	const NAZWA_FIRMY = 'F.H.P. MARIKA emarika.pl'
	const BANK_ACC = '17 1020 3802 0000 1902 0128 5691'

	return (
		<div className='bg-customGray py-52 px-6 sm:px-10  2xl:px-0'>
			<div className='max-w-4xl mx-auto p-6 bg-white [box-shadow:_0px_0px_13px_rgb(0_0_0_/_15%)] rounded text-black relative'>
				<Link to='/' className='text-blueMain absolute right-0 -top-10 text-lg font-bold'>
					Wróć do strony głównej
				</Link>
				<h2 className='text-2xl font-bold mb-6'>Regulamin świadczenia usług tworzenia stron internetowych</h2>

				<section className='mb-6'>
					<h2 className='text-xl font-semibold mb-2'>1. Postanowienia ogólne</h2>
					<p>
						1.1. Regulamin określa zasady świadczenia usług tworzenia stron internetowych przez F.H.P. Marika z siedzibą
						w Łochowie, Sadowa 9, NIP: {NIP}.
					</p>
					<p>1.2. Korzystanie z usług oznacza akceptację niniejszego regulaminu.</p>
				</section>

				<section className='mb-6'>
					<h2 className='text-xl font-semibold mb-2'>2. Definicje</h2>
					<p>2.1. Usługodawca – F.H.P. Marika.</p>
					<p>2.2. Klient – osoba fizyczna, prawna lub jednostka organizacyjna korzystająca z usług Usługodawcy.</p>
				</section>

				<section className='mb-6'>
					<h2 className='text-xl font-semibold mb-2'>3. Warunki świadczenia usług</h2>
					<p>
						3.1. Usługodawca świadczy usługi tworzenia stron internetowych zgodnie z indywidualnymi ustaleniami z
						Klientem.
					</p>
					<p>3.2. Klient zobowiązany jest do dostarczenia informacji niezbędnych do realizacji zamówienia.</p>
				</section>

				<section className='mb-6'>
					<h2 className='text-xl font-semibold mb-2'>4. Ceny i płatności</h2>
					<p>4.1. Ceny usług są ustalane indywidualnie na podstawie zakresu prac.</p>
					<p>4.2. Akceptowane metody płatności to:</p>
					<ul className='list-disc list-inside'>
						<li>
							Przelew bankowy: Klient dokonuje płatności przelewem na numer konta bankowego podany przez Usługodawcę.
						</li>
						<li>Płatność przy odbiorze: Klient płaci gotówką przy odbiorze zamówienia (jeśli dotyczy).</li>
					</ul>
					<p>4.3. Dane do przelewu bankowego:</p>
					<ul className='list-disc list-inside'>
						<li>Nazwa odbiorcy: {NAZWA_FIRMY}</li>
						<li>Numer konta: {BANK_ACC}</li>
						<li>Tytuł przelewu: [Podajemy wcześniej w email] / [Imię i nazwisko]</li>
					</ul>
					<p>4.4. Zamówienie zostanie przetworzone po zaksięgowaniu płatności. Może to potrwać do 2 dni roboczych.</p>
				</section>

				<section className='mb-6'>
					<h2 className='text-xl font-semibold mb-2'>5. Realizacja usług</h2>
					<p>5.1. Termin realizacji zamówienia jest uzgadniany indywidualnie.</p>
					<p>5.2. Usługodawca dostarcza gotowy produkt w formie elektronicznej na adres e-mail Klienta.</p>
				</section>

				<section className='mb-6'>
					<h2 className='text-xl font-semibold mb-2'>6. Reklamacje i zwroty</h2>
					<p>6.1. Reklamacje można zgłaszać na adres e-mail: [Adres e-mail].</p>
					<p>6.2. Zwroty są możliwe w przypadku niewykonania usługi zgodnie z umową.</p>
				</section>

				<section className='mb-6'>
					<h2 className='text-xl font-semibold mb-2'>7. Odpowiedzialność</h2>
					<p>
						7.1. Usługodawca nie ponosi odpowiedzialności za szkody wynikłe z niewłaściwego korzystania ze strony
						internetowej przez Klienta.
					</p>
					<p>7.2. Usługodawca nie odpowiada za treści zamieszczone przez Klienta na stronie internetowej.</p>
				</section>

				<section className='mb-6'>
					<h2 className='text-xl font-semibold mb-2'>8. Ochrona danych osobowych</h2>
					<p>
						8.1. Dane osobowe Klientów są przetwarzane zgodnie z Polityką Prywatności dostępną na stronie internetowej
						Usługodawcy.
					</p>
				</section>

				<section>
					<h2 className='text-xl font-semibold mb-2'>9. Postanowienia końcowe</h2>
					<p>9.1. Usługodawca zastrzega sobie prawo do zmiany niniejszego regulaminu.</p>
					<p>9.2. Wszelkie spory będą rozstrzygane przez sąd właściwy dla siedziby Usługodawcy.</p>
				</section>
			</div>
		</div>
	)
}

export default Terms
