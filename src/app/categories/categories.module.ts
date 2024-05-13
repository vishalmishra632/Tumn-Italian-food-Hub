import { DatePipe, CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CategoriesComponent } from './categories.component';
import { CategoriesRoutingModule } from './categories-routing';
import { NguCarouselModule } from '@ngu/carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    CategoriesComponent 
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    CategoriesRoutingModule,
    NguCarouselModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [],
  exports: [
    CategoriesComponent 
  ]
})
export class CategoriesModule { }

