import Environment from "./environment.model";

export const environment: Environment = {
    environment: 'prod',
    services: {
        coingecko: {
            url: "https://api.coingecko.com/api/v3/",
        },
    }
}