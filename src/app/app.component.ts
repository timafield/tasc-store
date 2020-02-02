import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Product, TAX_RATE, DUTY_RATE, ROUNDING_MULT} from './store/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tasc-store';

  constructor(private store: Store<any>) { }

  basket: Array<Product>;
  totalTax: string = "0.00";
  totalCost: string = "0.00";

  ngOnInit() {
    this.store.select('basket').subscribe(state => {
      this.basket = state;
      let tax = 0, cost = 0;
      for (let p=0; p < this.basket.length; p++) {
        if (!this.basket[p].isCandyPopcornOrCoffee) {
          tax += Math.ceil((this.basket[p].listed * TAX_RATE)*ROUNDING_MULT)/ROUNDING_MULT;
        }
        if (this.basket[p].isImported) {
          tax += Math.ceil((this.basket[p].listed * DUTY_RATE)*ROUNDING_MULT)/ROUNDING_MULT;
        }
        cost += this.basket[p].listed;
      }
      cost += tax;
      this.totalTax = tax.toFixed(2);
      this.totalCost = cost.toFixed(2);
    })
    //  this.basket = this.store.select('basket');
  }
}
