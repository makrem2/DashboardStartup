import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AjouterutilistateurRoutingModule } from './ajouterutilistateur-routing.module';
import { AjouterutilistateurComponent } from './ajouterutilistateur/ajouterutilistateur.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AjouterutilistateurComponent
  ],
  imports: [
    CommonModule,
    AjouterutilistateurRoutingModule,
    FormsModule
  ]
})
export class AjouterutilistateurModule { }
