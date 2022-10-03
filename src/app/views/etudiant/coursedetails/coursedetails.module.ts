import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursedetailsRoutingModule } from './coursedetails-routing.module';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { FormsModule } from '@angular/forms';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    CoursedetailsComponent
  ],
  imports: [
    CommonModule,
    CoursedetailsRoutingModule,
    FormsModule,
    NgxExtendedPdfViewerModule,
    PdfViewerModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    YouTubePlayerModule
  ]
})
export class CoursedetailsModule { }
