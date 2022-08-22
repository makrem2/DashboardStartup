import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionNoteComponent } from './gestion-note/gestion-note.component';

const routes: Routes = [
  {path:'',component:GestionNoteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionNoteRoutingModule { }
