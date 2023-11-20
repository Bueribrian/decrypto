type Services = 'coingecko';

export default interface Environment {
    readonly environment: 'dev' | 'prod' | 'demo';
    readonly services: {
        [key in Services]: {
            url: string,
            token?: string
        }
    };
}