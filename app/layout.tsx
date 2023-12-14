import type { Metadata } from 'next';
import { GRAPHQL_CLIENT } from './graphql-client';
import { Provider } from 'urql';

// Metadata
export const metadata: Metadata = {
	title: 'Learning GraphQL',
	description: 'Deep-diving into GraphQL and sharing what I learn within this repository!',
};

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