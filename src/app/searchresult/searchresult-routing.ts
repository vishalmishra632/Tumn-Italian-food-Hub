import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchresultComponent } from './searchresult.component';


const searchresultRoutes: Routes = [
  {
    path: '',
    component: SearchresultComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(searchresultRoutes)],
  exports: [RouterModule]
})
export class SearchresultRoutingModule { }
