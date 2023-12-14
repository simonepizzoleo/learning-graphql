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

	if (FETCHING) return <p className="first-example">Loading...</p>;
	if (ERROR) return <p className="first-example">Oops, an error occurred.</p>;

	// Reduce the amount of information
	if (DATA) DATA.countries.length = 10;

	// Render
	return (

		<ul className="first-example">

			{ /* Loop all Countries */ }
			{ DATA?.countries?.map((COUNTRY: TCountry) => {

				return (

					<li
						key={ COUNTRY.name }
						className="first-example__item"
					>

						{ /* Name */ }
						<h3 className="first-example__item-name"> 🌆 { COUNTRY.name } </h3>

						{ /* Capital */ }
						<h6 className="first-example__item-capital"> { COUNTRY.capital || 'Unspecified' } </h6>

					</li>
				
				);

			}) }

		</ul>

	);

}