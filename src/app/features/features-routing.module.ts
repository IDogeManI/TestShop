import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './product-page/product-page.component';

const appRoute: Routes = [
  {
    path: '',
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then((m) => m.CartModule),
  },
  {
    path: 'product/:id',
    component: ProductPageComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoute)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
