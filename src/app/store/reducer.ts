import { BasketActionTypes, BasketActions } from './actions';

export let initialState = []

export function reducer(state=initialState, action: BasketActions) {
  switch (action.type) {
    case BasketActionTypes.ADD_PRODUCT: {
      return [...state, action.payload];
    }
    case BasketActionTypes.REMOVE_PRODUCT: {
      let product = action.payload;
      return state.filter((el) => el.id != product.id);
    }
    default: {
      return state;
    }


  }
}
