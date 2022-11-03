/** @type {import('tailwindcss').Config} */
module.exports = {
	purge: ["./index.html", "./src/**/*.{vue,js}"],
	mode: "jit",
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		screens: {
			lg: "960px",
			xl: "1248px",
		},
		extend: {
			colors: {
				gold: "#ffd700",
				background: "141414",
			},
		},
	},
	plugins: [],
};
