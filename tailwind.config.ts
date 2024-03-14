import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary':'#FFA500',
        'black-variant':'#1D1D1F',
        'black-variant-dark':"#181818",
        'gray-variant':"#E9E9E9",
        'gray-text':"#626262",
        'gray-variant-dark':"#484848",
        'bg-gray': "#F7F7FB",
      },
      fontFamily: {
        mont: ['var(--font-montserrat)'],
        inter: ['var(--font-inter)'],
      },
      backgroundImage: {
        'client-hero' : "url('/public/images/cover.jpg')"
      },
      boxShadow: {
        '4xl': 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
      }
    },
  },
  plugins: [],
};
export default config;
