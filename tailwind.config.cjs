/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-1": "hsl(162, 61%, 89%)",
        "primary-2": "hsl(162, 60%, 78%)",
        "primary-3": "hsl(162, 61%, 67%)",
        "primary-4": "hsl(162, 61%, 57%)",
        /* primary/main color */
        "primary-5": "hsl(162, 73%, 46%)",
        /* lighter shades of primary color */
        "primary-6": "#1aa179",
        "primary-7": "#13795b",
        "primary-8": "#0d503c",
        "primary-9": "#06281e",
        /* darkest grey - used for headings */
        "grey-1": "hsl(212, 33%, 89%)",
        "grey-2": "hsl(210, 31%, 80%)",
        "grey-3": "hsl(211, 27%, 70%)",
        "grey-4": "hsl(209, 23%, 60%)",
        /* grey used for paragraphs */
        "grey-5": "hsl(210, 22%, 49%)",
        "grey-6": "hsl(209, 28%, 39%)",
        "grey-7": "hsl(209, 34%, 30%)",
        "grey-8": "hsl(211, 39%, 23%)",
        "grey-9": "hsl(209, 61%, 16%)",
        white: "#fff",
        "red-dark": "hsl(360, 67%, 44%)",
        "red-light": "hsl(360, 71%, 66%)",
        "green-dark": "hsl(125, 67%, 44%)",
        "green-light": "hsl(125, 71%, 66%)",
        black: "#222",
        pink: "#f28ab2",
      },
    },
  },

  plugins: [],
};
