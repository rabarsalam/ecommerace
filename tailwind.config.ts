import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Gray:"#F5F5F5"
      },
      screens:{
        xs:'350px',
        mtl:'1150px',
        xlarge:'1250px'
      }
    },
  },
  plugins: [],
} satisfies Config;
