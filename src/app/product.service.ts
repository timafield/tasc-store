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
    return this.http.get<Product[]>('http://localhost:4000/products');
    //return PRODUCTS;
  }
}
