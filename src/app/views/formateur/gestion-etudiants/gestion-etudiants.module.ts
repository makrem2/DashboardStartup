import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionEtudiantsRoutingModule } from './gestion-etudiants-routing.module';
import { GestionEtudiantsComponent } from './gestion-etudiants/gestion-etudiants.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    GestionEtudiantsComponent
  ],
  imports: [
    CommonModule,
    GestionEtudiantsRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ]
})
export class GestionEtudiantsModule { }
