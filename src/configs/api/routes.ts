export const BASE_URL = 'https://api.pro.coinbase.com';

export const PRODUCTS_URL = `${BASE_URL}/products`;

export function getProductsStatsUrl(id: string): string {
    return `${BASE_URL}/products/${id}/stats`;
}
