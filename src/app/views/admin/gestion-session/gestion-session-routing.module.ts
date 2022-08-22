import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionSessionComponent } from './gestion-session/gestion-session.component';

const routes: Routes = [
  {path:'',component:GestionSessionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionSessionRoutingModule { }
