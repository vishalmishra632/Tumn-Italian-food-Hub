import { DatePipe, CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BlogdetailsComponent } from './blogdetails.component';
import { BlogdetailsRoutingModule } from './blogdetails-routing';
import { NguCarouselModule } from '@ngu/carousel';

@NgModule({
  declarations: [
    BlogdetailsComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    BlogdetailsRoutingModule,
    NguCarouselModule
  ],
  providers: [],
  bootstrap: [],
  exports: [
    BlogdetailsComponent
  ]
})
export class BlogdetailsModule { }

