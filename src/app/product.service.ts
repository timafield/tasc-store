import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from './store/product.model';
import { Observable } from 'rxjs/Observable';
//import { PRODUCTS } from './store/market'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  products: Product[];

  getProducts(): Observable<Product[]> {
    //const url = 'http://localhost:4000/products'
    const url = 'https://gm9ekge8le.execute-api.us-east-2.amazonaws.com/latest/products'
    return this.http.get<Product[]>(url);
    //return PRODUCTS;
  }
}
