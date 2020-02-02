export class Product {
  id: number;
  name: string;
  image: string;
  listed: number;
  isCandyPopcornOrCoffee: boolean;
  isImported: boolean;
}

export const TAX_RATE = 0.1;

export const DUTY_RATE = 0.05;

export const ROUNDING_CENTS = 0.05;

export const ROUNDING_MULT = 1 / 0.05; // notice this only works well when the cents are a whole divisor of 1.
