import { DatePipe, CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SingupComponent } from './singup.component';
import { SingupRoutingModule } from './singup-routing';

@NgModule({
  declarations: [
    SingupComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    SingupRoutingModule
  ],
  providers: [],
  bootstrap: [],
  exports: [
    SingupComponent
  ]
})
export class SingupModule { }

