import { Link } from 'react-router-dom'

export default function Privacy() {
	return (
		<div className='bg-customGray py-52'>
			<div className='max-w-4xl mx-auto p-6 bg-white [box-shadow:_0px_4px_33px_rgb(0_0_0_/_25%)] rounded-lg text-black relative'>
				<Link to='/' className='text-blueMain absolute right-0 -top-10 font-medium text-lg '>
					Wróć do strony głównej
				</Link>
				<h2 className='text-2xl font-bold mb-6'>Polityka prywatności eMarika.pl</h2>

				<section className='mb-6'>
					<h2 className='text-xl font-semibold mb-2'>1. Informacje ogólne</h2>
					<p>1.1. Niniejsza polityka dotyczy Serwisu WWW, funkcjonującego pod adresem url: emarika.pl.</p>
					<p>1.2. Operatorami serwisu oraz Administratorami danych osobowych jest: Paweł Drużba</p>
					<p>1.3. Adres kontaktowy poczty elektronicznej operatorów: patryksulich42@gmail.com i rafaldruzba@op.pl</p>
					<p>
						1.4. Operator jest Administratorem Twoich danych osobowych w odniesieniu do danych podanych dobrowolnie w
						Serwisie.
					</p>
					<p>1.5. Serwis wykorzystuje dane osobowe w następujących celach:</p>
					<div className='ml-6'>
						<p> a) Obsługa zapytań przez formularz</p>
						<p> b) Realizacja zamówionych usług</p>
						<p> c) Prezentacja oferty lub informacji</p>
					</div>
					<p>
						1.6. Serwis realizuje funkcje pozyskiwania informacji o użytkownikach i ich zachowaniu w następujący sposób:
					</p>
					<div className='ml-6'>
						<p>
							a) Poprzez dobrowolnie wprowadzone w formularzach dane, które zostają wprowadzone do systemów Operatora.
						</p>
						{/* <p>
							{' '}
							b) Poprzez zapisywanie w urządzeniach końcowych plików cookie
							(tzw. „ciasteczka”).
						</p> */}
					</div>
				</section>

				<section className='mb-6'>
					<h2 className='text-xl font-semibold mb-2'>2. Wybrane metody ochrony danych stosowane przez Operatora</h2>
					<p>
						2.1. Dane osobowe przechowywane w bazie danych są zaszyfrowane w taki sposób, że jedynie posiadający
						Operator klucz może je odczytać. Dzięki temu dane są chronione na wypadek wykradzenia bazy danych z serwera.
					</p>
					<p>
						2.2. Istotnym elementem ochrony danych jest regularna aktualizacja wszelkiego oprogramowania,
						wykorzystywanego przez Operatora do przetwarzania danych osobowych, co w szczególności oznacza regularne
						aktualizacje komponentów programistycznych.
					</p>
				</section>

				<section className='mb-6'>
					<h2 className='text-xl font-semibold mb-2'>3. Hosting</h2>
					<p>3.1. Serwis jest hostowany (technicznie utrzymywany) na serwerach operatora: Hostinger</p>
					<p>
						3.2. Firma hostingowa w celu zapewnienia niezawodności technicznej prowadzi logi na poziomie serwera.
						Zapisowi mogą podlegać:
					</p>
					<div className='ml-6'>
						<p>a) zasoby określone identyfikatorem URL (adresy żądanych zasobów – stron, plików),</p>
						<p> b) czas nadejścia zapytania</p>
						<p> c) czas wysłania odpowiedzi</p>
						<p> d) nazwę stacji klienta – identyfikacja realizowana przez protokół HTTP</p>
						<p> e) informacje o błędach jakie nastąpiły przy realizacji transakcji HTTP</p>
						<p>
							{' '}
							f) adres URL strony poprzednio odwiedzanej przez użytkownika (referer link) – w przypadku gdy przejście do
							Serwisu nastąpiło przez odnośnik
						</p>
						<p> g) informacje o przeglądarce użytkownika</p>
						<p> h) informacje o adresie IP</p>
						<p>
							{' '}
							i) informacje diagnostyczne związane z procesem samodzielnego zamawiania usług poprzez rejestratory na
							stronie
						</p>
						<p>
							{' '}
							j) informacje związane z obsługą poczty elektronicznej kierowanej do Operatora oraz wysyłanej przez
							Operatora
						</p>
					</div>
				</section>

				<section className='mb-6'>
					<h2 className='text-xl font-semibold mb-2'>
						4. Twoje prawa i dodatkowe informacje o sposobie wykorzystania danych
					</h2>
					<p>
						4.1. W niektórych sytuacjach Administrator ma prawo przekazywać Twoje dane osobowe innym odbiorcom, jeśli
						będzie to niezbędne do wykonania zawartej z Tobą umowy lub do zrealizowania obowiązków ciążących na
						Administratorze. Dotyczy to takich grup odbiorców:
					</p>
					<div className='ml-6'>
						<p>a) firma hostingowa na zasadzie powierzenia</p>
						<p>
							{' '}
							b) poprzez wyświetlenie twojej witryny, nazwy firmy, ewentualnie krótkiego opisu na stronie internetowej
							eMarika.pl w celach promocyjnych.
						</p>
					</div>
					<p>
						4.2. Twoje dane osobowe przetwarzane przez Administratora nie dłużej, niż jest to konieczne do wykonania
						związanych z nimi czynności określonych osobnymi przepisami (np. o prowadzeniu rachunkowości). W odniesieniu
						do danych marketingowych dane nie będą przetwarzane dłużej niż przez 3 lata.
					</p>
					<p>4.3. Przysługuje Ci prawo żądania od Administratora:</p>
					<div className='ml-6'>
						<p>a) dostępu do danych osobowych Ciebie dotyczących</p>
						<p>b) ich sprostowania</p>
						<p>c) ich usunięcia</p>
						<p>d) ograniczenia przetwarzania</p>
						<p>e) oraz przenoszenia danych</p>
					</div>
					<p>
						4.4. Przysługuje Ci prawo do złożenia sprzeciwu w zakresie przetwarzania wskazanego w pkt 3.2 wobec
						przetwarzania danych osobowych w celu wykonania prawnie uzasadnionych interesów realizowanych przez
						Administratora, w tym profilowania, przy czym prawo sprzeciwu nie będzie mogło być wykonane w przypadku
						istnienia ważnych prawnie uzasadnionych podstaw do przetwarzania, nadrzędnych wobec Ciebie interesów, praw i
						wolności, w szczególności ustalenia, dochodzenia lub obrony roszczeń.
					</p>
					<p>
						4.5. Na działania Administratora przysługuje skarga do Prezesa Urzędu Ochrony Danych Osobowych, ul. Stawki
						2, 00-193 Warszawa.
					</p>
					<p>4.6. Podanie danych osobowych jest dobrowolne, lecz niezbędne do obsługi Serwisu.</p>
					<p>
						4.7. W stosunku do Ciebie mogą być podejmowane czynności polegające na zautomatyzowanym podejmowaniu
						decyzji, w tym profilowaniu w celu świadczenia usług w ramach zawartej umowy oraz w celu prowadzenia przez
						Administratora marketingu bezpośredniego.
					</p>
					<p>
						4.8. Dane osobowe nie są przekazywane od krajów trzecich w rozumieniu przepisów o ochronie danych osobowych.
						Oznacza to, że nie przesyłamy ich poza teren Unii Europejskiej.
					</p>
				</section>

				<section className='mb-6'>
					<h2 className='text-xl font-semibold mb-2'>5. Informacje w formularzach</h2>
					<p>
						5.1. Serwis zbiera informacje podane dobrowolnie przez użytkownika, w tym dane osobowe, o ile zostaną one
						podane.
					</p>
					<p>5.2. Serwis może zapisać informacje o parametrach połączenia (oznaczenie czasu, adres IP).</p>
					<p>
						5.3. Serwis, w niektórych wypadkach, może zapisać informację ułatwiającą powiązanie danych w formularzu z
						adresem e-mail użytkownika wypełniającego formularz. W takim wypadku adres e-mail użytkownika pojawia się
						wewnątrz adresu url strony zawierającej formularz.
					</p>
					<p>
						5.4. Dane podane w formularzu są przetwarzane w celu wynikającym z funkcji konkretnego formularza, np. w
						celu dokonania procesu obsługi zgłoszenia serwisowego lub kontaktu handlowego, rejestracji usług itp.
						Każdorazowo kontekst i opis formularza w czytelny sposób informuje, do czego on służy.
					</p>
				</section>

				<section className='mb-6'>
					<h2 className='text-xl font-semibold mb-2'>6. Logi Administratora</h2>
					<p>
						6.1. Informacje zachowaniu użytkowników w serwisie mogą podlegać logowaniu. Dane te są wykorzystywane w celu
						administrowania serwisem.
					</p>
				</section>
			</div>
		</div>
	)
}
