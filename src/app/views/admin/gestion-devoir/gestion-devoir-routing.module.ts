import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionDevoirComponent } from './gestion-devoir/gestion-devoir.component';

const routes: Routes = [
  {path:'',component:GestionDevoirComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionDevoirRoutingModule { }
