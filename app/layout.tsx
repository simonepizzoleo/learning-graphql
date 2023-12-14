'use client';

import { Figtree } from 'next/font/google';
import { GRAPHQL_CLIENT } from './graphql-client';
import { Provider } from 'urql';

// Fonts
const FIGTREE_FONT = Figtree({
	subsets: ['latin'],
	display: 'swap',
	preload: true,
	variable: '--font-primary'
});

// Component
export default function RootLayout({ children }: { children: React.ReactNode }) {

	return (

		<html
			lang="en"
			className={ FIGTREE_FONT.variable }
		>

			{ /* GraphQL Client */ }
			<Provider value={ GRAPHQL_CLIENT }>

				{ /* Body */ }
				<body> { children } </body>

			</Provider>

		</html>

	);
	
}