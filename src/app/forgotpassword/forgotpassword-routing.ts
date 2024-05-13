import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpasswordComponent } from './forgotpassword.component';


const forgotpasswordRoutes: Routes = [
  {
    path: '',
    component: ForgotpasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(forgotpasswordRoutes)],
  exports: [RouterModule]
})
export class ForgotpasswordRoutingModule { }
