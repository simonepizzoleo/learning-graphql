'use client';

import { GRAPHQL_CLIENT } from './graphql-client';
import { Provider } from 'urql';

// Component
export default function RootLayout({ children }: { children: React.ReactNode }) {

	return (

		<html lang="en">

			{ /* GraphQL Client */ }
			<Provider value={ GRAPHQL_CLIENT }>

				{ /* Body */ }
				<body> { children } </body>

			</Provider>

		</html>

	);
	
}