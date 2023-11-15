import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit, OnDestroy {
  public product: Product = {
    id: '',
    category: '',
    description: '',
    image: '',
    price: 0,
    rating: { count: 0, rate: 0 },
    title: '',
  };
  private queryParamSubscription: Subscription = new Subscription();
  private productSubscription: Subscription = new Subscription();
  constructor(
    public activatedRoute: ActivatedRoute,
    private readonly productService: ProductService
  ) {}
  async ngOnInit(): Promise<void> {
    this.queryParamSubscription = this.activatedRoute.queryParams.subscribe({
      next: (params) => {
        let productId: string = params['productId'];
        if (productId != undefined) {
          this.productSubscription = this.productService
            .getProductById(productId)
            .subscribe((res) => {
              this.product = res;
            });
        }
      },
      error: (err) => {
        console.log(err.Message);
      },
    });
  }

  ngOnDestroy(): void {
    this.productSubscription.unsubscribe();
    this.queryParamSubscription.unsubscribe();
  }
}
