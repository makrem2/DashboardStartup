import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionFormationsComponent } from './gestion-formations/gestion-formations.component';

const routes: Routes = [
  {path:'',component:GestionFormationsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionFormationsRoutingModule { }
