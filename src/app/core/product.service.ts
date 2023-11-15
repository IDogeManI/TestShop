import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './models/product.model';

const url: string = 'https://fakestoreapi.com/products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}
  fetchAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(url);
  }
  getProductById(id: string): Observable<Product> {
    return this.httpClient.get<Product>(url + '/' + id);
  }
}
