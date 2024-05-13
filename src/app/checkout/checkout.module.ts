import { DatePipe, CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CheckoutComponent } from './checkout.component';
import { CheckoutRoutingModule } from './checkout-routing';
import { NguCarouselModule } from '@ngu/carousel';

@NgModule({
  declarations: [
    CheckoutComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
   CheckoutRoutingModule,
    NguCarouselModule
  ],
  providers: [],
  bootstrap: [],
  exports: [
    CheckoutComponent
  ]
})
export class CheckoutModule { }

