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
        Gray:"#F0F0F0",
        SecondaryRed:"#DB4444"
      },
      screens:{
        xs:'350px',
        mtl:'1150px',
        xlarge:'1250px'
      },
      width:{
        '104':'405px'
      }
    },
  },
  plugins: [],
} satisfies Config;
