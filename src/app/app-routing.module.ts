import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const appRoute: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./features/product-page/product-page.module').then(
        (m) => m.ProductPageModule
      ),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./features/cart/cart.module').then((m) => m.CartModule),
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoute)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
