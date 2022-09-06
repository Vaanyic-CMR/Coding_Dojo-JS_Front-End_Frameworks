import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product-service/product.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    products: any

    constructor(private _productService: ProductService) { }
    ngOnInit(): void { this.products = this._productService }
}
