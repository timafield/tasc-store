import { Action } from '@ngrx/store';

export enum BasketActionTypes {
  ADD_PRODUCT = '[Basket] Add Product',
  REMOVE_PRODUCT = '[Basket] Remove Product'
}

export class AddProduct implements Action {
  readonly type = BasketActionTypes.ADD_PRODUCT;
  constructor(public payload: any) { }
}

export class RemoveProduct implements Action {
  readonly type = BasketActionTypes.REMOVE_PRODUCT;
  constructor(public payload: any) { }
}

export type BasketActions = AddProduct | RemoveProduct;
