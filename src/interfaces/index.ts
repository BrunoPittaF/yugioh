export interface IrandomCard{
    id: number,
    name: string,
    desc: string,
    card_images: Array<{
        image_url: string,
        image_url_small: string,
    }>
}