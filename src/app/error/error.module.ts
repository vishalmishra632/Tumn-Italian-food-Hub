import { DatePipe, CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ErrorComponent } from './error.component';
import { ErrorRoutingModule } from './error-routing';
import { NguCarouselModule } from '@ngu/carousel';

@NgModule({
  declarations: [
    ErrorComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    ErrorRoutingModule,
    NguCarouselModule
  ],
  providers: [],
  bootstrap: [],
  exports: [
    ErrorComponent
  ]
})
export class ErrorModule { }

