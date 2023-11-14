import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { MainComponent } from '../main/main.component';
import { ProductComponent } from '../product/product.component';

@NgModule({
  declarations: [HeaderComponent, MainComponent, ProductComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, MainComponent, ProductComponent],
})
export class CoreModule {}
