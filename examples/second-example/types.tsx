import { ICountry } from "../first-example/types";

// Continent
export interface IContinent {
    name: string;
    code: string;
    countries: ICountry[]
}