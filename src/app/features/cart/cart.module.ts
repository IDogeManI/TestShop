import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { CartRoutingModule } from './cart-routing.module';
import { ProductInCartComponent } from './components/product-in-cart/product-in-cart.component';

@NgModule({
  declarations: [CartComponent, ProductInCartComponent],
  imports: [CommonModule, CartRoutingModule],
  exports: [],
})
export class CartModule {}
