/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				pink: "#FABDCC",
				raisinBlack: "#211A18",
				middleBlueGreen: "#95D4CA",
				linen: "#F5E7DE",
			},
			fontFamily: {
				display: ["QARVIC Bold"],
				body: ["QARVIC"],
				qarvicItalic: ["QARVIC Italic"],
			},
		},
	},
	plugins: [],
};
