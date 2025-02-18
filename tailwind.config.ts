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
        DGray:"#F0EEED",
        TGray:'#999999',
        SecondaryRed:"#DB4444",
        LightGreen:''
        
      },
      screens:{
        xs:'350px',
        mtl:'1150px',
        xlarge:'1250px'
      },
      width:{
        '88':'355',
        '104':'405px'
      }
    },
  },
  plugins: [],
} satisfies Config;
