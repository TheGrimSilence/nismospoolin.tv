module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			roboto: ['Roboto'],
		},
		container: {
			center: true,
		},
		backgroundImage: {
			nismospoolin: "url('/background.svg')",
		},
		extend: {
			maxWidth: {
				'8xl': '90rem',
			},
			height: {
				hero: '50vh',
			},
			colors: {
				primary: '#422c5a',
				secondary: '#1f0b36',
				accent: '#65c121',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/aspect-ratio')],
};
