import { Product } from './../../../core/models/product.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/core/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, OnDestroy {
  public productsInCart: Product[] = [];
  public sumOfPrices: number = 0;
  constructor(private cartService: CartService) {}
  private cartServiceSubscription: Subscription = new Subscription();
  async ngOnInit(): Promise<void> {
    this.cartServiceSubscription = this.cartService.productsInCart.subscribe(
      (res) => {
        this.productsInCart = res;
        this.setSumOfPrices();
      }
    );
  }
  ngOnDestroy(): void {
    this.cartServiceSubscription.unsubscribe();
  }
  private setSumOfPrices() {
    let sum = 0;
    this.productsInCart.forEach((element) => {
      sum += element.price;
    });
    this.sumOfPrices = sum;
  }
  public deleteFromCart(product: Product) {
    this.cartService.deleteProductFromCart(product);
  }
}
