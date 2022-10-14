import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AjouterformationRoutingModule } from './ajouterformation-routing.module';
import { AjouterformationComponent } from './ajouterformation/ajouterformation.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AjouterformationComponent
  ],
  imports: [
    CommonModule,
    AjouterformationRoutingModule,
    FormsModule
  ]
})
export class AjouterformationModule { }
