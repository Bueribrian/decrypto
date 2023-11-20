export interface Currency {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    market_cap: number;
    market_cap_rank: number;
    fully_diluted_valuation: number;
    total_volume: number;
    high_24h: number;
    low_24h: number;
    price_change_24h: number;
    price_change_percentage_24h: number;
    market_cap_change_24h: number;
    market_cap_change_percentage_24h: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    ath: number;
    ath_change_percentage: number;
    ath_date: string;
    atl: number;
    atl_change_percentage: number;
    atl_date: string;
    roi: null;
    last_updated: string;
    price_change_percentage_1h_in_currency: number;
}

export interface CurrencyMarketParams {
    fromCurrency: string,
    per_page?: number,
    page?: number,
    price_change_percentage?: '1h' | '24h' | '7d' | '14d' | '30d' | '200d' | '1y'
}

export interface MarketChartParams {
    id: string,
    vs_currency: string,
    days: number,
    interval?: 'daily',
    precision?: number
}

export interface MarketChartResponse {
    market_caps: [string[]],
    prices: [string[]],
    total_volumes: [string[]]
}