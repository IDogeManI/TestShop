import { Product } from '../../../core/models/product.model';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product: Product = {
    id: '',
    category: '',
    description: '',
    image: '',
    price: 0,
    rating: { count: 0, rate: 0 },
    title: '',
  };
  public currentUrl: string = this.router.url;
  constructor(
    private router: Router,
    public activatedRoute: ActivatedRoute,
    private cartService: CartService
  ) {}
  public addToCart() {
    this.cartService.addProductToCart(this.product);
    let a = this.router.url;
  }

  public deleteFromCart() {
    this.cartService.deleteProductFromCart(this.product);
  }
}
