import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main/main.component';
import { ProductComponent } from './product/product.component';
import { RouterModule } from '@angular/router';
import { MainModule } from './main/main.module';
import { ProductPageModule } from './product-page/product-page.module';
import { CartModule } from './cart/cart.module';
import { CartComponent } from './cart/cart/cart.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    MainModule,
    ProductPageModule,
    CartModule,
  ],
  exports: [MainComponent, ProductComponent, CartComponent],
})
export class FeaturesModule {}
