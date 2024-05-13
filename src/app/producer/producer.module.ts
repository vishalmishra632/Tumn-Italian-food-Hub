import { DatePipe, CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ProducerComponent } from './producer.component';
import { ProducerRoutingModule } from './producer-routing';
import { NguCarouselModule } from '@ngu/carousel';

@NgModule({
  declarations: [
    ProducerComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    ProducerRoutingModule,
    NguCarouselModule
  ],
  providers: [],
  bootstrap: [],
  exports: [
    ProducerComponent
  ]
})
export class ProducerModule { }

