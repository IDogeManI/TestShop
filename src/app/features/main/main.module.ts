import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { MainRoutingModule } from './main-routing.module';
import { ProductModule } from '../product/product.module';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, MainRoutingModule, ProductModule],
  exports: [MainComponent],
})
export class MainModule {}
