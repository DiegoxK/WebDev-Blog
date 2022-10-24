/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ABA2FA",
        secondary: "#DAF163",
        dark: "hsl(249deg 15% 23%)",
        "dark-800": "hsl(247deg 15% 18%)",
        translucent: "hsla(0,0%,100%,.25)",
      },
    },
  },
  plugins: [],
};
