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
    },
  },
  plugins: [],
}

