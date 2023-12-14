'use client';

import './scss/app.scss';
import { Provider } from 'urql';
import { GRAPHQL_CLIENT } from './graphql-client';
import FirstExample from "@/examples/first-example";

// Component
export default function Home() {
	
	return (

		<Provider value={ GRAPHQL_CLIENT }>

			{ /* Example */ }
			<FirstExample />

		</Provider>

	);

}