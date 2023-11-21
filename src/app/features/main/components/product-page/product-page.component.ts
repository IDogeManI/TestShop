import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Product } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent {
  public readonly product$: Observable<Product> =
    this.activatedRoute.paramMap.pipe(
      switchMap((params) => {
        const id = params.get('id');
        return this.productService.getProductById$(id);
      })
    );
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly productService: ProductService
  ) {}
}
