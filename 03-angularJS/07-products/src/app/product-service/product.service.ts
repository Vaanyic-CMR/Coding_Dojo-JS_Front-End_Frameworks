import { Injectable } from '@angular/core';

import { Product } from './product';

@Injectable()
export class ProductService {
    products: Array<Product> = [
        new Product({name:"Keyboard", desc:"Corsair", price:129.99, quantity:500}),
        new Product({name:"Mouse", desc:"Corsair", price:59.99, quantity:500}),
        new Product({name:"Keyboard", desc:"Das", price:169.99, quantity:500}),
        new Product({name:"Mouse", desc:"Das", price:89.99, quantity:500}),
    ]

    add( data:any ) { this.products.push( new Product(data) ) }
    remove( idx:number ) { this.products.splice(idx, 1) }
    getAll() { return this.products }

    constructor() {}
}
