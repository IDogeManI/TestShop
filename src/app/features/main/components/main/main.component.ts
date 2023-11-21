import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit, OnDestroy {
  private productSubscriprion!: Subscription;
  public allProducts: Product[] = [];
  constructor(private readonly productService: ProductService) {}
  public ngOnInit(): void {
    this.productSubscriprion = this.productService
      .fetchAllProducts$()
      .subscribe((res) => {
        this.allProducts = res;
      });
  }
  public ngOnDestroy(): void {
    if (this.productSubscriprion) {
      this.productSubscriprion.unsubscribe();
    }
  }
}
