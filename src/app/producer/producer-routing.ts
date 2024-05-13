import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProducerComponent } from './producer.component';


const producerRoutes: Routes = [
  {
    path: '',
    component: ProducerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(producerRoutes)],
  exports: [RouterModule]
})
export class ProducerRoutingModule { }
