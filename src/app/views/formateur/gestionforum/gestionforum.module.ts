import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionforumRoutingModule } from './gestionforum-routing.module';
import { GestionforumComponent } from './gestionforum/gestionforum.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    GestionforumComponent
  ],
  imports: [
    CommonModule,
    GestionforumRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ]
})
export class GestionforumModule { }
