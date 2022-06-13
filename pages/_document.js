import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html>
			<Head>
				<link rel='preload' href='/fonts/QARVIC.otf' as='font' type='font/otf' crossOrigin='anonymous' />
				<link rel='preload' href='/fonts/QARVICBold.otf' as='font' type='font/otf' crossOrigin='anonymous' />
				<link rel='preload' href='/fonts/QARVICItalic.otf' as='font' type='font/otf' crossOrigin='anonymous' />
			</Head>

			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
