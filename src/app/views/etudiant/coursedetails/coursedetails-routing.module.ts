import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';

const routes: Routes = [
  {path:'',component:CoursedetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursedetailsRoutingModule { }
