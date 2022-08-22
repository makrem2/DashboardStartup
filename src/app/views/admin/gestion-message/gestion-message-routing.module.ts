import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionMessageComponent } from './gestion-message/gestion-message.component';

const routes: Routes = [
  {path:'',component:GestionMessageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionMessageRoutingModule { }
