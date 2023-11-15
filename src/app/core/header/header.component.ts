import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public numOfProducts: number = 0;
  constructor(public cartService: CartService) {}
  private cartServiceSubscription: Subscription = new Subscription();
  async ngOnInit(): Promise<void> {
    this.cartServiceSubscription = this.cartService.productsInCart.subscribe(
      (res) => (this.numOfProducts = res.length)
    );
  }
  ngOnDestroy(): void {
    this.cartServiceSubscription.unsubscribe();
  }
}
