import { DatePipe, CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SearchresultComponent } from './searchresult.component';
import { SearchresultRoutingModule } from './searchresult-routing';
import { NguCarouselModule } from '@ngu/carousel';

@NgModule({
  declarations: [
    SearchresultComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    SearchresultRoutingModule,
    NguCarouselModule
  ],
  providers: [],
  bootstrap: [],
  exports: [
    SearchresultComponent
  ]
})
export class SearchresultModule { }

