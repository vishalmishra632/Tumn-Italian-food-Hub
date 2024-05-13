import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinginComponent } from './singin.component';


const singinRoutes: Routes = [
  {
    path: '',
    component: SinginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(singinRoutes)],
  exports: [RouterModule]
})
export class SinginRoutingModule { }
