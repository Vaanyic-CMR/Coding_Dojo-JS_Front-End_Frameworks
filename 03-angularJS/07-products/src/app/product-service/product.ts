export class Product {
    name: string
    desc: string
    price: number
    quantity: number

    created_at: Date
    updated_at: Date

    constructor( data:any ) {
        this.name = data.name
        this.desc = data.desc
        this.price = data.price
        this.quantity = data.quantity

        this.created_at = new Date()
        this.updated_at = new Date()
    }
}
