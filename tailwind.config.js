module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			roboto: ['Roboto'],
		},

		extend: {
			maxWidth: {
				'8xl': '90rem',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
