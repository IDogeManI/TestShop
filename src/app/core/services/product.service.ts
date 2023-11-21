import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

const API_URL: string = 'https://fakestoreapi.com/products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}
  fetchAllProducts$(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(API_URL);
  }
  getProductById$(id: string|null): Observable<Product> {
    return this.httpClient.get<Product>(API_URL + '/' + id);
  }
}
