import { DatePipe, CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PrivacypolicyComponent } from './privacypolicy.component';
import { PrivacypolicyRoutingModule } from './privacypolicy-routing';
import { NguCarouselModule } from '@ngu/carousel';

@NgModule({
  declarations: [
    PrivacypolicyComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    PrivacypolicyRoutingModule,
    NguCarouselModule
  ],
  providers: [],
  bootstrap: [],
  exports: [
    PrivacypolicyComponent
  ]
})
export class PrivacypolicyModule { }

