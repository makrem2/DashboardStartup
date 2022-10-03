import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepotdevoirRoutingModule } from './depotdevoir-routing.module';
import { DepotdevoirComponent } from './depotdevoir/depotdevoir.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    DepotdevoirComponent
  ],
  imports: [
    CommonModule,
    DepotdevoirRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
  ]
})
export class DepotdevoirModule { }
