import { DatePipe, CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AboutusComponent } from './aboutus.component';
import { AboutusRoutingModule } from './aboutus-routing';
import { NguCarouselModule } from '@ngu/carousel';

@NgModule({
  declarations: [
    AboutusComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    AboutusRoutingModule,
    NguCarouselModule
  ],
  providers: [],
  bootstrap: [],
  exports: [
    AboutusComponent
  ]
})
export class AboutusModule { }

