import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardFormateurComponent } from './dashboard-formateur/dashboard-formateur.component';

const routes: Routes = [
  {path:'',component:DashboardFormateurComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardFormateurRoutingModule { }
