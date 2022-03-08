import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  // Create a product list to store products
  productList: Product[] = [];

  constructor(private productService: ProductService) {}
  // Request array of products from server
  ngOnInit() {
    this.productService.getProducts().subscribe((products) => {
      this.productList = products;
    });
  }
}
