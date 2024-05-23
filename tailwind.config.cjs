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
				secondText: '#3a4048',
				thirdText: '#5F7182',
				blueMain: '#0697d6',
				pink: '#E182BD',
				borderForm: '#B6BEC6',
				radioCol: '#596B7E',

				firstViolet: '#E36FFB',
				secondViolet: '#B351FC',

				firstBlue: '#73D6FD',
				secondBlue: '#3D9EFE',

				firstRed: '#FE70AA',
				secondRed: '#FC4E67',

				firstGreen: '#11998E',
				secondGreen: '#38EF7D',

				rightFade: '#A37EE7',
				leftFade: '#ED71AF',
			},
		},
	},
	plugins: [],
}
