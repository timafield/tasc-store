import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as Basket from './../store/actions';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styles: []
})
export class BasketComponent implements OnInit {

  basket: Observable<Array<any>>;
  
  constructor(private store:Store<any>) {
    this.basket = this.store.select('basket');
  }

  ngOnInit() { }

  removeFromBasket(product) {
    this.store.dispatch(new Basket.RemoveProduct(product));
  }
}
