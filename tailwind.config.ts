import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray100: "var(--gray-100)",
        dark100: "var(--dark-100)",
        dark200: "var(--dark-200)",
        dark300: "var(--dark-300)",
        dark400: "var(--dark-400)",
        dark500: "var(--dark-500)",
        purple100: "var(--purple100)",
        purple200: "var(--purple200)",
        white100: "var(--white100)",
      }
    },
  },
  plugins: [],
}
export default config
