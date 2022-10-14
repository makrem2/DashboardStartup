import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterutilistateurComponent } from './ajouterutilistateur/ajouterutilistateur.component';

const routes: Routes = [
  {path:'',component:AjouterutilistateurComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AjouterutilistateurRoutingModule { }
