/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mainBG': "url('../public/images/bcnAppBG2.jpg')",
        'secondBG': "url('../public/images/bcnAppBG.jpg')"
      },
      fontFamily: {
        glassAntiqua: ['var(--glassAntiqua-font)'],
        limelight: ['var(--limelight-font)'],
        jost: ['var(--jost-font)']
      },
      color: {
        mainBlack: '#363533'
      }
    },
  },
  plugins: [],
};
