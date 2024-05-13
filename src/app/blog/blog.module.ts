import { DatePipe, CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BlogComponent } from './blog.component';
import { BlogRoutingModule } from './blog-routing';
import { NguCarouselModule } from '@ngu/carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    BlogComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    BlogRoutingModule,
    NguCarouselModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [],
  exports: [
    BlogComponent
  ]
})
export class BlogModule { }

