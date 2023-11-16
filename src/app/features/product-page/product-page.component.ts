import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, switchMap } from 'rxjs';
import { Product } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent {
  public product$: Observable<Product> = this.activatedRoute.paramMap.pipe(
    switchMap((params) => {
      const id = params.get('id');
      if (id == null) {
        return this.productService.getProductById('1');
      }
      return this.productService.getProductById(id);
    })
  );
  constructor(
    public activatedRoute: ActivatedRoute,
    private readonly productService: ProductService
  ) {}
}
