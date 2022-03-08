import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  // Initialize array to hold cart items
  cartItems = [
    // { id: 1, productId: 1, productName: 'Troy', qty: 1, price: 100}
  ];

  constructor(private msg: MessengerService) {}
  // Recieve product from messenger service, call add-to-cart function
  ngOnInit() {
    this.msg.getMsg().subscribe((product: Product) => {
      this.addProductToCart(product);
    });
  }
  // add the product object to cart items array
  addProductToCart(product: Product) {
    this.cartItems.push({
      productId: product.id,
      productName: product.name,
      price: product.price,
    });
  }
}
