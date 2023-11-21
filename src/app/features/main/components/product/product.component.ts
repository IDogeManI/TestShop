import { Product } from '../../../../core/models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product!: Product;
  public currentUrl: string = this.router.url;
  constructor(
    private router: Router,
    public activatedRoute: ActivatedRoute,
    private cartService: CartService
  ) {}
  public addToCart(): void {
    this.cartService.addProductToCart(this.product);
  }
}
