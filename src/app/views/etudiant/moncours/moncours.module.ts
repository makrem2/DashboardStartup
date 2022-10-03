import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoncoursRoutingModule } from './moncours-routing.module';
import { MoncoursComponent } from './moncours/moncours.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    MoncoursComponent
  ],
  imports: [
    CommonModule,
    MoncoursRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ]
})
export class MoncoursModule { }
