import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { MainRoutingModule } from './main-routing.module';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [MainComponent,ProductPageComponent,ProductComponent],
  imports: [CommonModule, MainRoutingModule],
  exports: [],
})
export class MainModule {}
