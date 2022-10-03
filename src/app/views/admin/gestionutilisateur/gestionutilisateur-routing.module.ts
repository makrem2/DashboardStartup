import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionutilisateurComponent } from './gestionutilisateur/gestionutilisateur.component';

const routes: Routes = [
  {path:'',component:GestionutilisateurComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionutilisateurRoutingModule { }
