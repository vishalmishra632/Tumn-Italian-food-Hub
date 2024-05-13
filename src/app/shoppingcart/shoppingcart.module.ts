import { DatePipe, CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ShoppingcartComponent } from './shoppingcart.component';
import { ShoppingcartRoutingModule } from './shoppingcart-routing';
import { NguCarouselModule } from '@ngu/carousel';

@NgModule({
  declarations: [
    ShoppingcartComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    ShoppingcartRoutingModule,
    NguCarouselModule
  ],
  providers: [],
  bootstrap: [],
  exports: [
    ShoppingcartComponent
  ]
})
export class ShoppingcartModule { }

