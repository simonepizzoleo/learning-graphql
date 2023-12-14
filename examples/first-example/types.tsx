// Country
export interface TCountry {
    name: string,
    capital: string,
    languages: TLanguage[]
}

// Language
export interface TLanguage {
    name: string,
    code: string
}