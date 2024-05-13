import { DatePipe, CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CategorytwoComponent } from './categorytwo.component';
import {CategorytwoRoutingModule } from './categorytwo-routing';
import { NguCarouselModule } from '@ngu/carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    CategorytwoComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    CategorytwoRoutingModule,
    NguCarouselModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [],
  exports: [
    CategorytwoComponent
  ]
})
export class CategorytwoModule { }

