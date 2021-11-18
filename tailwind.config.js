module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'media', // or 'media' or 'class'
	mode: 'jit',
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
		extend: { contrast: ['hover', 'focus'] },
	},
	plugins: [require('@tailwindcss/aspect-ratio')],
};
