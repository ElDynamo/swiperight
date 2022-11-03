/** @type {import('tailwindcss').Config} */
module.exports = {
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
				background: "#141414",
			},
		},
	},
	plugins: [],
};
