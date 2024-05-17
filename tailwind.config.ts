import type { Config } from 'tailwindcss';

const tailwindConfig: Config = {
	content: [
		'./*.{theme,inc}',
		'./templates/**/*.twig',
		'./src/**/*.{js,jsx,ts,tsx,css,pcss}',
	],
	theme: {
		extend: {},
	},
	plugins: [],
} satisfies Config;

export default tailwindConfig;
