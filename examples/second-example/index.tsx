'use client';

import { gql, useQuery } from "urql";
import { IContinent } from "./types";
import { ICountry } from "../first-example/types";

// Queries
const CONTINENT_QUERY = gql`

	query($code: ID!) {

		# Continent
		continent(code: $code) {

            # Parameters
            code,
            name

            # Countries
            countries {

                # Parameters
                capital
                currency

            }

        }

	}

`;

// Props
interface SecondExampleProps {
    code?: string;
}

// Component
export default function SecondExample({ code }: SecondExampleProps) {

    // Conditions within which the Query
    // will pause its execution
    const IS_QUERY_PAUSED = !code;

	// Send the GraphQL query
	const [RESULT, RE_EXECUTE_QUERY] = useQuery({

        // The query to send
        query: CONTINENT_QUERY,

        // The variables to pass as
        // body POST arguments
        variables: { code },

        // The conditions for which
        // the query should pause
        pause: IS_QUERY_PAUSED

    });

	const { data: DATA, fetching: FETCHING, error: ERROR } = RESULT;

	if (FETCHING) return <p className="first-example">Loading...</p>;
	if (ERROR) return <p className="first-example">Oops, an error occurred.</p>;

    // Interface which describes
    // the shape of a Continent
    const RETURNED_CONTINENT: IContinent = { ...DATA.continent };
    RETURNED_CONTINENT.countries.length = 10;

	// Render
	return (

		<ul className="first-example">

            { /* Item */ }
            <li
                key={ RETURNED_CONTINENT.name }
                className="first-example__item second-example__item"
            >

                { /* Name */ }
                <h3 className="first-example__item-name second-example__item-name"> 🌆 {` ${ RETURNED_CONTINENT.name} (${ RETURNED_CONTINENT.code }) `} </h3>

                { /* Capital */ }
                <h6 className="first-example__item-capital second-example__item-capital">Most populated countries</h6>

                { /* Countries */ }
                { RETURNED_CONTINENT.countries.map((COUNTRY: ICountry) => {

                    return (

                        <div
                            key={ COUNTRY.capital }
                            className="second-example__item-li"
                        >

                            { /* Name */ }
                            <span> • { COUNTRY.capital } </span>

                            { /* Capital */ }
                            <span> { '(' + (COUNTRY.currency.split(',').join(', ') || 'Unspecified') + ')' } </span>

                        </div>

                    );

                }) }

            </li>

            { /* Heading */ }
            <h1 className="second-example__heading">↩️ Here are some information about the selected Continent</h1>

		</ul>

	);

}