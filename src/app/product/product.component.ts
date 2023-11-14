import { ActivatedRoute } from '@angular/router';
import { Product } from './../models/product.model';
import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product: Product = new Product();
  constructor(
    public activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe({
      next: (params) => {
        let productId: string = params['productId'];
        if (productId != undefined) {
          this.productService.getProductById(productId).subscribe((res) => {
            this.product = res;
          });
        }
      },
      error: (err) => {
        console.log(err.Message);
      },
    });
  }
}
