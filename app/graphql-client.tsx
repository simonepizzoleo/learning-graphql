import { Client, cacheExchange, fetchExchange } from 'urql';

// Create a new Client
export const GRAPHQL_CLIENT = new Client({

	// Parameters
	url: 'https://countries.trevorblades.com/graphql',
	exchanges: [cacheExchange, fetchExchange],

	// Options to send during fetch
	fetchOptions: () => {
		
		const TOKEN = 100; // Placeholder value
		
		return {

			// Headers
			headers: {

				// Authorization
				authorization: `Sending ${ TOKEN }` || ''

			}

		};

	}

});