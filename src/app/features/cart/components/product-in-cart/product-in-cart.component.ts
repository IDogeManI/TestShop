import { Product } from '../../../../core/models/product.model';
import { ActivatedRoute, Router} from '@angular/router';
import { Component, Input} from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-product-in-cart',
  templateUrl: './product-in-cart.component.html',
  styleUrls: ['./product-in-cart.component.scss'],
})
export class ProductInCartComponent {
  @Input() product!: Product;
  @Input() count!: number;
  public currentUrl: string = this.router.url;
  constructor(
    private router: Router,
    public activatedRoute: ActivatedRoute,
    private cartService: CartService
  ) {}
  public deleteFromCart(): void {
    this.cartService.deleteProductFromCart(this.product);
  }
}
