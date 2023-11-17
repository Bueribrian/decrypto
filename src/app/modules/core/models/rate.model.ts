export interface Rate {
    asset_id_quote: string
    rate: number,
    time: Date
}

export interface ExchangeRatesResponse {
    asset_id_base: string;
    rates: Rate[]
}

export interface ExchangeRatesParams {
    base_asset: string,
    filter_asset?: string[],
    time?: Date
}