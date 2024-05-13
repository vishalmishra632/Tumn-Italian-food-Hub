import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorytwoComponent } from './categorytwo.component';


const categorytwoRoutes: Routes = [
  {
    path: '',
    component: CategorytwoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(categorytwoRoutes)],
  exports: [RouterModule]
})
export class CategorytwoRoutingModule { }
