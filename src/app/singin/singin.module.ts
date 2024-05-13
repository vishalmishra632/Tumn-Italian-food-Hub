import { DatePipe, CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SinginComponent } from './singin.component';
import { SinginRoutingModule } from './singin-routing';
import { NguCarouselModule } from '@ngu/carousel';

@NgModule({
  declarations: [
    SinginComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    SinginRoutingModule,
    NguCarouselModule
  ],
  providers: [],
  bootstrap: [],
  exports: [
    SinginComponent
  ]
})
export class SinginModule { }

