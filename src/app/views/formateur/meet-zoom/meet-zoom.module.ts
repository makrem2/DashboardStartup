import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeetZoomRoutingModule } from './meet-zoom-routing.module';
import { MeetZoomComponent } from './meet-zoom/meet-zoom.component';


@NgModule({
  declarations: [
    MeetZoomComponent
  ],
  imports: [
    CommonModule,
    MeetZoomRoutingModule
  ]
})
export class MeetZoomModule { }
