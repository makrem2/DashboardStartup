import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionNoteRoutingModule } from './gestion-note-routing.module';
import { GestionNoteComponent } from './gestion-note/gestion-note.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GestionNoteComponent
  ],
  imports: [
    CommonModule,
    GestionNoteRoutingModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    FormsModule
  ]
})
export class GestionNoteModule { }
