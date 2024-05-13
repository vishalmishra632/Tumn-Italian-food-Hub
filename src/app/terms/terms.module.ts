import { DatePipe, CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TermsComponent } from './terms.component';
import { TermsRoutingModule } from './terms-routing';
import { NguCarouselModule } from '@ngu/carousel';

@NgModule({
  declarations: [
    TermsComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    TermsRoutingModule,
    NguCarouselModule
  ],
  providers: [],
  bootstrap: [],
  exports: [
    TermsComponent
  ]
})
export class TermsModule { }

