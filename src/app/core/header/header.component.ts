import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, switchMap, BehaviorSubject } from 'rxjs';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public quantity$: Observable<Product[]> = this.cartService.productsInCart;
  constructor(private readonly cartService: CartService) {}
}
