export interface IrandomCard{
    id: number,
    name: string,
    desc: string,
    card_images: Array<{
        image_url: string,
        image_url_small: string,
    }>
}

export interface Icard{
    name: string,
    type: string,
    desc: string,
    level: number,
    card_images: Array<{
        image_url: string,
        image_url_small: string
    }>,
    card_prices: Array<{
        amazon_price: string,
        ebay_price: string
    }>
}