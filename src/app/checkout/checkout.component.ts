import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Product, TAX_RATE, DUTY_RATE, ROUNDING_MULT} from './../store/product.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private store:Store<any>) { }

  basket: Array<any>;
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
  }

  withTax(productId: number): string {
    let cost = 0;
    let product = this.basket.filter(p => p.id == productId)[0];
    if (!product.isCandyPopcornOrCoffee) {
      cost += Math.ceil((product.listed * TAX_RATE)*ROUNDING_MULT)/ROUNDING_MULT;
    }
    if (product.isImported) {
      cost += Math.ceil((product.listed * DUTY_RATE)*ROUNDING_MULT)/ROUNDING_MULT;
    }
    cost += product.listed;
    return cost.toFixed(2);
  }

}
