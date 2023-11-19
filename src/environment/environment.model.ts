type Services = 'coinapi' | 'coingecko';

export default interface Environment {
    readonly services: {
        [key in Services]: {
            url: string,
            token?: string
        }
    };
    readonly environment: 'dev' | 'prod' | 'demo';
}