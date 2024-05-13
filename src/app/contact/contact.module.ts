import { DatePipe, CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing';
import { NguCarouselModule } from '@ngu/carousel';

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    ContactRoutingModule,
    NguCarouselModule
  ],
  providers: [],
  bootstrap: [],
  exports: [
    ContactComponent
  ]
})
export class ContactModule { }

