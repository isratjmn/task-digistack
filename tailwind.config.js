/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        custom: '58px'
      }
    }
  },
  plugins: [require('daisyui')]
}
