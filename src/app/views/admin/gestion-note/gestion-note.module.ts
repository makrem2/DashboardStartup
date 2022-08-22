import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionNoteRoutingModule } from './gestion-note-routing.module';
import { GestionNoteComponent } from './gestion-note/gestion-note.component';
import { authInterceptorProviders } from 'src/app/helpers/auth.interceptor';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
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
  ,
  providers: [authInterceptorProviders]
})
export class GestionNoteModule { }
