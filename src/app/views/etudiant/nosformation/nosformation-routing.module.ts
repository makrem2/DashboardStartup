import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NosformationComponent } from './nosformation/nosformation.component';

const routes: Routes = [
  {path:'',component:NosformationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NosformationRoutingModule { }
