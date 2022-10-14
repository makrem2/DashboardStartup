import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterformationComponent } from './ajouterformation/ajouterformation.component';

const routes: Routes = [
  {path:'',component:AjouterformationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AjouterformationRoutingModule { }
