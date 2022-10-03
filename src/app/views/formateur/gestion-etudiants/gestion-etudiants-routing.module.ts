import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionEtudiantsComponent } from './gestion-etudiants/gestion-etudiants.component';

const routes: Routes = [
  {path:'',component:GestionEtudiantsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionEtudiantsRoutingModule { }
