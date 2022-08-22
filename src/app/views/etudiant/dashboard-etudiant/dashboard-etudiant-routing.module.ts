import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardEtudiantComponent } from './dashboard-etudiant/dashboard-etudiant.component';

const routes: Routes = [
  {path:'',component:DashboardEtudiantComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardEtudiantRoutingModule { }
