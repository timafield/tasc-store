import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';

import { Product } from '../store/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: [],
  providers: [
    ProductService
  ]

})
export class ProductsComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService) {
    productService.getProducts().subscribe((p => this.products = p));
  }

  ngOnInit() {
  }

}
