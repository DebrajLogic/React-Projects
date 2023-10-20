/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url('https://www.shutterstock.com/image-vector/financial-chart-moving-graph-world-260nw-1859952748.jpg')",
      },
    },
  },
  plugins: [],
}

