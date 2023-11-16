import { Product } from './../../../core/models/product.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, Observable, switchMap, BehaviorSubject } from 'rxjs';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  public productsInCart$: Observable<Product[]> =
    this.cartService.productsInCart;

  public amount$: Observable<number> = this.cartService.productsInCart.pipe(
    switchMap((products) => {
      let sum = 0;
      products.forEach((element) => {
        sum += element.price;
      });
      return new BehaviorSubject(sum);
    })
  );
  constructor(private cartService: CartService) {}
}
