import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogdetailsComponent } from './blogdetails.component';


const blogdetailsRoutes: Routes = [
  {
    path: '',
    component: BlogdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(blogdetailsRoutes)],
  exports: [RouterModule]
})
export class BlogdetailsRoutingModule { }
