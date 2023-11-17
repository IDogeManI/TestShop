import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { MainRoutingModule } from './main-routing.module';
import { ProductModule } from '../product/product.module';
import { ProductPageComponent } from './components/product-page/product-page.component';

@NgModule({
  declarations: [MainComponent,ProductPageComponent],
  imports: [CommonModule, MainRoutingModule, ProductModule],
  exports: [MainComponent,ProductPageComponent],
})
export class MainModule {}
