export const scrollToSection = (idMobile, idDesktop = idMobile) => {
	const element = window.innerWidth >= 1024 ? document.getElementById(idDesktop) : document.getElementById(idMobile)
	if (element) {
		const navBarHeight = document.querySelector('nav').offsetHeight
		const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
		const offsetPosition = elementPosition - navBarHeight

		window.scrollTo({
			top: offsetPosition,
			behavior: 'smooth',
		})
	}
}
