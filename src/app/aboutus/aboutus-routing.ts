import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus.component';


const aboutusRoutes: Routes = [
  {
    path: '',
    component: AboutusComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(aboutusRoutes)],
  exports: [RouterModule]
})
export class AboutusRoutingModule { }
