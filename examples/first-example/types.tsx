// Country
export interface ICountry {
    name: string,
    capital: string,
    currency: string,
    languages: ILanguage[],
}

// Language
export interface ILanguage {
    name: string,
    code: string
}