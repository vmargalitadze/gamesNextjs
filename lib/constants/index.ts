export const APP_NAME= process.env.NEXT_PUBLIC_APP_NAME || 'Games Store'
export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000';

  export const LATEST_PRODUCT_LIMIT = Number(process.env.PRODUCTS_LIMIT) || 4