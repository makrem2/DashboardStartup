import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeetZoomComponent } from './meet-zoom/meet-zoom.component';

const routes: Routes = [
  {path:'',component:MeetZoomComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeetZoomRoutingModule { }
