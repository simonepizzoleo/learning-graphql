'use client';

import './scss/app.scss';
import { Provider } from 'urql';
import { GRAPHQL_CLIENT } from './graphql-client';
import dynamic from 'next/dynamic';

// Lazy imports
const FirstExample = dynamic(() => import("@/examples/first-example"), {
	loading: () => <p>Loading...</p>
});

// Component
export default function Home() {
	
	return (

		<Provider value={ GRAPHQL_CLIENT }>

			{ /* Example */ }
			<FirstExample />

		</Provider>

	);

}