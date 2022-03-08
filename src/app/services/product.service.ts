import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';

const apiUrl = 'http://localhost:3000/products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  // Returns array of products to product-list component
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(apiUrl);
  }
}
