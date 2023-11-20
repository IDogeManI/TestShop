import { Product } from '../../../../core/models/product.model';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  public productsInCart$: Observable<Product[]> =
    this.cartService.getCartProducts$();

  public amount$: Observable<number> = this.cartService.getAmount$();
  constructor(private cartService: CartService) {}
}
