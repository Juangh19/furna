/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				custom: ['Roboto Slab', 'sans-serif'],
			},
			colors: {
				gold: '#5F4F30',
				darkText: '#141414',
			},
		},
	},
	plugins: [],
};
