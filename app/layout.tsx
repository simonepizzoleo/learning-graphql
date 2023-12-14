import type { Metadata } from 'next';

// Metadata
export const metadata: Metadata = {
	title: 'Learning GraphQL',
	description: 'Deep-diving into GraphQL and sharing what I learn within this repository!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

	return (

		<html lang="en">

			{ /* Body */ }
			<body> { children } </body>

		</html>

	);
	
}