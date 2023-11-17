import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainModule } from './main/main.module';
import { CartModule } from './cart/cart.module';
import { FeaturesRoutingModule } from './features-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    MainModule,
    CartModule,
    FeaturesRoutingModule,
  ],
  exports: [],
})
export class FeaturesModule {}
