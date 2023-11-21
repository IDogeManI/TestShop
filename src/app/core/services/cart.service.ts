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
  private countOfProductsInCart$: BehaviorSubject<number[]> =
    new BehaviorSubject(new Array());
  constructor() {}
  public getAmount$(): Observable<number> {
    let countValue = this.getCountOfProductsInCartValue();
    return this.productsInCart$.pipe(
      switchMap(async (products, i) => {
        let sum = 0;
        sum = products.reduce(
          (prev, current) => (prev += current.price * countValue[i]),
          sum
        );
        return sum;
      })
    );
  }
  public getQuantity$(): Observable<number> {
    return this.countOfProductsInCart$.pipe(
      switchMap(async (countOfProducts) => {
        let sum = 0;
        sum = countOfProducts.reduce((prev, current) => (prev += current), sum);
        return sum;
      })
    );
  }
  public getCartProducts$(): BehaviorSubject<Product[]> {
    return this.productsInCart$;
  }
  public getCountOfProductsInCart$(): BehaviorSubject<number[]> {
    return this.countOfProductsInCart$;
  }
  public getCartProductsValue(): Product[] {
    return this.productsInCart$.value;
  }
  public getCountOfProductsInCartValue(): number[] {
    return this.countOfProductsInCart$.value;
  }
  public nextCartProductsState(state: Product[]): void {
    this.productsInCart$.next(state);
  }
  public nextCountOfProductsInCartState(state: number[]): void {
    this.countOfProductsInCart$.next(state);
  }
  public addProductToCart(productToCart: Product): void {
    let value = this.getCartProductsValue();
    let tmp = value.indexOf(productToCart);
    if (tmp == -1) {
      value.push(productToCart);
      this.nextCartProductsState(value);
      this.getCountOfProductsInCartValue().push(1);
      this.nextCountOfProductsInCartState(this.getCountOfProductsInCartValue());
    } else {
      this.getCountOfProductsInCartValue()[tmp]++;
      this.nextCountOfProductsInCartState(this.getCountOfProductsInCartValue());
    }
  }
  public deleteProductFromCart(productFromCart: Product): void {
    this.getCartProductsValue().splice(
      this.getCartProductsValue().indexOf(productFromCart),
      1
    );
    this.nextCartProductsState(this.getCartProductsValue());
  }
}
