import { DatePipe, CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ProductComponent } from './product.component';
import { ProductRoutingModule } from './product-routing';
import { NguCarouselModule } from '@ngu/carousel';
import { Infobemservice } from '../services/Infobemservice';

@NgModule({
  declarations: [
    ProductComponent,
  
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    ProductRoutingModule,
    NguCarouselModule,
  
  ],
  providers: [Infobemservice],
  bootstrap: [],
  exports: [
    ProductComponent
  ]
})
export class ProductModule { }

