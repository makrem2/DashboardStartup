import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionCoursComponent } from './gestion-cours/gestion-cours.component';

const routes: Routes = [
  {path:'',component:GestionCoursComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionCoursRoutingModule { }
