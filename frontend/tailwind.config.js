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
        },
    },
    plugins: [],
}