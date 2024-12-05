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

    // daisyui: {
    //   themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    //   darkTheme: "dark", // name of one of the included themes for dark mode
    //   base: true, // applies background color and foreground color for root element by default
    //   styled: true, // include daisyUI colors and design decisions for all components
    //   utils: true, // adds responsive and modifier utility classes
    //   prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    //   logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    //   themeRoot: ":root", // The element that receives theme color CSS variables
    // },
    variants: {
      extend: {
        cursor: ['hover'],
        animation: ['motion-reduce'],
      },
    },
  },
  plugins: [
    // require('daisyui'),
  ],
  darkMode: 'class',
}

