import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public productsInCart: BehaviorSubject<Product[]> = new BehaviorSubject(
    new Array()
  );
  constructor() {}
  public addProductToCart(productToCart: Product) {
    this.productsInCart.value.push(productToCart);
    this.productsInCart.next(this.productsInCart.value);
  }
  public deleteProductFromCart(productFromCart: Product) {
    this.productsInCart.value.splice(
      this.productsInCart.value.indexOf(productFromCart),
      1
    );
    this.productsInCart.next(this.productsInCart.value);
  }
}
