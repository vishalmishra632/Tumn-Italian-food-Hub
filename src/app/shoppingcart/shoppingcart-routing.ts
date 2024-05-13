import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingcartComponent } from './shoppingcart.component';


const shoppingcartRoutes: Routes = [
  {
    path: '',
    component: ShoppingcartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(shoppingcartRoutes)],
  exports: [RouterModule]
})
export class  ShoppingcartRoutingModule { }
