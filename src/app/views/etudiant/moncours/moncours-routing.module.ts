import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoncoursComponent } from './moncours/moncours.component';

const routes: Routes = [
  {path:'',component:MoncoursComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoncoursRoutingModule { }
