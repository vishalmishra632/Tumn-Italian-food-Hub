import { DatePipe, CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ForgotpasswordComponent } from './forgotpassword.component';
import { ForgotpasswordRoutingModule } from './forgotpassword-routing';
import { NguCarouselModule } from '@ngu/carousel';

@NgModule({
  declarations: [
    ForgotpasswordComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    ForgotpasswordRoutingModule,
    NguCarouselModule
  ],
  providers: [],
  bootstrap: [],
  exports: [
    ForgotpasswordComponent
  ]
})
export class ForgotpasswordModule { }

