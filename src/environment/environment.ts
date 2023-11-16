import Environment from "./environment.model";

export const environment: Environment = {
    environment: 'dev',
    services: {
        coinapi: {
            url: "https://rest.coinapi.io/v1/",
            token: "4C4FF1FD-457B-4D26-9417-06D8C0167BBC"
        }
    }
}