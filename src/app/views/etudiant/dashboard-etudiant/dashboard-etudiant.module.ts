import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardEtudiantRoutingModule } from './dashboard-etudiant-routing.module';
import { DashboardEtudiantComponent } from './dashboard-etudiant/dashboard-etudiant.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    DashboardEtudiantComponent
  ],
  imports: [
    CommonModule,
    DashboardEtudiantRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ]
})
export class DashboardEtudiantModule { }
