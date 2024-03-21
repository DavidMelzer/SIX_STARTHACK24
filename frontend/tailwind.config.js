/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'c-white': '#fefffe',
                'c-black': '#010100',
                'c-gray': '#797878',
                'raisin': '#242425'
            },
            fontFamily: {
                'mulish': ['Mulish', 'sans-serif'],
                'open-sans': ['Open Sans', 'sans-serif'],
            },
            boxShadow: {
                'top-bottom': '0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            },
        },
    },
    plugins: [],
}