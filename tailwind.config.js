/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', 'sans-serif'",
      },
      colors: {
        primary: '#1CA8CB',
        textColor:"#5A5C5F",
        primaryBg:"#EEFCFD",
        secondaryBg:"#0E323E",
        border:"#5A5C5F",
      },
    },
  },
  plugins: [],
};
