import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main/main.component';
import { ProductComponent } from './product/product.component';
import { RouterModule } from '@angular/router';
import { MainModule } from './main/main.module';
import { ProductPageModule } from './product-page/product-page.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule, MainModule, ProductPageModule],
  exports: [MainComponent, ProductComponent],
})
export class FeaturesModule {}
