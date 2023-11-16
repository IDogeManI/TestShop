import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main/main.component';
import { RouterModule } from '@angular/router';
import { MainModule } from './main/main.module';
import { CartModule } from './cart/cart.module';
import { CartComponent } from './cart/cart/cart.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { FeaturesRoutingModule } from './features-routing.module';

@NgModule({
  declarations: [ProductPageComponent],
  imports: [
    CommonModule,
    RouterModule,
    MainModule,
    CartModule,
    FeaturesRoutingModule,
  ],
  exports: [MainComponent, CartComponent, ProductPageComponent],
})
export class FeaturesModule {}
