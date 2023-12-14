'use client';

import { gql, useQuery } from "urql";
import { TCountry } from "./types";

// Queries
const CONTINENTS_QUERY = gql`

	query {

		# Countries
		countries {

			# Parameters
			name
			capital

			# Languages
			languages {
			
				# Parameters
				name
				code
				
			}

		}

	}

`;

// Component
export default function FirstExample() {

	// Send the GraphQL query
	const [RESULT, RE_EXECUTE_QUERY] = useQuery({ query: CONTINENTS_QUERY });
	const { data: DATA, fetching: FETCHING, error: ERROR } = RESULT;

	if (FETCHING) return <p>Loading...</p>;
	if (ERROR) return console.error('Oops, an error occurred. ' + ERROR);

	// Reduce the amount of information
	if (DATA) DATA.countries.length = 10;

	// Render
	return (

		<ul>

			{ /* Loop all Countries */ }
			{ DATA?.countries?.map((COUNTRY: TCountry) => {

				return (

					<li key={ COUNTRY.name }>

						{ /* Name */ }
						<h3> { COUNTRY.name } </h3>

						{ /* Capital */ }
						<h6> { COUNTRY.capital } </h6>

					</li>
				
				);

			}) }

		</ul>

	);

}