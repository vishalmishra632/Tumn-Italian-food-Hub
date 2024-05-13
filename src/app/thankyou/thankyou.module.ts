import { DatePipe, CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ThankyouComponent } from './thankyou.component';
import { ThankyouRoutingModule } from './thankyou-routing';
import { NguCarouselModule } from '@ngu/carousel';

@NgModule({
  declarations: [
    ThankyouComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    ThankyouRoutingModule,
    NguCarouselModule
  ],
  providers: [],
  bootstrap: [],
  exports: [
    ThankyouComponent
  ]
})
export class ThankyouModule { }

