import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingupComponent } from './singup.component';


const singupRoutes: Routes = [
  {
    path: '',
    component: SingupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(singupRoutes)],
  exports: [RouterModule]
})
export class SingupRoutingModule { } 
