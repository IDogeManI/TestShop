import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public productsInCart: BehaviorSubject<Product[]> = new BehaviorSubject(
    new Array()
  );
  constructor() {}
  public getAmount$(): Observable<number> {
    return this.productsInCart.pipe(
      switchMap(async (products) => {
        let sum = 0;
        products.forEach((element) => {
          sum += element.price;
        });
        return sum;
      })
    );
  }
  public getQuantity$(): Observable<number> {
    return this.productsInCart.pipe(
      switchMap(async (products) => products.length)
    );
  }
  public addProductToCart(productToCart: Product): void {
    this.productsInCart.value.push(productToCart);
    this.productsInCart.next(this.productsInCart.value);
  }
  public deleteProductFromCart(productFromCart: Product): void {
    this.productsInCart.value.splice(
      this.productsInCart.value.indexOf(productFromCart),
      1
    );
    this.productsInCart.next(this.productsInCart.value);
  }
}
