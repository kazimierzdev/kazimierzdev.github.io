/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#583fbb',
        'light-primary': '#6953c2',
        'secondary': '#2dc1a4',
        'hover-secondary': '#1f836f',
        'dark-purple': '#302a6b',
        'light-black': '#33475b',
        'light-grey': '#808080',
        'darker': '#1a1a1a'
      }
    },
  },
  plugins: [],
}

