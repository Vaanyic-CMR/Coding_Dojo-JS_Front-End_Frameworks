import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

import { ProductService } from '../product-service/product.service';

@Component({
    selector: 'app-product-new',
    templateUrl: './product-new.component.html',
    styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {
    product = { name: "", desc: "", price: "0.0", quantity: "0" }
    products: any

    formSubmit( formData: NgForm ) { this.products.add( formData.form.value ); }

    constructor(private _productService: ProductService) {}
    ngOnInit(): void { this.products = this._productService }
}
