import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import daisyui from "daisyui"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      serif: ["Poppins", "sans-serif"],
    },
    extend: {
      screens: {
        'max-xsm': { 'raw': '(max-width: 368px)' },
        // => @media (max-width: 350px) { ... }

        'max-sm': { 'raw': '(max-width: 768px)' },
        // => @media (max-width: 768px) { ... }

        'max-md': { 'raw': '(max-width: 1024px)' },
        // => @media (max-width: 1024px) { ... }

        'max-lg': { 'raw': '(max-width: 1280px)' },
        // => @media (max-width: 1280px) { ... }

        'max-xl': { 'raw': '(max-width: 1536px)' },
        // => @media (max-width: 1536px) { ... }

        'max-2xl': { 'raw': '(max-width: 3072px)' },
        // => @media (max-width: 3072px) { ... }
      },
    },
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.2xl') },
        'h2': { fontSize: theme('fontSize.xl') },
        'h3': { fontSize: theme('fontSize.lg') },
      })
    }),
    daisyui
  ],
};
export default config;
