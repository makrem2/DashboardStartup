import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { GestionCoursRoutingModule } from './gestion-cours-routing.module';
import { GestionCoursComponent } from './gestion-cours/gestion-cours.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  declarations: [
    GestionCoursComponent
  ],
  imports: [
    CommonModule,
    GestionCoursRoutingModule,
    FormsModule,
    NgxExtendedPdfViewerModule,
    PdfViewerModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    YouTubePlayerModule
  ]
})
export class GestionCoursModule { }
