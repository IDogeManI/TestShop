import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Product } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/product.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  private productSubscriprion: Subscription = new Subscription();
  public allProducts: Product[] = [];
  constructor(private readonly productService: ProductService) {}
  async ngOnInit(): Promise<void> {
    this.productSubscriprion = this.productService
      .fetchAllProducts()
      .subscribe((res) => {
        this.allProducts = res;
      });
  }
  ngOnDestroy(): void {
    this.productSubscriprion.unsubscribe();
  }
}
