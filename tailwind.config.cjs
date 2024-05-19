/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				customGray: '#F8F8F8',
				mainText: '#0A2540',
				borderCol: '#8593A2',
				buttonText: '#B87BD8',
				secondText: '#8997A6',
				thirdText: '#5F7182',

				firstViolet: '#E36FFB',
				secondViolet: '#B351FC',

				firstBlue: '#73D6FD',
				secondBlue: '#3D9EFE',

				firstRed: '#FE70AA',
				secondRed: '#FC4E67',

				firstGreen: '#C0FE70',
				secondGreen: '#4EFCBD',

				rightFade: '#A37EE7',
				leftFade: '#ED71AF',
			},
		},
	},
	plugins: [],
}
