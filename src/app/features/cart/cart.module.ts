import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { CartRoutingModule } from './cart-routing.module';
import { ProductModule } from '../product/product.module';

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, CartRoutingModule, ProductModule],
  exports: [CartComponent],
})
export class CartModule {}
