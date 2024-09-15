/** @type {import('tailwindcss').Config} */
import colors, { black } from 'tailwindcss/colors'
// import 'tailwindcss-animate'

export default {
	content: ['./index.html', './pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
	prefix: '',
	theme: {
		// ----------- Here we add custom style --------//
		/** 1- Responsive design */
		container: {
			center: true,
			padding: {
				DEFAULT: '0.5rem',
				sm: '0.3',
				md: '1rem',
				lg: '1rem',
				xl: '1rem',
				'2xl': '3rem',
				'3xl': '3rem',
				'4xl': '4rem'
			},

			screens: {
				xs: '360px',
				sm: '575px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1440px',
				'3xl': '1680px',
				'4xl': '1920px'
			}
		},

		extend: {
			/** 2- Custom color palette */
			colors: {
				primary: {
					50: '#fcf3f6',
					100: '#fbe8f0',
					200: '#f9d2e1',
					300: '#f4adc8',
					400: '#ef94b4',
					500: '#e15381',
					600: '#cf335d',
					700: '#b32346',
					800: '#94203b',
					900: '#7c1f34'
				},
				// 'persian-red'
				secondary: {
					50: '#f0f8ff',
					100: '#e0f0fe',
					200: '#bae2fd',
					300: '#7ccbfd',
					400: '#37b1f9',
					500: '#0d97ea',
					600: '#016fb9',
					700: '#025fa2',
					800: '#065186',
					900: '#0c446e'
				},
				// Defaults colors
				white: '#FFFFFF',
				black: '#1f1f1f',
				slate: colors.slate,
				gray: colors.gray,

				neutral: colors.neutral,
				red: colors.red,
				green: colors.green,
				transparent: 'transparent',

				// Text Colour Themes
				heading: colors.black,
				paragraph: colors.gray[600],
				label: colors.black,
				placeholder: colors.gray[400],

				// Background Colour Themes
				table: colors.gray[900],
				background: colors.gray[100],

				//Miscellaneous Color Themes
				border: colors.gray[200],
				'input-border': colors.gray[300],
				icon: colors.gray[500]
			},

			/** 3- Typography */
			fontWeight: {
				thin: '100',
				hairline: '100',
				extralight: '200',
				light: '300',
				normal: '400',
				medium: '500',
				semibold: '600',
				bold: '700',
				extrabold: '800',
				black: '900'
			},

			fontSize: {
				// Default Sizes.
				xs: ['0.62rem', { lineHeight: '1rem' }],
				sm: ['0.875rem', { lineHeight: '1.25rem' }],
				md: ['1rem', { lineHeight: '1.5rem' }],
				lg: ['1.125rem', { lineHeight: '1.75rem' }],
				xl: ['1.25rem', { lineHeight: '1.75rem' }],
				'2xl': ['1.5rem', { lineHeight: '2rem' }],
				'3xl': ['1.875rem', { lineHeight: '2.25rem' }],
				'4xl': ['2.25rem', { lineHeight: '2.5rem' }],
				'5xl': ['3rem', { lineHeight: '1' }],
				'6xl': ['3.75rem', { lineHeight: '1' }],
				'7xl': ['4.5rem', { lineHeight: '1' }],
				'8xl': ['6rem', { lineHeight: '1' }],
				'9xl': ['8rem', { lineHeight: '1' }],

				// Custom Styles

				//Headings
				h1: ['4rem', { lineHeight: '5rem', letterSpacing: '0.0375rem', fontWeight: '700' }],
				h2: ['3rem', { lineHeight: '2rem', letterSpacing: '0.035rem', fontWeight: '700' }],
				h3: ['2.5rem', { lineHeight: '3.5rem', letterSpacing: '0.05rem', fontWeight: '700' }],
				h4: ['2rem', { lineHeight: '2.75rem', letterSpacing: '0rem', fontWeight: '700' }],
				h5: ['1.5rem', { lineHeight: '2.5rem', letterSpacing: '0rem', fontWeight: '600' }],
				h6: ['1.25rem', { lineHeight: '2rem', letterSpacing: '0rem', fontWeight: '600' }],

				// Paragraph
				paragraph: ['1.25rem', { lineHeight: '2rem', letterSpacing: '0rem', fontWeight: '500' }],

				// Div
				div: ['1rem', { lineHeight: '1.5rem', letterSpacing: '0rem', fontWeight: '400' }],
				span: ['0.75rem', { lineHeight: '1.5rem', letterSpacing: '0rem', fontWeight: '400' }]
			},

			height: {
				'calc-full-nav_height': 'calc(100vh - 56px)', // Example for a custom height utility
				'calc-full-mobile-nav': 'calc(100vh - 55px);'
			}
		}
	},
	plugins: []
}
