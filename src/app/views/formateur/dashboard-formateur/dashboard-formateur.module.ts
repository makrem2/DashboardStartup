import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardFormateurRoutingModule } from './dashboard-formateur-routing.module';
import { DashboardFormateurComponent } from './dashboard-formateur/dashboard-formateur.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardFormateurComponent
  ],
  imports: [
    CommonModule,
    DashboardFormateurRoutingModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    FormsModule
  ]
})
export class DashboardFormateurModule { }
