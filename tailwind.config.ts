import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
			primary: {
				foreground: "var(--primary-foreground)",
			},
			secondary: {
				foreground: "var(--secondary-foreground)",
				background: "var(--secondary-background)",
			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
