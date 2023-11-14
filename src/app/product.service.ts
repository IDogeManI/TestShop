import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './models/product.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public allProducts: Product[] = [];
  constructor(private httpClient: HttpClient) {}
  fetchAllProducts() {
    this.httpClient
      .get<Product[]>('https://fakestoreapi.com/products')
      .subscribe((res) => {
        this.allProducts = res;
        return 'Success';
      });
  }
  getProductById(id: string): Observable<Product> {
    return this.httpClient.get<Product>(
      'https://fakestoreapi.com/products' + '/' + id
    );
  }
}
