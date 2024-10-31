/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4E89',       // Deep Blue for primary elements
        secondary: '#F5F5F5',     // Soft Gray for background
        accent: '#56A3D9',        // Light Blue for buttons, highlights
        textColor: '#333333',     // Dark Charcoal for text
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // or ['Roboto', 'sans-serif']
      },
      backgroundImage: {
        'hero-pattern': "url('./src/assets/hero.jpg')", // Adjust the path to your image
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'fadeIn': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: { // Removed quotes to make it consistent
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    }, // Added closing bracket for 'extend'
  },
  plugins: [],
}
