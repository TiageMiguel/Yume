/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./*.{theme,inc}',
		'./templates/**/*.twig',
		'./src/**/*.{js,jsx,ts,tsx,css,pcss}',
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
