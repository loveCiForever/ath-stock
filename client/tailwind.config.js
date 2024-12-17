/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {  
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'],
      },

      backgroundColor: {
        'placeholder-bg-color' : '#F6F7F9',
        'orange-button-bg-color' : '#FFA31A',
        'bg-black' : '#1B1B1B'
      },

      textColor: {
        'placeholder-text-color' : '#808080',
        'orange-text-color' : '#FFA31A',
        'text-black': '#1B1B1B'
      }
    },
    screens: {
      'motion-reduce': {'raw': '(prefers-reduced-motion: reduce)'},
    },
    animation: {
      'pulse': 'pulse 8s infinite',
    },
    keyframes: {
      pulse: {
        '0%, 100%': { opacity: '0.5' },
        '50%': { opacity: '1' },
      },
    },

    variants: {
      extend: {
        cursor: ['hover'],
        animation: ['motion-reduce'],
      },
    },
  },
}

