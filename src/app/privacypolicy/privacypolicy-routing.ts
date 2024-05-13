import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivacypolicyComponent } from './privacypolicy.component';


const privacypolicyRoutes: Routes = [
  {
    path: '',
    component: PrivacypolicyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(privacypolicyRoutes)],
  exports: [RouterModule]
})
export class PrivacypolicyRoutingModule { }
