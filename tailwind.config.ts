import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {},
	},
	plugins: [
		require('tailwindcss-animate'),
		plugin(({ addUtilities }) => {
			addUtilities({
				'.flex-start': {
					display: 'flex',
					justifyContent: 'flex-start',
					alignItems: 'center',
				},
				'.flex-center': {
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				},
				'.flex-between': {
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				},
				'.flex-end': {
					display: 'flex',
					justifyContent: 'flex-end',
					alignItems: 'center',
				},
				'.grid-auto-300': {
					gridTemplateColumns: 'repeat(auto-fill, minmax(300px,1fr));',
				},
			})
		}),
	],
}
export default config
