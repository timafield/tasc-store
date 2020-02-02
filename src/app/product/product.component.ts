import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from './../store/market';
import { ProductService } from './../product.service';
import { Product } from './../store/product.model';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as Basket from './../store/actions'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: []
})
export class ProductComponent implements OnInit {

  product: Product;
  products: Product[];

  constructor(private route: ActivatedRoute,
              private store: Store<any>,
              private productService: ProductService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.productService.getProducts().subscribe((product) => {
        let result = product.filter(x => x.id == id);
        if (result.length > 0) {
          this.product = result[0];
        }
      });
      //let result = this.products.filter(p => p.id == id)
    })
  }

  addToBasket(product) {
    this.store.dispatch(new Basket.AddProduct(product));
  }

}
