import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductsComponent } from './products/products.component';
import { ProductNewComponent } from './product-new/product-new.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './product-service/product.service';

@NgModule({
    declarations: [
        AppComponent,
        ProductsComponent,
        ProductNewComponent,
        ProductListComponent
    ],
    imports: [
        FormsModule,
        BrowserModule,
        AppRoutingModule,
    ],
    providers: [ProductService],
    bootstrap: [AppComponent]
})
export class AppModule { }
