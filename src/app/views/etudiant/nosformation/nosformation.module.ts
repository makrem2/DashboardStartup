import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NosformationRoutingModule } from './nosformation-routing.module';
import { NosformationComponent } from './nosformation/nosformation.component';


@NgModule({
  declarations: [
    NosformationComponent
  ],
  imports: [
    CommonModule,
    NosformationRoutingModule
  ]
})
export class NosformationModule { }
