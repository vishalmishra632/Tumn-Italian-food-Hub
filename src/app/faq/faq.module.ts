import { DatePipe, CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FaqComponent } from './faq.component';
import { FaqRoutingModule } from './faq-routing';
import { NguCarouselModule } from '@ngu/carousel';

@NgModule({
  declarations: [
    FaqComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    FaqRoutingModule,
    NguCarouselModule
  ],
  providers: [],
  bootstrap: [],
  exports: [
    FaqComponent
  ]
})
export class FaqModule { }

