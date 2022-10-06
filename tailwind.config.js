/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/components/Main_Page/**/*.{js,ts,jsx,tsx}",
    "./src/components/Navbar/**/*.{js,ts,jsx,tsx}",
    "./src/components/Footer/**/*.{js,ts,jsx,tsx}",
],
  theme: {
   extend: {},
    sm: '600px',
    md:'768px',
    tg:'1024px',
    xl: '1200px',
  '2xl':'1530px',
  },
  plugins: [],
}
