import { Figtree } from 'next/font/google';
import { Metadata } from 'next';

export const metadata: Metadata = {

	title: {
		template: "%s • Learning GraphQL",
		default: "Learning GraphQL"
	},

	description: "Deep-diving into GraphQL and sharing what I learn within this repository!"
	
};

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

			{ /* Body */ }
			<body> { children } </body>

		</html>

	);
	
}