'use client';

import './scss/app.scss';
import { Provider } from 'urql';
import { GRAPHQL_CLIENT } from './graphql-client';
import dynamic from 'next/dynamic';

// Lazy imports
const SecondExample = dynamic(() => import("@/examples/second-example"), {
	loading: () => <p>Loading...</p>
});

// Component
export default function Home() {
	
	return (

		<Provider value={ GRAPHQL_CLIENT }>

			{ /* Example */ }
			<SecondExample code="EU" />

		</Provider>

	);

}