import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepotdevoirComponent } from './depotdevoir/depotdevoir.component';

const routes: Routes = [
  {path:'',component:DepotdevoirComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepotdevoirRoutingModule { }
