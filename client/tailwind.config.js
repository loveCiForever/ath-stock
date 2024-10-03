/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minWidth: {
        '480': '480px',
        '600': '600px',
        '900': '900px',
        '960': '960px'
      },
      maxWidth: {
        '600': '600px',
        '700': '700px'
      }
    },
    variants: {
      extend: {
        cursor: ['hover'],
      },
    },
  },
  plugins: [],
}

