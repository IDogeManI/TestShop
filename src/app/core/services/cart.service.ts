import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private productsInCart$: BehaviorSubject<Product[]> = new BehaviorSubject(
    new Array()
  );
  constructor() {}
  public getAmount$(): Observable<number> {
    return this.productsInCart$.pipe(
      switchMap(async (products) => {
        let sum = 0;
        sum = products.reduce((prev, current) => prev += current.price, sum);
        return sum;
      })
    );
  }
  public getQuantity$(): Observable<number> {
    return this.productsInCart$.pipe(
      switchMap(async (products) => products.length)
    );
  }
  public getCartProducts$(): BehaviorSubject<Product[]> {
    return this.productsInCart$;
  }
  public getCartProductsValue(): Product[] {
    return this.productsInCart$.value;
  }
  public nextCartProductsState(state: Product[]): void {
    this.productsInCart$.next(state);
  }
  public addProductToCart(productToCart: Product): void {
    this.getCartProductsValue().push(productToCart);
    this.nextCartProductsState(this.getCartProductsValue());
  }
  public deleteProductFromCart(productFromCart: Product): void {
    this.getCartProductsValue().splice(
      this.getCartProductsValue().indexOf(productFromCart),
      1
    );
    this.nextCartProductsState(this.getCartProductsValue());
  }
}
